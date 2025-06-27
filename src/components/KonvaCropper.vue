<script setup lang="ts">
import Konva from 'konva';

interface IKonvaCropperProps {
  imageSrc?: string;
  width?: number;
  height?: number;
}

const { setOriginalImage } = useKonvaStore();
const props = withDefaults(defineProps<IKonvaCropperProps>(), {
  width: 360,
  height: 640,
  imageSrc: undefined,
});

const stageRef = ref();
const imageRef = ref<HTMLImageElement | null>(null);
const imageKonvaRef = ref<Konva.Image | null>(null);
const layerRef = ref();

const cropRectRef = ref<Konva.Rect | null>(null);
const overlayRef = ref<Konva.Shape | null>(null);
const gridGroupRef = ref<Konva.Group | null>(null);

const stageSize = computed(() => ({
  width: props.width,
  height: props.height,
}));

const crop = ref({
  x: 0,
  y: 0,
  width: stageSize.value.width,
  height: stageSize.value.height,
});

const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

const createKonvaImage = () => {
  if (!imageRef.value) return;
  const konvaImg = new Konva.Image({
    image: imageRef.value,
    width: stageSize.value.width,
    height: stageSize.value.height,
  });
  imageKonvaRef.value = konvaImg;
  return konvaImg;
};

const createKonvaOverlay = () => {
  const overlay = new Konva.Shape({
    x: 0,
    y: 0,
    width: stageSize.value.width,
    height: stageSize.value.height,
    fill: 'black',
    opacity: 0.5,
    sceneFunc: (context, shape) => {
      context.beginPath();
      context.rect(0, 0, shape.getAttr('width'), shape.getAttr('height'));
      context.rect(crop.value.x, crop.value.y, crop.value.width, crop.value.height);
      context.closePath();
      context.fill('evenodd');
    },
    listening: false,
  });
  overlayRef.value = overlay;
  return overlay;
};

const createKonvaCropRect = () => {
  const rect = new Konva.Rect({
    ...crop.value,
  });
  cropRectRef.value = rect;
  return rect;
};

const createKonvaGridGroup = () => {
  const gridGroup = new Konva.Group({ listening: false });
  const hLine1 = new Konva.Line({ stroke: 'white', strokeWidth: 1, lineCap: 'round', dash: [4, 4] });
  const hLine2 = new Konva.Line({ stroke: 'white', strokeWidth: 1, lineCap: 'round', dash: [4, 4] });
  const vLine1 = new Konva.Line({ stroke: 'white', strokeWidth: 1, lineCap: 'round', dash: [4, 4] });
  const vLine2 = new Konva.Line({ stroke: 'white', strokeWidth: 1, lineCap: 'round', dash: [4, 4] });
  gridGroup.add(hLine1, hLine2, vLine1, vLine2);
  gridGroupRef.value = gridGroup;
  return gridGroup;
};

const draw = () => {
  const layer = layerRef.value.getNode();
  if (!layer || !imageRef.value) return;
  layer.destroyChildren();

  const konvaImg = createKonvaImage();
  const overlay = createKonvaOverlay();
  const rect = createKonvaCropRect();
  const gridGroup = createKonvaGridGroup();

  layer.add(konvaImg);
  layer.add(overlay);
  layer.add(rect);
  layer.add(gridGroup);

  const anchors = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] as const;
  const anchorMap: Record<(typeof anchors)[number], Konva.Group> = {};

  const lineLength = 20;
  const lineWidth = 4;

  anchors.forEach((pos) => {
    const group = new Konva.Group({
      draggable: true,
    });

    // 모바일 터치를 위한 보이지 않는 터치 영역(Hit Area) 생성
    const hitAreaSize = 44;
    const hitArea = new Konva.Rect({
      width: hitAreaSize,
      height: hitAreaSize,
      // 앵커의 기준점(0,0)이 터치 영역의 중심에 오도록 offset 설정
      offsetX: hitAreaSize / 2,
      offsetY: hitAreaSize / 2,
      fill: 'transparent', // 투명
    });
    group.add(hitArea); // 그룹에 터치 영역을 먼저 추가

    let line1Points: number[], line2Points: number[];
    if (pos === 'topLeft') {
      line1Points = [0, 0, lineLength, 0];
      line2Points = [0, 0, 0, lineLength];
    } else if (pos === 'topRight') {
      line1Points = [0, 0, -lineLength, 0];
      line2Points = [0, 0, 0, lineLength];
    } else if (pos === 'bottomLeft') {
      line1Points = [0, 0, lineLength, 0];
      line2Points = [0, 0, 0, -lineLength];
    } else {
      line1Points = [0, 0, -lineLength, 0];
      line2Points = [0, 0, 0, -lineLength];
    }
    const line1 = new Konva.Line({ points: line1Points!, stroke: 'white', strokeWidth: lineWidth, lineCap: 'round' });
    const line2 = new Konva.Line({ points: line2Points!, stroke: 'white', strokeWidth: lineWidth, lineCap: 'round' });
    group.add(line1, line2);

    group.on('dragmove', () => {
      const old = { ...crop.value };
      const minSize = lineLength * 2; // 최소 크기 (앵커 크기 * 2)

      let newX = group.x();
      let newY = group.y();

      if (pos === 'topLeft') {
        newX = clamp(newX, 0, old.x + old.width - minSize);
        newY = clamp(newY, 0, old.y + old.height - minSize);
      } else if (pos === 'topRight') {
        newX = clamp(newX, old.x + minSize, stageSize.value.width);
        newY = clamp(newY, 0, old.y + old.height - minSize);
      } else if (pos === 'bottomLeft') {
        newX = clamp(newX, 0, old.x + old.width - minSize);
        newY = clamp(newY, old.y + minSize, stageSize.value.height);
      } else if (pos === 'bottomRight') {
        newX = clamp(newX, old.x + minSize, stageSize.value.width);
        newY = clamp(newY, old.y + minSize, stageSize.value.height);
      }

      // 앵커의 시각적 위치를 제한된 값으로 설정 (스냅 현상 방지)
      group.position({ x: newX, y: newY });

      // 2. 제한된 앵커 위치를 기반으로 crop 영역을 업데이트합니다.
      if (pos === 'topLeft') {
        crop.value.width = old.width + old.x - newX;
        crop.value.height = old.height + old.y - newY;
        crop.value.x = newX;
        crop.value.y = newY;
      } else if (pos === 'topRight') {
        crop.value.width = newX - old.x;
        crop.value.height = old.height + old.y - newY;
        crop.value.y = newY;
      } else if (pos === 'bottomLeft') {
        crop.value.width = old.width + old.x - newX;
        crop.value.height = newY - old.y;
        crop.value.x = newX;
      } else if (pos === 'bottomRight') {
        crop.value.width = newX - old.x;
        crop.value.height = newY - old.y;
      }

      updateCropUI();
    });
    anchorMap[pos] = group;
    layer.add(group);
  });

  const updateCropUI = () => {
    const { x, y, width, height } = crop.value;
    cropRectRef.value?.setAttrs({ x, y, width, height });
    anchorMap.topLeft.position({ x: x, y: y });
    anchorMap.topRight.position({ x: x + width, y: y });
    anchorMap.bottomLeft.position({ x: x, y: y + height });
    anchorMap.bottomRight.position({ x: x + width, y: y + height });

    if (gridGroupRef.value) {
      const [hLine1, hLine2, vLine1, vLine2] = gridGroupRef.value.children as Konva.Line[];
      const thirdHeight = height / 3;
      const thirdWidth = width / 3;
      hLine1.points([x, y + thirdHeight, x + width, y + thirdHeight]);
      hLine2.points([x, y + thirdHeight * 2, x + width, y + thirdHeight * 2]);
      vLine1.points([x + thirdWidth, y, x + thirdWidth, y + height]);
      vLine2.points([x + thirdWidth * 2, y, x + thirdWidth * 2, y + height]);
    }
    layer.batchDraw();
  };

  updateCropUI();
  layer.sortChildrenByZIndex();
};

const cropImage = () => {
  if (!imageKonvaRef.value) return;
  overlayRef.value?.hide();
  gridGroupRef.value?.hide();
  cropRectRef.value?.hide();
  const layer = layerRef.value.getNode();
  layer.find('Group').forEach((group: Konva.Group) => {
    group.hide();
  });

  const dataURL = imageKonvaRef.value.toDataURL({
    x: crop.value.x,
    y: crop.value.y,
    width: crop.value.width,
    height: crop.value.height,
    mimeType: 'image/png',
    pixelRatio: 1,
  });

  overlayRef.value?.show();
  gridGroupRef.value?.show();
  cropRectRef.value?.show();
  layer.find('Group').forEach((group: Konva.Group) => {
    group.show();
  });

  setOriginalImage(dataURL);
};

watch(
  () => props.imageSrc,
  (newSrc) => {
    if (!newSrc) return;
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      imageRef.value = img;
      if (stageRef.value) {
        draw();
      }
    };
    img.src = newSrc;
  },
  { immediate: true }
);

onMounted(() => {
  if (props.imageSrc && imageRef.value) {
    draw();
  }
});

defineExpose({
  cropImage,
});
</script>

<template>
  <v-stage ref="stageRef" :config="stageSize">
    <v-layer ref="layerRef" />
  </v-stage>
</template>

<style scoped></style>

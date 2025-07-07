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

type AnchorPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
const anchorMap = ref<Record<AnchorPosition, Konva.Group>>({} as any);

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

const updateCropUI = () => {
  if (!cropRectRef.value || Object.keys(anchorMap.value).length === 0) return;

  const { x, y, width, height } = crop.value;
  cropRectRef.value.setAttrs({ x, y, width, height });

  anchorMap.value.topLeft.position({ x, y });
  anchorMap.value.topRight.position({ x: x + width, y });
  anchorMap.value.bottomLeft.position({ x, y: y + height });
  anchorMap.value.bottomRight.position({ x: x + width, y: y + height });

  if (gridGroupRef.value) {
    const [hLine1, hLine2, vLine1, vLine2] = gridGroupRef.value.children as Konva.Line[];
    const thirdHeight = height / 3;
    const thirdWidth = width / 3;
    hLine1.points([x, y + thirdHeight, x + width, y + thirdHeight]);
    hLine2.points([x, y + thirdHeight * 2, x + width, y + thirdHeight * 2]);
    vLine1.points([x + thirdWidth, y, x + thirdWidth, y + height]);
    vLine2.points([x + thirdWidth * 2, y, x + thirdWidth * 2, y + height]);
  }
  layerRef.value?.getNode()?.batchDraw();
};

const lineLength = 20;

// 앵커 드래그 로직을 처리하는 통합 함수
const handleAnchorDrag = (pos: AnchorPosition, group: Konva.Group) => {
  const minSize = lineLength * 2;
  const newPos = group.position();

  const clampedX = clamp(newPos.x, 0, props.width);
  const clampedY = clamp(newPos.y, 0, props.height);
  group.position({ x: clampedX, y: clampedY });

  let newX = crop.value.x;
  let newY = crop.value.y;
  let newWidth = crop.value.width;
  let newHeight = crop.value.height;

  // 기준점: 대각선 반대편
  let fixedX, fixedY;

  switch (pos) {
    case 'topLeft':
      fixedX = crop.value.x + crop.value.width;
      fixedY = crop.value.y + crop.value.height;
      newX = Math.min(clampedX, fixedX - minSize);
      newY = Math.min(clampedY, fixedY - minSize);
      newWidth = fixedX - newX;
      newHeight = fixedY - newY;
      break;

    case 'topRight':
      fixedX = crop.value.x;
      fixedY = crop.value.y + crop.value.height;
      newX = fixedX;
      newY = Math.min(clampedY, fixedY - minSize);
      newWidth = Math.max(minSize, clampedX - fixedX);
      newHeight = fixedY - newY;
      break;

    case 'bottomLeft':
      fixedX = crop.value.x + crop.value.width;
      fixedY = crop.value.y;
      newX = Math.min(clampedX, fixedX - minSize);
      newY = fixedY;
      newWidth = fixedX - newX;
      newHeight = Math.max(minSize, clampedY - fixedY);
      break;

    case 'bottomRight':
      fixedX = crop.value.x;
      fixedY = crop.value.y;
      newX = fixedX;
      newY = fixedY;
      newWidth = Math.max(minSize, clampedX - fixedX);
      newHeight = Math.max(minSize, clampedY - fixedY);
      break;
  }

  crop.value.x = newX;
  crop.value.y = newY;
  crop.value.width = newWidth;
  crop.value.height = newHeight;

  updateCropUI();
};

// 앵커별 드로잉 및 로직 설정을 위한 객체
const anchorConfigs: Record<AnchorPosition, { xSign: 1 | -1; ySign: 1 | -1 }> = {
  topLeft: { xSign: 1, ySign: 1 },
  topRight: { xSign: -1, ySign: 1 },
  bottomLeft: { xSign: 1, ySign: -1 },
  bottomRight: { xSign: -1, ySign: -1 },
};

const draw = () => {
  const layer = layerRef.value.getNode();
  if (!layer || !imageRef.value) return;

  layer.destroyChildren();

  // 1. 기본 요소들 생성 및 레이어에 추가
  layer.add(createKonvaImage());
  layer.add(createKonvaOverlay());
  layer.add(createKonvaCropRect());
  layer.add(createKonvaGridGroup());

  const lineWidth = 4;
  const hitAreaSize = 44; // 모바일 터치 영역 크기

  // 2. 앵커 생성 로직 (config 객체를 사용하여 반복문 단순화)
  (Object.keys(anchorConfigs) as AnchorPosition[]).forEach((pos) => {
    const config = anchorConfigs[pos];
    const group = new Konva.Group({ draggable: true });

    // 터치 영역
    group.add(
      new Konva.Rect({
        width: hitAreaSize,
        height: hitAreaSize,
        offsetX: hitAreaSize / 2,
        offsetY: hitAreaSize / 2,
      })
    );

    // 앵커 모양 (L자 라인)
    const line1 = new Konva.Line({
      points: [0, 0, lineLength * config.xSign, 0],
      stroke: 'white',
      strokeWidth: lineWidth,
      lineCap: 'round',
    });
    const line2 = new Konva.Line({
      points: [0, 0, 0, lineLength * config.ySign],
      stroke: 'white',
      strokeWidth: lineWidth,
      lineCap: 'round',
    });
    group.add(line1, line2);

    // 이벤트 핸들러 연결
    group.on('dragmove', () => handleAnchorDrag(pos, group));

    anchorMap.value[pos] = group;
    layer.add(group);
  });

  // 3. 초기 UI 상태 업데이트
  updateCropUI();
};

const cropImage = () => {
  if (!imageKonvaRef.value) return;
  overlayRef.value?.hide();
  gridGroupRef.value?.hide();
  cropRectRef.value?.hide();
  const layer = layerRef.value.getNode();
  layer.find('Group').forEach((group: Konva.Group) => group.hide());

  const dataURL = imageKonvaRef.value.toDataURL({
    ...crop.value,
    mimeType: 'image/png',
    pixelRatio: 1,
  });

  overlayRef.value?.show();
  gridGroupRef.value?.show();
  cropRectRef.value?.show();
  layer.find('Group').forEach((group: Konva.Group) => group.show());

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

defineExpose({
  cropImage,
});
</script>

<template>
  <v-stage ref="stageRef" :config="stageSize">
    <v-layer ref="layerRef" />
  </v-stage>
</template>

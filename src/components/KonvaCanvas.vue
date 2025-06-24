<script setup lang="ts">
import type Konva from 'konva';

interface KonvaCanvasProps {
  imageSrc?: string;
  width?: number;
  height?: number;
  photoInfoList: { title: string; content: string }[];
}

const props = defineProps<KonvaCanvasProps>();
const getStageSize = computed(() => ({
  width: props.width || window.innerWidth,
  height: props.height || window.innerHeight,
}));

const isDragging = ref(false);
const backgroundImage = ref<HTMLImageElement | null>(null);
const transformerRef = ref();
const crop = ref({ x: 0, y: 0, width: getStageSize.value.width - 1, height: getStageSize.value.height - 1 });
const cropRect = ref();
const stageRef = ref();
const rotation = ref(0);

const imageConfig = computed(() => ({
  image: backgroundImage.value,
  width: getStageSize.value.width,
  height: getStageSize.value.height,
  rotation: rotation.value,
  offset: {
    x: getStageSize.value.width / 2,
    y: getStageSize.value.height / 2,
  },
  x: getStageSize.value.width / 2,
  y: getStageSize.value.height / 2,
}));

const cropRectConfig = computed(() => ({
  x: crop.value.x,
  y: crop.value.y,
  width: crop.value.width,
  height: crop.value.height,
  draggable: true,
}));

const transformerConfig = {
  rotateEnabled: false,
  anchorCornerRadius: 10,
  anchorSize: 6,
};

const groupConfig = computed(() => ({
  x: getStageSize.value.width / 2,
  y: getStageSize.value.height - 150,
  draggable: true,
}));

const rectConfig = computed(() => ({
  width: 200,
  height: props.photoInfoList.length * 20 + 30,
  fill: '#fff',
  stroke: '#000',
  strokeWidth: 0.1,
  cornerRadius: 10,
}));

const textConfig = (index: number, title: string, content: string) => {
  return {
    text: `${title}: ${content}`,
    x: 20,
    y: 20 + index * 20,
    fontSize: 14,
    fontFamily: 'Arial',
    width: 200,
    align: 'left',
    fill: '#000',
  };
};

const handleDragStart = () => {
  isDragging.value = true;
};

const handleDragEnd = () => {
  isDragging.value = false;
};

const loadImage = async () => {
  if (!props.imageSrc) return;

  const img = new Image();
  img.onload = () => {
    backgroundImage.value = img;
  };

  img.src = props.imageSrc;
};

const rotateImage = () => {
  rotation.value += 90;
  if (rotation.value >= 360) {
    rotation.value = 0;
  }
};

const cropImage = () => {
  const stage = stageRef.value?.getNode();
  if (!stage) return;

  const { x, y, width, height } = crop.value;
  const dataURL = stage.toDataURL({
    x,
    y,
    width: width,
    height: height,
    mimeType: 'image/jpeg',
    quality: 1,
    pixelRatio: 1,
  });

  return dataURL;
};

const onDragMove = (e: { target: Konva.Node }) => {
  const node = e.target;
  crop.value.x = node.x();
  crop.value.y = node.y();

  // 이동된 위치
  let newX = node.x();
  let newY = node.y();

  // 범위 제한
  newX = Math.max(0, Math.min(newX, getStageSize.value.width - node.width()));
  newY = Math.max(0, Math.min(newY, getStageSize.value.height - node.height()));

  node.x(newX);
  node.y(newY);

  crop.value.x = newX;
  crop.value.y = newY;
};

const onTransformEnd = () => {
  const node = cropRect.value.getNode();

  // Konva에서 transform 적용 후에는 scale이 적용되므로 이를 반영해 계산
  const scaleX = node.scaleX();
  const scaleY = node.scaleY();

  crop.value.x = node.x();
  crop.value.y = node.y();
  crop.value.width = node.width() * scaleX;
  crop.value.height = node.height() * scaleY;

  node.scaleX(1);
  node.scaleY(1);
};

watch(() => props.imageSrc, loadImage, { immediate: true });
onMounted(() => {
  transformerRef.value?.getNode().nodes([cropRect.value?.getNode()]);
});
defineExpose({ cropImage, rotateImage });
</script>

<template>
  <v-stage ref="stageRef" :config="getStageSize">
    <v-layer>
      <v-image v-if="backgroundImage" :config="imageConfig" />

      <v-rect ref="cropRect" :config="cropRectConfig" @dragmove="onDragMove" @transformend="onTransformEnd" />
      <v-transformer ref="transformerRef" :config="transformerConfig" />

      <v-group v-if="photoInfoList.length > 0" :config="groupConfig" @dragstart="handleDragStart" @dragend="handleDragEnd">
        <v-rect :config="rectConfig" />
        <v-text v-for="(text, index) in photoInfoList" :key="index" :config="textConfig(index, text.title, text.content)" />
      </v-group>
    </v-layer>
  </v-stage>
</template>

<style lang="scss" scoped></style>

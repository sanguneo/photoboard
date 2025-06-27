<script setup lang="ts">
import pointer from '@/assets/images/pointer.svg';
import { useImage } from 'vue-konva';

interface KonvaCanvasProps {
  isArrow?: boolean;
  imageSrc?: string;
  width?: number;
  height?: number;
  photoInfoList: { title: string; content: string }[];
}

const [pointerImage] = useImage(pointer);
const props = defineProps<KonvaCanvasProps>();
const getStageSize = computed(() => ({
  width: props.width || window.innerWidth,
  height: props.height || window.innerHeight,
}));

const isDragging = ref(false);
const backgroundImage = ref<HTMLImageElement | null>(null);
const stageRef = ref();
const rotation = ref(0);
const layerRef = ref();

const pointerConfig = computed(() => ({
  x: getStageSize.value.width / 3,
  y: getStageSize.value.height / 3,
  image: pointerImage.value,
  width: 20,
  height: 20,
  draggable: true,
}));

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

watch(() => props.imageSrc, loadImage, { immediate: true });
defineExpose({ rotateImage });
</script>

<template>
  <v-stage ref="stageRef" :config="getStageSize">
    <v-layer ref="layerRef">
      <v-image v-if="backgroundImage" :config="imageConfig" />
      <v-image v-if="isArrow && pointerImage" :config="pointerConfig" />
      <v-group v-if="photoInfoList.length > 0" :config="groupConfig" @dragstart="handleDragStart" @dragend="handleDragEnd">
        <v-rect :config="rectConfig" />
        <v-text v-for="(text, index) in photoInfoList" :key="index" :config="textConfig(index, text.title, text.content)" />
      </v-group>
    </v-layer>
  </v-stage>
</template>

<style lang="scss" scoped></style>

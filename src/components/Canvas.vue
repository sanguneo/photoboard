<script setup lang="ts">
const props = defineProps<{
  imageSrc: string;
  textList: { title: string; content: string }[];
  width?: number;
  height?: number;
}>();

const canvasRef = ref<HTMLCanvasElement | null>(null);
const width = props.width || 360;
const height = props.height || 640;

// 사각형 기본 위치
const rect = ref({ x: 20, y: height - 120, w: width - 40, h: 20 + props.textList.length * 20 });
const targetPos = ref({ x: rect.value.x, y: rect.value.y });
const isDragging = ref(false);
const dragOffset = ref({ x: 0, y: 0 });
let animationFrameId = 0;

// 선형 보간 함수
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const draw = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const img = new Image();
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    ctx.fillRect(rect.value.x, rect.value.y, rect.value.w, rect.value.h);

    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    props.textList.forEach((text, i) => {
      ctx.fillText(text.title, rect.value.x + 10, rect.value.y + 20 + i * 20);
      ctx.fillText(text.content, rect.value.x + 50, rect.value.y + 20 + i * 20);
    });
  };
  img.src = props.imageSrc;
};

const isInsideRect = (x: number, y: number) => {
  const r = rect.value;
  return x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h;
};

// 공통 위치 업데이트 (제한 포함)
const updateTargetPos = (x: number, y: number) => {
  const newX = x - dragOffset.value.x;
  const newY = y - dragOffset.value.y;

  targetPos.value.x = Math.min(Math.max(0, newX), width - rect.value.w);
  targetPos.value.y = Math.min(Math.max(0, newY), height - rect.value.h);
};

// 마우스 이벤트
const startDragMouse = (e: MouseEvent) => {
  const rectCanvas = canvasRef.value?.getBoundingClientRect();
  if (!rectCanvas) return;
  const x = e.clientX - rectCanvas.left;
  const y = e.clientY - rectCanvas.top;

  if (isInsideRect(x, y)) {
    isDragging.value = true;
    dragOffset.value = { x: x - rect.value.x, y: y - rect.value.y };
  }
};

const onDragMouse = (e: MouseEvent) => {
  if (!isDragging.value) return;
  const rectCanvas = canvasRef.value?.getBoundingClientRect();
  if (!rectCanvas) return;
  const x = e.clientX - rectCanvas.left;
  const y = e.clientY - rectCanvas.top;
  updateTargetPos(x, y);
};

// 터치 이벤트
const startDragTouch = (e: TouchEvent) => {
  const rectCanvas = canvasRef.value?.getBoundingClientRect();
  if (!rectCanvas) return;
  const touch = e.touches[0];
  const x = touch.clientX - rectCanvas.left;
  const y = touch.clientY - rectCanvas.top;

  if (isInsideRect(x, y)) {
    isDragging.value = true;
    dragOffset.value = { x: x - rect.value.x, y: y - rect.value.y };
  }
};

const onDragTouch = (e: TouchEvent) => {
  if (!isDragging.value) return;
  const rectCanvas = canvasRef.value?.getBoundingClientRect();
  if (!rectCanvas) return;
  const touch = e.touches[0];
  const x = touch.clientX - rectCanvas.left;
  const y = touch.clientY - rectCanvas.top;
  updateTargetPos(x, y);
};

const endDrag = () => {
  isDragging.value = false;
};

// 부드러운 위치 보간 애니메이션
const animate = () => {
  animationFrameId = requestAnimationFrame(animate);
  rect.value.x = lerp(rect.value.x, targetPos.value.x, 0.2);
  rect.value.y = lerp(rect.value.y, targetPos.value.y, 0.2);
  draw();
};

watch(
  () => props.imageSrc,
  () => {
    if (props.imageSrc) draw();
  }
);

onMounted(() => {
  draw();
  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>

<template>
  <canvas ref="canvasRef" :width="width" :height="height" @mousedown="startDragMouse" @mousemove="onDragMouse" @mouseup="endDrag" @mouseleave="endDrag" @touchstart.prevent="startDragTouch" @touchmove.prevent="onDragTouch" @touchend="endDrag" />
</template>

<style scoped>
canvas {
  border: 1px solid #ccc;
  touch-action: none;
  cursor: grab;
  display: block;
}
.save-button {
  margin-top: 12px;
  padding: 8px 16px;
  font-size: 14px;
}
</style>

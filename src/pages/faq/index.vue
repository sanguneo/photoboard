<script setup lang="ts">
import { FAQ_LIST, type faqCategory } from '@/shared/constants/faq.constant.ts';

const currentCategory = ref<'ALL' | faqCategory>('ALL');
const faqList = computed(() => {
  if (currentCategory.value === 'ALL') return FAQ_LIST;
  return FAQ_LIST.filter(({ category }) => category === currentCategory.value);
});

const onClickCategory = (category: 'ALL' | faqCategory) => {
  currentCategory.value = category;
};

</script>

<template>
  <main aria-label="메인 콘텐츠">
    <section class="faq-header" aria-label="문서함 검색">
      <div class="faq-info">
        <h3>
          고객센터
        </h3>
        <span>
          월 - 금요일 | 09:00 - 17:00
        </span>
      </div>
      <a href="tel:0262817336">
        <div class="faq-callnum">
          <img src="@/assets/images/call.svg" alt="전화기" class="icon icon-16">
          <strong>
            02-6281-7336
          </strong>
        </div>
      </a>
    </section>
    <section class="faq-body" aria-label="Xp문서함 컨텐츠 영역">
      <nav aria-label="FAQ 분류 정렬" class="faq-tab-list">
        <ul>
          <li>
            <button
              type="button" :aria-pressed="currentCategory === 'ALL'" class="tab-button"
              :class="{ 'status-active': currentCategory === 'ALL' }" @click="onClickCategory('ALL')">전체</button>
          </li>
          <li>
            <button
              type="button" :aria-pressed="currentCategory === 'S'" class="tab-button"
              :class="{ 'status-active': currentCategory === 'S' }" @click="onClickCategory('S')">저장</button>
          </li>
          <li>
            <button
              type="button" :aria-pressed="currentCategory === 'ED'" class="tab-button"
              :class="{ 'status-active': currentCategory === 'ED' }" @click="onClickCategory('ED')">수정/삭제</button>
          </li>
          <li>
            <button
              type="button" :aria-pressed="currentCategory === 'O'" class="tab-button"
              :class="{ 'status-active': currentCategory === 'O' }" @click="onClickCategory('O')">기타</button>
          </li>
        </ul>
      </nav>
      <ul class="faq-list">
        <li v-for="(faq, index) in faqList" :key="index">
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span :id="`faq-q${index + 1}`" class="faq-question">{{ faq.title }}</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" :aria-labelledby="`faq-q${index + 1}`">
              {{ faq.content }}
            </div>
          </details>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/pages/_faq.scss' as *;

.faq-answer {
  white-space: pre-line;
}
</style>

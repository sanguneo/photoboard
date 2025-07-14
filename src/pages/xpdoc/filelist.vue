<script setup lang="ts">
definePageMeta({
  header: {
    type: 'common',
    title: '2025.07',
    back: true,
  },
});

const isFileType = ref(true);
</script>

<template>
  <main aria-label="메인 콘텐츠">
    <section class="xpdoc-header" aria-label="문서함 검색">
      <div class="xpdoc-search">
        <input type="search" placeholder="파일 이름으로 검색" aria-label="문서 검색 입력창" >
        <NuxtLink to="/xpdoc/search">
          <button type="submit" class="button search-btn" aria-label="검색">
            <img src="@/assets/images/search.svg" alt="검색아이콘" >
          </button>
        </NuxtLink>
      </div>
    </section>
    <section class="xpdoc-body">
      <section class="xpdoc-tab" aria-label="문서함 검색">
        <ul class="tab-btn-box" role="tablist">
          <li>
            <button type="button" role="tab" aria-selected="true" class="tab-btn active">내 파일</button>
          </li>
          <li>
            <button type="button" role="tab" aria-selected="false" class="tab-btn">단지 문서함</button>
          </li>
        </ul>
        <div class="xpdoc-header-option">
          <button type="button" class="option-align-btn">
            <span class="align-name">날짜 최신순</span>
            <span>
              <img src="@/assets/images/align.svg" alt="정렬 아이콘" >
            </span>
          </button>
          <div class="option-edit-box">
            <button v-if="isFileType" type="button" class="gallery-btn icon-btn" aria-label="갤러리 타입 변경 버튼" @click="isFileType = !isFileType">
              <img src="@/assets/images/gallery.svg" alt="갤러리형태" >
            </button>
            <button v-else type="button" class="gallery-btn icon-btn" aira-label="리스트 타입 변경 버튼" @click="isFileType = !isFileType">
              <img src="@/assets/images/list.svg" alt="리스트형태" >
            </button>
            <span class="line" />
            <NuxtLink to="/xpdoc/layer/edit" type="button" class="gallery-btn text-btn" aria-label="편집 모드 전환">편집</NuxtLink>
          </div>
        </div>
        <div class="xpdoc-tab-panels">
          <div v-show="isFileType" class="tab-panel" :class="{ active: isFileType }" role="tabpanel">
            <div class="xpdoc-list">
              <ul class="xpdoc-list-menu">
                <li class="xpdoc-list-item">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test01.png" alt="폴더 아이콘" >
                  </span>
                  <NuxtLink to="/xpdoc/layer/view" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name"> 20250908 주차장 전기자동차 충전기 민원 관리 </span>
                      <span class="xpdoc-date"> 2025.09.28 </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기" >
                    </button>
                  </NuxtLink>
                </li>
                <li class="xpdoc-list-item">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test02.png" alt="폴더 아이콘" >
                  </span>
                  <NuxtLink to="/xpdoc/layer/view" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name"> 주차장 입구 민원 </span>
                      <span class="xpdoc-date"> 2025.09.28 </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기" >
                    </button>
                  </NuxtLink>
                </li>
                <li class="xpdoc-list-item">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test03.png" alt="폴더 아이콘" >
                  </span>
                  <NuxtLink to="/xpdoc/layer/view" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name"> 20250915 101동 정문 앞 </span>
                      <span class="xpdoc-date"> 2025.09.28 </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기" >
                    </button>
                  </NuxtLink>
                </li>
                <li class="xpdoc-list-item">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test04.png" alt="폴더 아이콘" >
                  </span>
                  <NuxtLink to="/xpdoc/layer/view" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name"> 안전 점검 </span>
                      <span class="xpdoc-date"> 2025.09.28 </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기" >
                    </button>
                  </NuxtLink>
                </li>
                <li class="xpdoc-list-item">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test05.png" alt="폴더 아이콘" >
                  </span>
                  <NuxtLink to="/xpdoc/layer/view" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name"> 소방 정기 점검 </span>
                      <span class="xpdoc-date"> 2025.09.28 </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기" >
                    </button>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div v-show="!isFileType" class="tab-panel" :class="{ active: !isFileType }" role="tabpanel">
            <div class="xpdoc-list">
              <ul class="xpdoc-list-menu gallery">
                <li class="xpdoc-list-item gallery">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test01.png" alt="폴더 아이콘" >
                  </span>
                  <NuxtLink to="/xpdoc/layer/view" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name"> 20250908 주차장 전기자동차 충전기 민원 관리 </span>
                      <span class="xpdoc-date"> 2025.09.28 </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기" >
                    </button>
                  </NuxtLink>
                </li>
                <li class="xpdoc-list-item gallery">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test02.png" alt="폴더 아이콘" >
                  </span>
                  <NuxtLink to="/xpdoc/layer/view" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name"> 주차장 입구 민원 </span>
                      <span class="xpdoc-date"> 2025.09.28 </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기" >
                    </button>
                  </NuxtLink>
                </li>
                <li class="xpdoc-list-item gallery">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test03.png" alt="폴더 아이콘" >
                  </span>
                  <NuxtLink to="/xpdoc/layer/view" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name"> 20250915 101동 정문 앞 </span>
                      <span class="xpdoc-date"> 2025.09.28 </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기" >
                    </button>
                  </NuxtLink>
                </li>
                <li class="xpdoc-list-item gallery">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test04.png" alt="폴더 아이콘" >
                  </span>
                  <NuxtLink to="/xpdoc/layer/view" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name"> 안전 점검 </span>
                      <span class="xpdoc-date"> 2025.09.28 </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기" >
                    </button>
                  </NuxtLink>
                </li>
                <li class="xpdoc-list-item gallery">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test05.png" alt="폴더 아이콘" >
                  </span>
                  <NuxtLink to="/xpdoc/layer/view" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name"> 소방 정기 점검 </span>
                      <span class="xpdoc-date"> 2025.09.28 </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기" >
                    </button>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<style lang="scss">
@use '@/assets/scss/pages/_xpdoc.scss' as *;
</style>

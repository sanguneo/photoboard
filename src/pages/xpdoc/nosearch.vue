<script setup lang="ts">
definePageMeta({
  header: {
    type: 2,
    title: 'Xp문서함',
    back: true,
  },
  container: 'preview',
});
</script>

<template>
  <main aria-label="메인 콘텐츠">
    <section class="xpdoc-header" aria-label="문서함 검색">
      <div class="xpdoc-search">
        <input type="search" placeholder="파일 이름으로 검색" aria-label="문서 검색 입력창">
        <button type="submit" class="button search-btn" aria-label="검색">
          <img src="@/assets/images/search.svg" alt="검색아이콘">
        </button>
      </div>
    </section>
    <!-- 상단 큰 버튼 2개 -->
    <section class="xpdoc-body" aria-label="Xp문서함 컨텐츠 영역">
      <div class="xpdoc-header-option">
        <button type="button" class="option-align-btn">
          <span class="align-name">폴더 이름</span>
          <span>
            <img src="@/assets/images/align.svg" alt="정렬 아이콘">
          </span>
        </button>
        <div class="option-edit-box">
          <button type="button" class="gallery-btn icon-btn" aria-label="갤러리 타입 변경 버튼" aria-hidden="false">
            <img src="@/assets/images/gallery.svg" alt="갤러리형태">
          </button>
          <button type="button" class="gallery-btn icon-btn" aira-label="리스트 타입 변경 버튼" aria-hidden="true">
            <img src="@/assets/images/list.svg" alt="리스트형태">
          </button>
          <span class="line"/>
          <button type="button" class="gallery-btn text-btn">
            편집
          </button>
        </div>
      </div>
      <div class="xpdoc-contents" aria-label="Xp문서함 리스트 영역">
        <div class="xpdoc-none" aria-hidden="false">
          <div class="xpdoc-none-cont">
            <span class="none-img-box">
              <img src="@/assets/images/none-search.svg" alt="검색결과 없음">
            </span>
            <p>
              검색 결과가 없습니다.
            </p>
          </div>
        </div>
        <div class="xpdoc-list" aria-hidden="true">
          <ul class="xpdoc-list-menu">
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link">
                <span class="xpdoc-name">
                  2025.07
                </span>
              </NuxtLink>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link">
                <span class="xpdoc-name">
                  2025.07
                </span>
              </NuxtLink>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link">
                <span class="xpdoc-name">
                  2025.06
                </span>
              </NuxtLink>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link">
                <span class="xpdoc-name">
                  2025.05
                </span>
              </NuxtLink>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link">
                <span class="xpdoc-name">
                  2025.04
                </span>
              </NuxtLink>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link">

                <span class="xpdoc-name">
                  2025.03
                </span>
              </NuxtLink>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link">
                <span class="xpdoc-name">
                  2025.02
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@use '@/assets/scss/pages/_xpdoc.scss' as *;
</style>

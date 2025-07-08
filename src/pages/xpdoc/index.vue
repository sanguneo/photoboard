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
        <input type="search" placeholder="파일 이름으로 검색"  aria-label="문서 검색 입력창" >
        <button type="submit" class="button search-btn" aria-label="검색">
          <img src="@/assets/images/search.svg" alt="검색 아이콘">
        </button>
      </div>
    </section>

    <section class="xpdoc-body" aria-label="Xp문서함 컨텐츠 영역">
      <NuxtLink to="/board" class="board-add-btn" aria-label="사진 등록">
        <img src="@/assets/images/plus-white.svg" alt="" class="icon">
        <span>사진등록</span>
      </NuxtLink>

      <div class="xpdoc-header-option">
        <button type="button" class="option-align-btn" aria-label="정렬 기준: 폴더 이름">
          <span class="align-name">폴더 이름</span>
          <img src="@/assets/images/align.svg" alt="정렬 아이콘" class="icon">
        </button>

        <div class="option-edit-box">
          <button type="button" class="gallery-btn icon-btn" aria-label="갤러리 보기 전환" aria-hidden="false">
            <img src="@/assets/images/gallery.svg" alt="갤러리형태 아이콘">
          </button>
          <button
            type="button" class="gallery-btn icon-btn" aria-label="리스트 보기 전환" aria-hidden="true"
            tabindex="-1">
            <img src="@/assets/images/list.svg" alt="리스트형태 아이콘">
          </button>

          <span class="line"/>

          <NuxtLink to="/xpdoc/layer/edit" type="button" class="gallery-btn text-btn" aria-label="편집 모드 전환">편집</NuxtLink>
        </div>
      </div>
      <NuxtLink to="/xpdoc/layer/uploadPage">
        <div class="xpdoc-upload-waiting">
          <img src="@/assets/images/upload-loading.svg" alt="업로드로딩">
          <span>1,823개 업로드 대기중</span>
          <span class="icon">
            <img src="@/assets/images/text-arrow.svg">
          </span>
        </div>
      </NuxtLink>
      <div class="xpdoc-contents" aria-label="Xp문서 리스트">
        <!-- 🔕 문서 없음 안내 (비노출 시 aria-hidden 처리) -->
        <div class="xpdoc-none" aria-hidden="true">
          <div class="xpdoc-none-cont" aria-live="polite">
            <span class="none-img-box">
              <img src="@/assets/images/none-img.svg" alt="등록된 사진 없음">
            </span>
            <p>등록한 사진이 없습니다.</p>
          </div>
        </div>

        <div class="xpdoc-list" aria-hidden="false">
          <ul class="xpdoc-list-menu" role="list">
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link folder" aria-label="2025년 07월 폴더 열기">
                <span class="xpdoc-name">2025.07</span>
              </NuxtLink>
            </li>

            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link folder" aria-label="2025년 06월 폴더 열기">
                <span class="xpdoc-name">2025.06</span>
              </NuxtLink>
            </li>

            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link folder" aria-label="2025년 05월 폴더 열기">
                <span class="xpdoc-name">2025.05</span>
              </NuxtLink>
            </li>

            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link folder" aria-label="2025년 04월 폴더 열기">
                <span class="xpdoc-name">2025.04</span>
              </NuxtLink>
            </li>

            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link folder" aria-label="2025년 03월 폴더 열기">
                <span class="xpdoc-name">2025.03</span>
              </NuxtLink>
            </li>

            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/fileList" class="xpdoc-link folder" aria-label="2025년 02월 폴더 열기">
                <span class="xpdoc-name">2025.02</span>
              </NuxtLink>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/noFile" class="xpdoc-link folder" aria-label="검색결과 없음">
                <span class="xpdoc-name">파일없음</span>
              </NuxtLink>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/search" class="xpdoc-link folder" aria-label="검색결과 없음">
                <span class="xpdoc-name">검색결과</span>
              </NuxtLink>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <NuxtLink to="/xpdoc/noSearch" class="xpdoc-link folder" aria-label="검색결과 없음">
                <span class="xpdoc-name">검색결과 없음 링크</span>
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

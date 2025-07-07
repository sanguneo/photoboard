<script setup lang="ts">
</script>

<template>
  <main class="main-content" aria-label="메인 콘텐츠">
    <!-- 상단 큰 버튼 2개 -->
    <section class="main-menu-box" aria-label="주요 기능 버튼 영역">
      <a href="./pages/board/index.html" class="main-menu-button regist" aria-label="보드판과 함께 사진 등록">
        <strong>
          보드판과 함께<br>사진 등록
        </strong>
        <img src="@/assets/images/picture.svg" alt="사진등록" class="icon icon-40">
      </a>
      <a href="./pages/xpdoc/index.html" class="main-menu-button xpdoc" aria-label="Xp문서함에서 사진 보기">
        <strong>
          Xp문서함에서<br>사진 보기
        </strong>
        <img src="@/assets/images/main-folder.svg" alt="사진등록" class="icon icon-40">
      </a>
    </section>

    <!-- 서비스 목록 링크들 -->
    <section class="service-section" aria-label="서비스 도움말">
      <h2>서비스 도움말</h2>
      <ul class="service-list" role="list">
        <li class="service-item">
          <a href="./pages/preview/index.html" aria-label="서비스 미리보기 항목으로 이동">
            <img src="@/assets/images/preview.svg" alt="서비스 미리보기">
            <span class="service-name">서비스 미리보기</span>
          </a>
        </li>
        <li class="service-item">
          <a href="./pages/faq/index.html" aria-label="자주 묻는 질문 항목으로 이동">
            <img src="@/assets/images/faq.svg" alt="자주 묻는 질문">
            <span class="service-name">자주 묻는 질문</span>
          </a>
        </li>
        <li class="service-item">
          <a href="tel:0262817336">
            <img src="@/assets/images/cs.svg" alt="고객센터">
            <div class="service-wrap">
              <span class="service-name">고객센터</span>
              <span class="service-hours">09:00 - 17:00 주말 및 공휴일 제외</span>
            </div>
          </a>
        </li>
        <li class="service-item">
          <a href="./components/modal/alert.html" aria-label="알럿 항목으로 이동">
            <span class="service-name">알럿 페이지</span>
          </a>
        </li>
        <li class="service-item">
          <a href="./components/modal/confirm.html" aria-label="컨펌 항목으로 이동">
            <span class="service-name">컨펌 페이지</span>
          </a>
        </li>
        <li class="service-item">
          <a href="./components/modal/toast.html" aria-label="토스트 항목으로 이동">
            <span class="service-name">토스트 페이지</span>
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" src="@/assets/scss/pages/_main.scss"></style>

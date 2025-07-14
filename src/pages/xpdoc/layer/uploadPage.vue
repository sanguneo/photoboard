<script setup lang="ts">
</script>

<template>
  <main aria-label="메인 콘텐츠">
    <section class="xpdoc-upload-infobox">
      <div class="upload-info">
        <p>Wi-Fi 환경에서만 Xp문서함으로 파일이 전송됩니다.</p>
        <button id="btnOff" type="button" class="text-btn underline" aria-hidden="false">Wi-Fi 전송 모드 끄기</button>
        <button id="btnOn" type="button" class="text-btn underline" style="display: none" aria-hidden="true">항상 문서함에 전송</button>
      </div>
      <div class="xpdoc-upload-waiting">
        <img src="@/assets/images/upload-loading.svg" alt="업로드로딩" >
        <div class="list-item-wrap">
          <span>1,823개 업로드 대기중</span><br >
          <span class="sub-text">전송하지 않은 파일은 최대 n일간 보관됩니다.</span>
        </div>
      </div>
    </section>
    <span class="line-cont" />
    <section class="xpdoc-body pt18" aria-label="문서 리스트 선택 영역">
      <div class="xpdoc-header-option mb4">
        <button type="button" class="option-align-btn" aria-label="정렬 기준 선택" style="pointer-events: none">
          <span class="align-name">날짜 최신순</span>
          <span>
            <img src="@/assets/images/align.svg" alt="정렬 아이콘" >
          </span>
        </button>
        <div class="option-edit-box">
          <button type="button" class="button button-small" aria-label="전체 취소">전체 취소</button>
          <button id="btnSendAll" type="button" class="button button-small primary-fill" aria-label="전체 전송">전체 전송</button>
        </div>
      </div>
      <div class="xpdoc-contents" aria-label="Xp문서 리스트">
        <div class="xpdoc-list">
          <ul class="xpdoc-list-menu upload">
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> 소방 정기 점검소방 정기 점검소방 정기 점검소방 정기 점검 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="재전송">재전송</button>
              </div>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> 소방 정기 점검 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="재전송">재전송</button>
              </div>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> 20250915 101동 정문 앞 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="재전송">재전송</button>
              </div>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> 20250908 주차장 전기자동차 충전기 민원 관리 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="전송">전송</button>
              </div>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> B4 지하주차장 누수 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="전송">전송</button>
              </div>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> 안전 점검 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="전송">전송</button>
              </div>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> 20250915 101동 정문 앞 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="전송">전송</button>
              </div>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> B3 지하주차장 누수 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="전송">전송</button>
              </div>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> B1 전기자동차 충전 구역 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="전송">전송</button>
              </div>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> 소방 정기 점검 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="전송">전송</button>
              </div>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> 20250915 101동 정문 앞 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="전송">전송</button>
              </div>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/upload-waiting.svg" class="icon" alt="전송대기" >
              </span>
              <span class="xpdoc-name"> 20250908 주차장 전기자동차 충전기 민원 관리 </span>
              <div class="upload-btn-box">
                <button type="button" class="text-btn" aria-label="취소">취소</button>
                <button type="button" class="button button-small upload-btn" aria-label="전송">전송</button>
              </div>
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

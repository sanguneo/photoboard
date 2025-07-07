<template>
  <!-- ✅ 사진 선택 모달 -->
  <!--    <div class="modal-dim" style="display: none" aria-hidden="true">-->
  <!--        <div class="modal modal-pop" role="dialog" aria-modal="true" aria-labelledby="modal-title">-->
  <!--            <h2 id="modal-title" class="modal-title">정렬 기준</h2>-->
  <!--            <div class="modal-list">-->
  <!--                <ul class="modal-list-menu">-->
  <!--                    <li class="modal-list-item">-->
  <!--                        <div class="radio-box">-->
  <!--                            <input id="radio1" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label1" checked>-->
  <!--                            <label id="label1" class="radio-box_name" for="radio1">-->
  <!--                                <span class="r_circle"></span>-->
  <!--                                폴더 이름 (내림차순)-->
  <!--                            </label>-->
  <!--                        </div>-->
  <!--                    </li>-->
  <!--                    <li class="modal-list-item">-->
  <!--                        <div class="radio-box">-->
  <!--                            <input id="radio2" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label2">-->
  <!--                            <label id="label2" class="radio-box_name" for="radio2">-->
  <!--                                <span class="r_circle"></span>-->
  <!--                                폴더 이름 (오름차순)-->
  <!--                            </label>-->
  <!--                        </div>-->
  <!--                    </li>-->
  <!--                </ul>-->
  <!--            </div>-->
  <!--        </div>-->
  <!--    </div>-->

  <main aria-label="메인 콘텐츠">

    <!-- ================================
             🔍 검색 영역
             ================================ -->
    <section class="xpdoc-header" aria-label="문서함 검색">
      <div class="xpdoc-search">
        <input type="search" placeholder="파일 이름으로 검색"  aria-label="문서 검색 입력창" >
        <button type="submit" class="button search-btn" aria-label="검색">
          <img src="@/assets/images/search.svg" alt="검색 아이콘">
        </button>
      </div>
    </section>

    <!-- ================================
             📂 문서함 컨텐츠 영역
             ================================ -->
    <section class="xpdoc-body" aria-label="Xp문서함 컨텐츠 영역">

      <a href="/사진등록페이지" class="board-add-btn" aria-label="사진 등록">
        <img src="@/assets/images/plus-white.svg" alt="" class="icon">
        <span>사진등록</span>
      </a>

      <!-- ▶️ 상단 정렬 및 보기 설정 -->
      <div class="xpdoc-header-option">
        <button type="button" class="option-align-btn" aria-label="정렬 기준: 폴더 이름">
          <span class="align-name">폴더 이름</span>
          <img src="@/assets/images/align.svg" alt="정렬 아이콘" class="icon">
        </button>

        <!-- 🖼️ 보기 타입 변경 버튼 (aria-hidden 사용) -->
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

          <a href="./layer/edit.html" type="button" class="gallery-btn text-btn" aria-label="편집 모드 전환">편집</a>
        </div>
      </div>

      <!-- ================================
               📄 리스트 or 비어있는 경우
               ================================ -->
      <div class="xpdoc-contents" aria-label="Xp문서 리스트">
        <!-- 🔕 문서 없음 안내 (비노출 시 aria-hidden 처리) -->
        <div class="xpdoc-none" aria-hidden="false">
          <div class="xpdoc-none-cont" aria-live="polite">
            <span class="none-img-box">
              <img src="@/assets/images/none-img.svg" alt="등록된 사진 없음">
            </span>
            <p>등록한 사진이 없습니다.</p>
          </div>
        </div>

        <!-- ✅ 문서 리스트 노출 영역 -->
        <div class="xpdoc-list" aria-hidden="true">
          <ul class="xpdoc-list-menu" role="list">
            <!-- 📁 개별 폴더 항목 -->
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <a href="fileList.html" class="xpdoc-link folder" aria-label="2025년 07월 폴더 열기">
                <span class="xpdoc-name">2025.07</span>
              </a>
            </li>

            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <a href="fileList.html" class="xpdoc-link folder" aria-label="2025년 06월 폴더 열기">
                <span class="xpdoc-name">2025.06</span>
              </a>
            </li>

            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <a href="fileList.html" class="xpdoc-link folder" aria-label="2025년 05월 폴더 열기">
                <span class="xpdoc-name">2025.05</span>
              </a>
            </li>

            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <a href="fileList.html" class="xpdoc-link folder" aria-label="2025년 04월 폴더 열기">
                <span class="xpdoc-name">2025.04</span>
              </a>
            </li>

            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <a href="fileList.html" class="xpdoc-link folder" aria-label="2025년 03월 폴더 열기">
                <span class="xpdoc-name">2025.03</span>
              </a>
            </li>

            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <a href="fileList.html" class="xpdoc-link folder" aria-label="2025년 02월 폴더 열기">
                <span class="xpdoc-name">2025.02</span>
              </a>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <a href="Search.html" class="xpdoc-link folder" aria-label="검색결과 없음">
                <span class="xpdoc-name">파일없음</span>
              </a>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <a href="Search.html" class="xpdoc-link folder" aria-label="검색결과 없음">
                <span class="xpdoc-name">검색결과</span>
              </a>
            </li>
            <li class="xpdoc-list-item">
              <span class="xpdoc-icon">
                <img src="@/assets/images/folder.svg" alt="폴더 아이콘">
              </span>
              <a href="noSearch.html" class="xpdoc-link folder" aria-label="검색결과 없음">
                <span class="xpdoc-name">검색결과 없음 링크</span>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="scss" src="@/assets/scss/pages/_xpdoc.scss"></style>

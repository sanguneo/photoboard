<template>
  <!--    <div class="modal-dim" style="display: none" aria-hidden="true">-->
  <!--        <div class="modal modal-pop" role="dialog" aria-modal="true" aria-labelledby="modal-title">-->
  <!--            <h2 id="modal-title" class="modal-title">정렬 기준</h2>-->
  <!--            <div class="modal-list">-->
  <!--                <ul class="modal-list-menu">-->
  <!--                    <li class="modal-list-item">-->
  <!--                        <div class="radio-box">-->
  <!--                            <input id="radio1" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label1"-->
  <!--                                checked>-->
  <!--                            <label id="label1" class="radio-box_name" for="radio1">-->
  <!--                                <span class="r_circle"></span>-->
  <!--                                날짜 최신순-->
  <!--                            </label>-->
  <!--                        </div>-->
  <!--                    </li>-->
  <!--                    <li class="modal-list-item">-->
  <!--                        <div class="radio-box">-->
  <!--                            <input id="radio2" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label2">-->
  <!--                            <label id="label2" class="radio-box_name" for="radio2">-->
  <!--                                <span class="r_circle"></span>-->
  <!--                                날짜 오래된순-->
  <!--                            </label>-->
  <!--                        </div>-->
  <!--                    </li>-->
  <!--                    <li class="modal-list-item">-->
  <!--                        <div class="radio-box">-->
  <!--                            <input id="radio3" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label3"-->
  <!--                                checked>-->
  <!--                            <label id="label3" class="radio-box_name" for="radio3">-->
  <!--                                <span class="r_circle"></span>-->
  <!--                                파일 이름 (내림차순)-->
  <!--                            </label>-->
  <!--                        </div>-->
  <!--                    </li>-->
  <!--                    <li class="modal-list-item">-->
  <!--                        <div class="radio-box">-->
  <!--                            <input id="radio4" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label4">-->
  <!--                            <label id="label4" class="radio-box_name" for="radio4">-->
  <!--                                <span class="r_circle"></span>-->
  <!--                                파일 이름 (오름차순)-->
  <!--                            </label>-->
  <!--                        </div>-->
  <!--                    </li>-->
  <!--                </ul>-->
  <!--            </div>-->
  <!--        </div>-->
  <!--    </div>-->

  <!--    <div class="modal-dim" aria-label="컨펌창 영역" aria-hidden="true">-->
  <!--        &lt;!&ndash; ▷ [1] 항목 삭제 컨펌 &ndash;&gt;-->
  <!--        <div class="modal modal-bottom" role="dialog" aria-modal="true" aria-labelledby="modal-title">-->
  <!--            <h2 id="modal-title" class="modal-title">-->
  <!--                20250908 주차장 전기자동차 충전기 민원 내용 30자 입력 가능-->
  <!--            </h2>-->
  <!--            <ul class="file-options-list">-->
  <!--                <li class="file-options-item">-->
  <!--                    <button type="button" class="file-options-button">-->
  <!--                        <img src="@/assets/images/name-edit.svg" alt="이름 변경">-->
  <!--                        <span>이름 변경</span>-->
  <!--                    </button>-->
  <!--                </li>-->
  <!--                <li class="file-options-item">-->
  <!--                    <button type="button" class="file-options-button">-->
  <!--                        <img src="@/assets/images/board-edit.svg" alt="보드판 수정">-->
  <!--                        <span>보드판 수정</span>-->
  <!--                    </button>-->
  <!--                </li>-->
  <!--                <li class="file-options-item">-->
  <!--                    <button type="button" class="file-options-button">-->
  <!--                        <img src="@/assets/images/download.svg" alt="다운로드">-->
  <!--                        <span>다운로드</span>-->
  <!--                    </button>-->
  <!--                </li>-->
  <!--            </ul>-->
  <!--            <button type="button" class="file-options-button file-delete">-->
  <!--                <img src="@/assets/images/delete.svg" alt="파일 삭제">-->
  <!--                <span>파일 삭제</span>-->
  <!--            </button>-->
  <!--        </div>-->

  <!--    </div>-->


  <!--    &lt;!&ndash; ================================-->
  <!--         📌 [컨펌(confirm) 모달 팝업]-->
  <!--         ================================ &ndash;&gt;-->
  <!--    <div class="modal-dim" aria-label="컨펌창 영역" aria-hidden="true">-->
  <!--        &lt;!&ndash; ▷ [1] 항목 삭제 컨펌 &ndash;&gt;-->
  <!--        <div class="modal modal-pop" role="dialog" aria-modal="true" aria-labelledby="modal-title">-->
  <!--            <h2 id="modal-title" class="modal-title">이름 변경</h2>-->
  <!--            <div class="modal-form">-->
  <!--                <div class="form-wrap">-->
  <!--                    <input class="modal-input" type="text" value="20250915 101동 정문 앞"/>-->
  <!--                    <button type="button" class="icon-btn clear-btn" aria-label="초기화">-->
  <!--                        <img src="@/assets/images/clear.svg" alt="초기화">-->
  <!--                    </button>-->
  <!--                </div>-->
  <!--            </div>-->
  <!--            <div class="modal-foot">-->
  <!--                <button type="button" class="button primary-line" aria-label="취소">취소</button>-->
  <!--                <button type="button" class="button primary-fill" aria-label="확인">확인</button>-->
  <!--            </div>-->
  <!--        </div>-->
  <!--        &lt;!&ndash; ▷ [2] 특정 항목 삭제 컨펌 &ndash;&gt;-->
  <!--        <div class="modal modal-pop" role="dialog" aria-modal="true" aria-labelledby="modal-title">-->
  <!--            <h2 id="modal-title" class="modal-title">이름 변경</h2>-->
  <!--            <div class="modal-form">-->
  <!--                <div class="form-wrap">-->
  <!--                    <input class="modal-input error" type="text" value="103동:"/>-->
  <!--                    <button type="button" class="icon-btn clear-btn" aria-label="초기화">-->
  <!--                        <img src="@/assets/images/clear.svg" alt="초기화">-->
  <!--                    </button>-->
  <!--                </div>-->
  <!--                <span class="form-vail">-->
  <!--                    :/*?<>|는 입력할 수 없습니다.-->
  <!--                </span>-->
  <!--            </div>-->
  <!--            <div class="modal-foot">-->
  <!--                <button type="button" class="button primary-line" aria-label="취소">취소</button>-->
  <!--                <button type="button" class="button primary-fill" aria-label="확인">확인</button>-->
  <!--            </div>-->
  <!--        </div>-->
  <!--    </div>-->
  <main aria-label="메인 콘텐츠">
    <section class="xpdoc-header" aria-label="문서함 검색">
      <div class="xpdoc-search">
        <input type="search" placeholder="파일 이름으로 검색" aria-label="문서 검색 입력창">
        <button type="submit" class="button search-btn" aria-label="검색">
          <img src="@/assets/images/search.svg" alt="검색아이콘">
        </button>
      </div>
    </section>
    <section class="xpdoc-body">
      <section class="xpdoc-tab" aria-label="문서함 검색">
        <ul class="tab-btn-box" role="tablist">
          <li>
            <button type="button" role="tab" aria-selected="true" class="tab-btn active">
              내 파일
            </button>
          </li>
          <li>
            <button type="button" role="tab" aria-selected="false" class="tab-btn">
              단지 문서함
            </button>
          </li>
        </ul>
        <div class="xpdoc-header-option">
          <button type="button" class="option-align-btn">
            <span class="align-name">날짜 최신순</span>
            <span>
              <img src="@/assets/images/align.svg" alt="정렬 아이콘">
            </span>
          </button>
          <div class="option-edit-box">
            <button type="button" class="gallery-btn icon-btn" aria-label="갤러리 타입 변경 버튼" aria-hidden="false">
              <img src="@/assets/images/gallery.svg" alt="갤러리형태">
            </button>
            <button type="button" class="gallery-btn icon-btn " aira-label="리스트 타입 변경 버튼" aria-hidden="true">
              <img src="@/assets/images/list.svg" alt="리스트형태">
            </button>
            <span class="line"/>
            <a href="./layer/edit.html" type="button" class="gallery-btn text-btn" aria-label="편집 모드 전환">편집</a>
          </div>
        </div>
        <div class="xpdoc-tab-panels">
          <div class="tab-panel active" role="tabpanel">
            <div class="xpdoc-list">
              <ul class="xpdoc-list-menu">
                <li class="xpdoc-list-item">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test01.png" alt="폴더 아이콘">
                  </span>
                  <a href="./layer/view.html" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">
                        20250908 주차장 전기자동차 충전기 민원 관리
                      </span>
                      <span class="xpdoc-date">
                        2025.09.28
                      </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기">
                    </button>
                  </a>
                </li>
                <li class="xpdoc-list-item">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test02.png" alt="폴더 아이콘">
                  </span>
                  <a href="./layer/view.html" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">
                        주차장 입구 민원
                      </span>
                      <span class="xpdoc-date">
                        2025.09.28
                      </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기">
                    </button>
                  </a>
                </li>
                <li class="xpdoc-list-item">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test03.png" alt="폴더 아이콘">
                  </span>
                  <a href="./layer/view.html" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">
                        20250915 101동 정문 앞
                      </span>
                      <span class="xpdoc-date">
                        2025.09.28
                      </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기">
                    </button>
                  </a>
                </li>
                <li class="xpdoc-list-item">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test04.png" alt="폴더 아이콘">
                  </span>
                  <a href="./layer/view.html" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">
                        안전 점검
                      </span>
                      <span class="xpdoc-date">
                        2025.09.28
                      </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기">
                    </button>
                  </a>

                </li>
                <li class="xpdoc-list-item">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test05.png" alt="폴더 아이콘">
                  </span>
                  <a href="./layer/view.html" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">
                        소방 정기 점검
                      </span>
                      <span class="xpdoc-date">
                        2025.09.28
                      </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기">
                    </button>
                  </a>

                </li>
              </ul>
            </div>
          </div>
          <div class="tab-panel" role="tabpanel" hidden>
            <div class="xpdoc-list">
              <ul class="xpdoc-list-menu gallery">
                <li class="xpdoc-list-item gallery">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test01.png" alt="폴더 아이콘">
                  </span>
                  <a href="./layer/view.html" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">
                        20250908 주차장 전기자동차 충전기 민원 관리
                      </span>
                      <span class="xpdoc-date">
                        2025.09.28
                      </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기">
                    </button>
                  </a>
                </li>
                <li class="xpdoc-list-item gallery">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test02.png" alt="폴더 아이콘">
                  </span>
                  <a href="./layer/view.html" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">
                        주차장 입구 민원
                      </span>
                      <span class="xpdoc-date">
                        2025.09.28
                      </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기">
                    </button>
                  </a>
                </li>
                <li class="xpdoc-list-item gallery">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test03.png" alt="폴더 아이콘">
                  </span>
                  <a href="./layer/view.html" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">
                        20250915 101동 정문 앞
                      </span>
                      <span class="xpdoc-date">
                        2025.09.28
                      </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기">
                    </button>
                  </a>
                </li>
                <li class="xpdoc-list-item gallery">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test04.png" alt="폴더 아이콘">
                  </span>
                  <a href="./layer/view.html" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">
                        안전 점검
                      </span>
                      <span class="xpdoc-date">
                        2025.09.28
                      </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기">
                    </button>
                  </a>

                </li>
                <li class="xpdoc-list-item gallery">
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test05.png" alt="폴더 아이콘">
                  </span>
                  <a href="./layer/view.html" class="xpdoc-link">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">
                        소방 정기 점검
                      </span>
                      <span class="xpdoc-date">
                        2025.09.28
                      </span>
                    </div>
                    <button type="button" class="icon-btn doc-more" aria-label="더보기">
                      <img src="@/assets/images/more.svg" alt="더보기">
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>
<style lang="scss" src="@/assets/scss/pages/_xpdoc.scss"></style>
<!--<script>-->
<!--    // ==========================================-->
<!--// 📌 [정렬/더보기/이름변경] 모달/바텀시트 오픈/닫기-->
<!--// ==========================================-->

<!--document.addEventListener("DOMContentLoaded", function () {-->

<!--    // 정렬 모달-->
<!--    const sortModalDim = document.querySelectorAll('.modal-dim')[0]; // 첫 번째(정렬)-->
<!--    // 바텀시트(더보기)-->
<!--    const bottomModalDim = document.querySelectorAll('.modal-dim')[1]; // 두 번째(파일 더보기)-->
<!--    // 이름변경 모달-->
<!--    const renameModalDim = document.querySelectorAll('.modal-dim')[2]; // 세 번째(이름변경)-->

<!--    // [1] 정렬 버튼 클릭 → 정렬 모달 열기-->
<!--    const alignBtn = document.querySelector('.option-align-btn');-->
<!--    if (alignBtn && sortModalDim) {-->
<!--        alignBtn.addEventListener('click', function () {-->
<!--            sortModalDim.style.display = 'flex';-->
<!--            sortModalDim.setAttribute('aria-hidden', 'false');-->
<!--        });-->
<!--    }-->

<!--    // [2] 더보기 버튼(리스트 내) 클릭 → 바텀시트(더보기) 열기-->
<!--    const moreBtns = document.querySelectorAll('.icon-btn.doc-more');-->
<!--    if (moreBtns && bottomModalDim) {-->
<!--        moreBtns.forEach(function (btn) {-->
<!--            btn.addEventListener('click', function (e) {-->
<!--                e.preventDefault();-->
<!--                bottomModalDim.style.display = 'flex';-->
<!--                bottomModalDim.setAttribute('aria-hidden', 'false');-->
<!--            });-->
<!--        });-->
<!--    }-->

<!--    // [3] 바텀시트 - 이름변경 버튼 클릭 → 이름변경 모달 열기, 바텀시트 닫기-->
<!--    const renameBtn = bottomModalDim.querySelector('.file-options-button img[alt="이름 변경"]')?.closest('.file-options-button');-->
<!--    if (renameBtn && renameModalDim && bottomModalDim) {-->
<!--        renameBtn.addEventListener('click', function () {-->
<!--            // 바텀시트 닫기-->
<!--            bottomModalDim.style.display = 'none';-->
<!--            bottomModalDim.setAttribute('aria-hidden', 'true');-->
<!--            // 이름변경 모달 열기-->
<!--            renameModalDim.style.display = 'flex';-->
<!--            renameModalDim.setAttribute('aria-hidden', 'false');-->
<!--        });-->
<!--    }-->

<!--    // =============================-->
<!--    // 📌 [모달 닫기] 공통 처리-->
<!--    // =============================-->
<!--    // ESC로 닫기-->
<!--    document.addEventListener('keydown', function (e) {-->
<!--        if (e.key === 'Escape') {-->
<!--            [sortModalDim, bottomModalDim, renameModalDim].forEach(function (modal) {-->
<!--                if (modal && modal.style.display === 'flex') {-->
<!--                    modal.style.display = 'none';-->
<!--                    modal.setAttribute('aria-hidden', 'true');-->
<!--                }-->
<!--            });-->
<!--        }-->
<!--    });-->

<!--    // 딤 배경 클릭 시 닫기 (모달 본문 클릭 시는 무시)-->
<!--    [sortModalDim, bottomModalDim, renameModalDim].forEach(function (modal) {-->
<!--        if (modal) {-->
<!--            modal.addEventListener('click', function (e) {-->
<!--                if (e.target === modal) {-->
<!--                    modal.style.display = 'none';-->
<!--                    modal.setAttribute('aria-hidden', 'true');-->
<!--                }-->
<!--            });-->
<!--        }-->
<!--    });-->

<!--    // [이름변경 모달] 취소 버튼 → 닫기-->
<!--    if (renameModalDim) {-->
<!--        const cancelBtns = renameModalDim.querySelectorAll('.button.primary-line');-->
<!--        cancelBtns.forEach(function (btn) {-->
<!--            btn.addEventListener('click', function () {-->
<!--                renameModalDim.style.display = 'none';-->
<!--                renameModalDim.setAttribute('aria-hidden', 'true');-->
<!--            });-->
<!--        });-->
<!--    }-->

<!--    // [정렬 모달] 라디오 선택 시 바로 닫기 (원하면 추가)-->
<!--    // const radioBtns = sortModalDim.querySelectorAll('input[type="radio"]');-->
<!--    // radioBtns.forEach(function(radio) {-->
<!--    //     radio.addEventListener('change', function() {-->
<!--    //         sortModalDim.style.display = 'none';-->
<!--    //         sortModalDim.setAttribute('aria-hidden', 'true');-->
<!--    //     });-->
<!--    // });-->

<!--});-->

<!--</script>-->

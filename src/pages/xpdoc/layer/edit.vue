<script setup lang="ts">
</script>

<template>
  <main aria-label="메인 콘텐츠">
    <section class="xpdoc-body pt16 edit-type" aria-label="문서 리스트 선택 영역">
      <div class="xpdoc-header-option">
        <div class="check-btn txt">
          <input id="allCheck" type="checkbox" aria-label="전체 선택" >
          <label for="allCheck">
            <span class="check-bg">
              <span class="check-icon" />
            </span>
            전체선택
          </label>
        </div>
      </div>

      <div class="xpdoc-contents-edit" aria-label="Xp문서 리스트">
        <div class="xpdoc-list">
          <ul class="xpdoc-list-menu list-type">
            <li class="xpdoc-list-item status-selected">
              <div class="check-btn">
                <input id="checkbox1" type="checkbox" aria-label="20250908 주차장 전기자동차 충전기 민원 관리" checked >
                <label for="checkbox1">
                  <span class="check-bg">
                    <span class="check-icon" />
                  </span>
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test01.png" alt="20250908 주차장 전기자동차 충전기 민원 관리 썸네일" >
                  </span>
                  <span class="xpdoc-check-warp">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">20250908 주차장 전기자동차 충전기 민원 관리</span>
                      <span class="xpdoc-date">2025.09.28</span>
                    </div>
                  </span>
                </label>
              </div>
            </li>

            <li class="xpdoc-list-item">
              <div class="check-btn">
                <input id="checkbox2" type="checkbox" aria-label="주차장 입구 민원" >
                <label for="checkbox2">
                  <span class="check-bg">
                    <span class="check-icon" />
                  </span>
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test02.png" alt="주차장 입구 민원 썸네일" >
                  </span>
                  <span class="xpdoc-check-warp">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">주차장 입구 민원</span>
                      <span class="xpdoc-date">2025.09.28</span>
                    </div>
                  </span>
                </label>
              </div>
            </li>

            <li class="xpdoc-list-item status-selected">
              <div class="check-btn">
                <input id="checkbox3" type="checkbox" aria-label="20250915 101동 정문 앞" checked >
                <label for="checkbox3">
                  <span class="check-bg">
                    <span class="check-icon" />
                  </span>
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test03.png" alt="20250915 101동 정문 앞 썸네일" >
                  </span>
                  <span class="xpdoc-check-warp">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">20250915 101동 정문 앞</span>
                      <span class="xpdoc-date">2025.09.28</span>
                    </div>
                  </span>
                </label>
              </div>
            </li>

            <li class="xpdoc-list-item">
              <div class="check-btn">
                <input id="checkbox4" type="checkbox" aria-label="안전 점검" >
                <label for="checkbox4">
                  <span class="check-bg">
                    <span class="check-icon" />
                  </span>
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test04.png" alt="안전 점검 썸네일" >
                  </span>
                  <span class="xpdoc-check-warp">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">안전 점검</span>
                      <span class="xpdoc-date">2025.09.28</span>
                    </div>
                  </span>
                </label>
              </div>
            </li>

            <li class="xpdoc-list-item">
              <div class="check-btn">
                <input id="checkbox5" type="checkbox" aria-label="소방 정기 점검" >
                <label for="checkbox5">
                  <span class="check-bg">
                    <span class="check-icon" />
                  </span>
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test05.png" alt="소방 정기 점검 썸네일" >
                  </span>
                  <span class="xpdoc-check-warp">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">소방 정기 점검</span>
                      <span class="xpdoc-date">2025.09.28</span>
                    </div>
                  </span>
                </label>
              </div>
            </li>
          </ul>

          <ul class="xpdoc-list-menu gallery">
            <li class="xpdoc-list-item status-selected">
              <div class="check-btn image">
                <input id="checkbox11" type="checkbox" aria-label="20250908 주차장 전기자동차 충전기 민원 관리" checked >
                <label for="checkbox11">
                  <span class="check-bg">
                    <span class="check-icon" />
                  </span>
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test01.png" alt="20250908 주차장 전기자동차 충전기 민원 관리 썸네일" >
                  </span>
                  <span class="xpdoc-check-warp">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">20250908 주차장 전기자동차 충전기 민원 관리</span>
                      <span class="xpdoc-date">2025.09.28</span>
                    </div>
                  </span>
                </label>
              </div>
            </li>

            <li class="xpdoc-list-item">
              <div class="check-btn image">
                <input id="checkbox12" type="checkbox" aria-label="주차장 입구 민원" >
                <label for="checkbox12">
                  <span class="check-bg">
                    <span class="check-icon" />
                  </span>
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test02.png" alt="주차장 입구 민원 썸네일" >
                  </span>
                  <span class="xpdoc-check-warp">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">주차장 입구 민원</span>
                      <span class="xpdoc-date">2025.09.28</span>
                    </div>
                  </span>
                </label>
              </div>
            </li>

            <li class="xpdoc-list-item status-selected">
              <div class="check-btn image">
                <input id="checkbox13" type="checkbox" aria-label="20250915 101동 정문 앞" checked >
                <label for="checkbox13">
                  <span class="check-bg">
                    <span class="check-icon" />
                  </span>
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test03.png" alt="20250915 101동 정문 앞 썸네일" >
                  </span>
                  <span class="xpdoc-check-warp">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">20250915 101동 정문 앞</span>
                      <span class="xpdoc-date">2025.09.28</span>
                    </div>
                  </span>
                </label>
              </div>
            </li>

            <li class="xpdoc-list-item">
              <div class="check-btn image">
                <input id="checkbox14" type="checkbox" aria-label="안전 점검" >
                <label for="checkbox14">
                  <span class="check-bg">
                    <span class="check-icon" />
                  </span>
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test04.png" alt="안전 점검 썸네일" >
                  </span>
                  <span class="xpdoc-check-warp">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">안전 점검</span>
                      <span class="xpdoc-date">2025.09.28</span>
                    </div>
                  </span>
                </label>
              </div>
            </li>

            <li class="xpdoc-list-item">
              <div class="check-btn image">
                <input id="checkbox15" type="checkbox" aria-label="소방 정기 점검" >
                <label for="checkbox15">
                  <span class="check-bg">
                    <span class="check-icon" />
                  </span>
                  <span class="xpdoc-thum">
                    <img src="@/assets/images/doc-test05.png" alt="소방 정기 점검 썸네일" >
                  </span>
                  <span class="xpdoc-check-warp">
                    <div class="list-item-wrap">
                      <span class="xpdoc-name">소방 정기 점검</span>
                      <span class="xpdoc-date">2025.09.28</span>
                    </div>
                  </span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="foot-button-box">
      <button type="button" class="button button-large primary-line">파일 삭제</button>
      <button type="button" class="button button-large primary-fill">다운로드</button>
    </div>
  </main>
</template>

<style lang="scss">
@use '@/assets/scss/pages/_xpdoc.scss' as *;
</style>

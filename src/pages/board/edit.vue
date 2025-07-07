<template>
  <!--            &lt;!&ndash; 📌 상단 헤더 영역 &ndash;&gt;-->
  <!--            <header class="header board-edit" aria-label="사진보드판 상단 헤더">-->
  <!--                &lt;!&ndash; 🔙 뒤로 가기 버튼 &ndash;&gt;-->
  <!--                <a href="./index.html" type="button" class="icon-btn" aria-label="뒤로가기">-->
  <!--                    <img src="@/assets/images/back-white.svg" alt="뒤로가기 아이콘">-->
  <!--                </a>-->
  <!--    -->
  <!--                &lt;!&ndash; 🔧 설정 및 확인 버튼 영역 &ndash;&gt;-->
  <!--                <div class="board-head-btn">-->
  <!--                    &lt;!&ndash; 사진 등록 시 노출되는 버튼들-->
  <!--                        <button type="button" class="icon-btn" aria-label="카메라 열기">-->
  <!--                        <img src="@/assets/images/camera.svg" alt="카메라 아이콘">-->
  <!--                        </button>-->
  <!--                        <a href="boardSetting.html" class="icon-btn" aria-label="설정 페이지 이동">-->
  <!--                        <img src="@/assets/images/setting.svg" alt="설정 아이콘">-->
  <!--                        </a>-->
  <!--                    &ndash;&gt;-->
  <!--                    <button type="button" class="button text-btn whiteColor" aria-label="편집 완료 확인">확인</button>-->
  <!--                </div>-->
  <!--    -->
  <!--                &lt;!&ndash; 📄 문서 모드에서 노출되는 툴팁 안내 영역 &ndash;&gt;-->
  <!--                <div class="doc-head-btn" style="display: none" aria-hidden="true">-->
  <!--                    <button type="button" class="doc-tip-btn" aria-label="문서 등록 도움말">-->
  <!--                        <img src="@/assets/images/camera.svg" alt="도움말 아이콘">-->
  <!--                    </button>-->
  <!--                    <div class="doc-tip-content">-->
  <!--                        <p>-->
  <!--                            등록한 파일은 ‘Xp문서함(PC) > 단지문서함 > <strong>사진보드판</strong>’ 폴더에 자동 저장됩니다.-->
  <!--                        </p>-->
  <!--                    </div>-->
  <!--                </div>-->
  <!--            </header>-->

  <!-- 🧱 메인 콘텐츠 영역 -->
  <main aria-label="사진보드판 메인 콘텐츠">

    <!-- 🖼️ 이미지 편집 프리뷰 영역 -->
    <section class="board-edit-area" aria-label="이미지 편집 프리뷰">
      <div class="board-preview" aria-hidden="false">
        <!-- 🔽 화살표 스티커 툴 -->
        <div class="arrow-sticker" data-target="arrow" aria-hidden="true">
          <button class="arrow-sticker-close" type="button" aria-label="화살표 스티커 닫기">
            <img src="@/assets/images/arrow-close-btn.svg" alt="닫기 아이콘">
          </button>
          <img src="@/assets/images/arrow-icon.svg" alt="화살표 아이콘" class="arrow-icon">
        </div>

        <!-- ✂️ 자르기 툴 -->
        <div class="crop-tool"  style="position: absolute"data-target="crop" aria-hidden="true" aria-label="자르기 도구">...</div>

        <!-- ↪️ 회전 툴 -->
        <div class="rotate-tool"  style="position: absolute"data-target="rotate" aria-hidden="true" aria-label="회전 도구">...</div>

        <!-- 🖼️ 미리보기 이미지 -->
        <img src="@/assets/images/test-img.png" alt="편집할 이미지 미리보기">
      </div>
    </section>

    <!-- 🛠️ 하단 툴 버튼 영역 -->
    <section class="edit-button-box" aria-label="편집 도구 버튼">
      <!-- 화살표 버튼 -->
      <button
        type="button" class="button edit-btn" data-role="arrow" aria-pressed="false"
        aria-label="화살표 도구 켜기">
        <span class="icon btn-arrow">
          <img src="@/assets/images/btn-arrow-white.svg" alt="화살표 아이콘">
        </span>
        <span class="btn-icon-title">화살표</span>
      </button>

      <!-- 자르기 버튼 -->
      <button
        type="button" class="button edit-btn" data-role="crop" aria-pressed="false"
        aria-label="자르기 도구 켜기">
        <img src="@/assets/images/crop-white.svg" alt="자르기 아이콘">
        <span class="btn-icon-title">자르기</span>
      </button>

      <!-- 회전 버튼 -->
      <button
        type="button" class="button edit-btn" data-role="rotate" aria-pressed="false"
        aria-label="회전 도구 켜기">
        <img src="@/assets/images/rotate-white.svg" alt="회전 아이콘">
        <span class="btn-icon-title">사진 회전</span>
      </button>
    </section>

  </main>
</template>
<style lang="scss" src="@/assets/scss/pages/_board.scss"></style>
<style lang="scss" src="@/assets/scss/pages/_boardSetting.scss"></style>
<!--<script>-->
<!--document.addEventListener("DOMContentLoaded", function () {-->
<!--    const buttons = document.querySelectorAll(".edit-btn[data-role]");-->
<!--    const toolPanels = document.querySelectorAll("[data-target]");-->

<!--    buttons.forEach(button => {-->
<!--        button.addEventListener("click", () => {-->
<!--            const targetRole = button.getAttribute("data-role");-->
<!--            const targetPanel = document.querySelector(`[data-target="${targetRole}"]`);-->
<!--            const isOpen = targetPanel.getAttribute("aria-hidden") === "false";-->
<!--            const btnImg = button.querySelector("img");-->

<!--            if (isOpen) {-->
<!--                // 이미 열려 있으면 닫기-->
<!--                targetPanel.setAttribute("aria-hidden", "true");-->
<!--                button.classList.remove("status-active");-->
<!--                if (btnImg) {-->
<!--                    const src = btnImg.getAttribute("src");-->
<!--                    btnImg.setAttribute("src", src.replace("-active", "-white"));-->
<!--                }-->
<!--            } else {-->
<!--                // 열기 (다른 패널 다 닫기)-->
<!--                toolPanels.forEach(panel => {-->
<!--                    panel.setAttribute("aria-hidden", panel === targetPanel ? "false" : "true");-->
<!--                });-->
<!--                buttons.forEach(btn => {-->
<!--                    const img = btn.querySelector("img");-->
<!--                    if (!img) return;-->
<!--                    const src = img.getAttribute("src");-->
<!--                    if (btn === button) {-->
<!--                        btn.classList.add("status-active");-->
<!--                        img.setAttribute("src", src.replace("-white", "-active"));-->
<!--                    } else {-->
<!--                        btn.classList.remove("status-active");-->
<!--                        img.setAttribute("src", src.replace("-active", "-white"));-->
<!--                    }-->
<!--                });-->
<!--            }-->
<!--        });-->
<!--    });-->

<!--    // 닫기 버튼 처리-->
<!--    const closeButtons = document.querySelectorAll("[data-target] .arrow-sticker-close");-->
<!--    closeButtons.forEach(closeBtn => {-->
<!--        closeBtn.addEventListener("click", () => {-->
<!--            const panel = closeBtn.closest("[data-target]");-->
<!--            const role = panel.getAttribute("data-target");-->

<!--            // 패널 닫기-->
<!--            panel.setAttribute("aria-hidden", "true");-->

<!--            // 버튼 상태 해제 + 이미지 원복-->
<!--            const btn = document.querySelector(`.edit-btn[data-role="${role}"]`);-->
<!--            if (btn) {-->
<!--                btn.classList.remove("status-active");-->
<!--                const img = btn.querySelector("img");-->
<!--                if (img) {-->
<!--                    const src = img.getAttribute("src");-->
<!--                    img.setAttribute("src", src.replace("-active", "-white"));-->
<!--                }-->
<!--            }-->
<!--        });-->
<!--    });-->
<!--});-->



<!--</script>-->

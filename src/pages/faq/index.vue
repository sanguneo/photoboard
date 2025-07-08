<script setup lang="ts">
definePageMeta({
  header: {
    type: 3,
    title: '자주 묻는 질문',
    back: true,
  },
});
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
      <!-- 정렬(필터) 버튼 영역 -->
      <nav aria-label="FAQ 분류 정렬" class="faq-tab-list">
        <ul>
          <li>
            <button type="button" aria-pressed="true" class="tab-button status-active">전체</button>
          </li>
          <li>
            <button type="button" aria-pressed="false" class="tab-button">저장</button>
          </li>
          <li>
            <button type="button" aria-pressed="false" class="tab-button">수정/삭제</button>
          </li>
          <li>
            <button type="button" aria-pressed="false" class="tab-button">기타</button>
          </li>
        </ul>
      </nav>
      <ul class="faq-list">
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q1" class="faq-question">사진보드판은 어떤 서비스인가요?</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q1">
              사진보드판은 아파트 현장에서 사진을 찍을 때 간단히 보드판을 추가할 수 있는 서비스입니다. 카메라로 사진을 찍거나 갤러리에서 불러와 보드판을 손쉽게 만들고, PC로 전송할 수 있습니다.
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q2" class="faq-question">저장한 사진은 어디에 보관되나요?</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q2">
              저장된 사진은 'Xp문서함'에 보관됩니다. Xp문서함은 아파트 전용 문서 관리 서비스로, XpERP 아이디로 로그인하여 사용할 수 있습니다.<br>
              <br>
              1. PC &gt; Xp문서함 접속<br>
              - Xp허브 로그인 &gt; 프로그램 &gt; 'Xp문서함' 아이콘 선택 후 로그인<br>
              - 또는 XpERP 접속 &gt; 홈 &gt; 'Xp문서함' 배너 클릭 후 로그인<br>
              <br>
              2. 사진 저장 위치<br>
              - Xp문서함 &gt; 아파트단지 &gt; 단지문서함 &gt; 사진보드판
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q3" class="faq-question">폴더는 삭제할 수 없나요?</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q3">
              폴더 삭제는 Xp문서함 PC 버전에서만 가능합니다.<br>
              <br>
              1. PC &gt; Xp문서함 접속<br>
              - Xp허브 로그인 &gt; 프로그램 &gt; 'Xp문서함' 아이콘 선택 후 로그인<br>
              - 또는 XpERP 접속 &gt; 홈 &gt; 'Xp문서함' 배너 클릭 후 로그인<br>
              <br>
              2. 단, '01 PC 업로드' 폴더는 앱과 PC에서 모두 삭제가 불가능합니다.
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q4" class="faq-question">파일이 전송이 안 됐어요.</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q4">
              파일 전송이 되지 않은 경우, 두 가지를 확인해 주세요.<br>
              <br>
              1. 단지 문서함 용량<br>
              단지 문서함의 용량이 꽉 찬 경우 파일을 전송할 수 없습니다. 사용하지 않는 파일 삭제 후 다시 시도해 보세요.<br>
              <br>
              2. 통신 환경<br>
              인터넷 연결 환경이 원활한지 확인해 주세요. Wi-Fi 환경에서만 전송되게 설정했다면 사진 등록 &gt; 설정에서 '항상' 사진 전송으로 상태를 바꿔 주세요.
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q5" class="faq-question">사진보드판을 수정하고 싶어요.</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q5">
              'Xp문서함에서 사진 보기' 메뉴에서 파일 옆의 '⋮ (더보기)' 아이콘을 선택해주세요. 팝업에서 '보드판 수정' 메뉴를 선택하여 보드판 내용을 수정할 수 있습니다.
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q6" class="faq-question">Wi-Fi 설정을 바꾸고 싶어요.</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q6">
              사진 등록 &gt; 설정 메뉴 접속 후, 'Xp문서함 사진 전송' 상태를 변경해 주세요.<br>
              <br>
              'Wi-Fi에서만 전송'으로 선택 시 Wi-Fi 환경에서만 Xp문서함으로 자동 전송됩니다.<br>
              <br>
              '항상'으로 선택 시 Wi-Fi 환경과 관계 없이 Xp문서함으로 사진보드판이 자동 전송됩니다. (단, 네트워크 상태에 따라 데이터 요금이 부과될 수 있습니다.)
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q7" class="faq-question">폴더 이름을 바꾸고 싶어요.</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q7">
              폴더 이름은 사진 등록 연월을 기준으로, 자동 생성되어 수정할 수 없습니다.
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q8" class="faq-question">파일 이름을 바꾸고 싶어요.</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q8">
              'Xp문서함에서 사진 보기' 메뉴에서 파일 옆의 '⋮ (더보기)' 아이콘을 선택해주세요. 팝업에서 '이름 변경' 메뉴를 선택하여 파일 이름을 수정할 수 있습니다.
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q9" class="faq-question">내가 촬영하지 않은 사진이 보여요.</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q9">
              사진보드판은 단지의 모든 사용자가 함께 이용할 수 있는 서비스로, 단지의 다른 사용자가 올린 파일이 보일 수 있습니다.
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q10" class="faq-question">사진을 휴대폰으로 다운로드 받고 싶어요.</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q10">
              'Xp문서함에서 사진 보기' 메뉴에서 파일 옆의 '⋮ (더보기)' 아이콘을 선택해 주세요. 팝업에서 '다운로드' 메뉴를 선택하면 휴대전화 갤러리로 사진이 저장됩니다.
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q11" class="faq-question">사진을 삭제하고 싶어요.</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q11">
              사진 삭제는 다음 방법으로 이용해 주세요.<br>
              <br>
              1. 하나씩 삭제<br>
              'Xp문서함에서 사진 보기' 메뉴에서 파일 옆의 '⋮(더보기)' 아이콘을 선택해 주세요. 팝업에서 '삭제하기' 메뉴를 선택해주세요.<br>
              <br>
              2. 여러 개 한 번에 삭제<br>
              'Xp문서함에서 사진 보기' 메뉴에서 사진 파일을 확인해 주세요. '편집' 버튼을 선택하여 여러 개 파일을 체크한 후 '파일 삭제' 버튼을 눌러주세요.
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q12" class="faq-question">파일이 업로드 대기 중이에요.</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q12">
              Wi-Fi 환경에서만 전송할 수 있도록 설정한 경우, 파일이 바로 업로드되지 않습니다.<br>
              <br>
              Wi-Fi를 연결한 후, 'Xp문서함에서 사진 보기' 메뉴에서 '업로드 대기 중' 글씨를 선택해주세요. 대기 중인 파일 확인 후 [전체 전송] 또는 [전송] 버튼을 눌러주세요.
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <span class="faq-q">Q.</span>
              <span id="faq-q13" class="faq-question">업로드 대기 파일이 사라졌어요.</span>
              <img src="@/assets/images/chevron.svg" alt="체브론">
            </summary>
            <div class="faq-answer" aria-labelledby="faq-q13">
              Wi-Fi 환경에서만 전송할 수 있도록 설정한 경우, 저장하지 않은 사진보드판은 최대 30일간 임시 보관됩니다. 30일 이내에 반드시 '전송' 버튼을 눌러 사진을 Xp문서함으로 저장해주세요.
            </div>
          </details>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss">
@use '@/assets/scss/pages/_faq.scss' as *;
</style>

document.addEventListener('DOMContentLoaded', function () {


    function setAppHeight() {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    }

    window.addEventListener('resize', setAppHeight);
    setAppHeight();

    // ---- 헤더 sticky ----
    const header = document.querySelector('.header');
    
    console.log(header); // 콘솔에 null이면 header가 없는 것!
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header?.classList.add('shadow');
        } else {
            header?.classList.remove('shadow');
        }
    });

    // ---- 탭 ----
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            panels.forEach((panel, i) => {
                if (i === index) {
                    panel.classList.add('active');
                    panel.removeAttribute('hidden');
                } else {
                    panel.classList.remove('active');
                    panel.setAttribute('hidden', 'true');
                }
            });
        });
    });

    // ---- 팁 버튼 ----
    const docTipBtn = document.querySelector('.doc-tip-btn');
    const tipContent = document.querySelector('.doc-tip-content');
    docTipBtn?.addEventListener('click', function () {
        const isOpen = tipContent?.style.display === 'block';
        if (tipContent) {
            tipContent.style.display = isOpen ? 'none' : 'block';
            tipContent.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
        }
    });

    // ---- 모달 ----
    const alignBtn = document.querySelector('.option-align-btn');
    const modalDim = document.querySelector('.modal-dim');
    alignBtn?.addEventListener('click', () => {
        if (modalDim) {
            modalDim.style.display = 'flex';
            modalDim.setAttribute('aria-hidden', 'false');
        }
    });
    modalDim?.addEventListener('click', (e) => {
        if (e.target === modalDim) {
            modalDim.style.display = 'none';
            modalDim.setAttribute('aria-hidden', 'true');
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalDim?.getAttribute('aria-hidden') === 'false') {
            modalDim.style.display = 'none';
            modalDim.setAttribute('aria-hidden', 'true');
        }
    });

    // ---- 체크박스 ----
    const selectedCountEl = document.querySelector('.selected-count');
    const allCheck = document.querySelector('#allCheck');
    const itemList = document.querySelectorAll('.xpdoc-list-item');

    function updateItemStatus(item, checked) {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (!checkbox) return;
        checkbox.checked = checked;
        if (checked) {
            item.classList.add('status-selected');
        } else {
            item.classList.remove('status-selected');
        }
    }

    function updateSelectedCount() {
        const checkedCount = Array.from(itemList).filter(function (item) {
            const chk = item.querySelector('input[type="checkbox"]');
            return chk && chk.checked;
        }).length;

        if (selectedCountEl) {
            if (checkedCount > 0) {
                selectedCountEl.textContent = `${checkedCount}개`;
                selectedCountEl.style.display = '';
            } else {
                selectedCountEl.textContent = '';
                selectedCountEl.style.display = 'none';
            }
        }
    }

    // 전체선택 체크박스 클릭 시
    if (allCheck) {
        allCheck.addEventListener('change', function () {
            itemList.forEach(function (item) {
                updateItemStatus(item, allCheck.checked);
            });
            updateSelectedCount();
        });
    }

    // 개별 아이템 체크박스 상태 변화 처리
    itemList.forEach(function (item) {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (!checkbox) return;
        updateItemStatus(item, checkbox.checked);

        checkbox.addEventListener('change', function () {
            updateItemStatus(item, checkbox.checked);

            // 개별 체크 상태 변화 시 전체선택 체크박스도 같이 관리
            const allChecked = Array.from(itemList).every(function (el) {
                const chk = el.querySelector('input[type="checkbox"]');
                return chk && chk.checked;
            });
            if (allCheck) allCheck.checked = allChecked;

            updateSelectedCount();
        });
    });

    // 최초 진입 시 카운트 초기화
    updateSelectedCount();
    
});



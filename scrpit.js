document.addEventListener('DOMContentLoaded', () => {
    // DOM 요소 가져오기
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const detailBtns = document.querySelectorAll('.detail-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    // 상세 정보 데이터 (실제 데이터는 백엔드 또는 JSON 파일에서 가져올 수 있음)
    const infoData = {
        'standard-bga': {
            title: '고밀도 BGA (697BGA-0.5P) 기술 상세',
            text: '697볼 BGA는 0.5mm의 미세 피치로 설계되어, 제한된 공간에서 최대의 I/O 연결이 필요한 고성능 마이크로프로세서 및 칩셋에 적합합니다. 주요 특징은 낮은 인덕턴스, 우수한 고주파 특성입니다.'
        },
        'multi-layer': {
            title: '멀티 레이어 패키징 (DL/ML) 기술 상세',
            text: 'DL(Double Layer) 및 ML(Multi-Layer) 패키징은 패키지 기판 내에 여러 층의 배선 레이어를 통합하여 신호선 라우팅의 복잡성을 해결합니다. 이는 전력 및 접지 분배를 최적화하고 EMI를 줄이는 데 필수적입니다.'
        },
        'comparison': {
            title: '5L vs DL 구조 성능 비교',
            text: '5L(Single Layer) 구조는 비용 효율적이지만, DL(Double Layer) 구조는 추가적인 배선층을 통해 더 나은 열 방출 경로를 제공하고, 전송선 효과(Transmission Line Effect)를 개선하여 고속 신호 무결성을 보장합니다. 고성능 애플리케이션에는 DL 구조가 권장됩니다.'
        }
    };

    // 상세 버튼 클릭 이벤트 처리
    detailBtns.forEach(button => {
        button.addEventListener('click', () => {
            const infoKey = button.getAttribute('data-info');
            const data = infoData[infoKey];

            if (data) {
                modalTitle.textContent = data.title;
                modalText.textContent = data.text;
                modal.style.display = 'block'; // 모달 표시
            }
        });
    });

    // 닫기 버튼 (X) 클릭 이벤트 처리
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

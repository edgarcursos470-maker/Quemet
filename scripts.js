document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('#galeria-cards');
    const viewport = document.querySelector('.galeria-viewport');
    const previousButton = document.querySelector('#seta-esquerda');
    const nextButton = document.querySelector('#seta-direita');

    if (cardsContainer && viewport && previousButton && nextButton) {
        let currentOffset = 0;

        const isDesktop = () => window.innerWidth >= 768;

        const getCardStep = () => {
            const firstCard = cardsContainer.querySelector('[class*="col-"]');
            const styles = window.getComputedStyle(cardsContainer);
            const columnGap = parseFloat(styles.columnGap) || 0;

            return firstCard ? firstCard.getBoundingClientRect().width + columnGap : 0;
        };

        const getMaximumOffset = () => Math.max(0, cardsContainer.scrollWidth - viewport.clientWidth);

        const updateCarousel = () => {
            if (!isDesktop()) {
                currentOffset = 0;
                cardsContainer.style.transform = 'translateX(0)';
                return;
            }

            const maximumOffset = getMaximumOffset();
            currentOffset = Math.min(Math.max(currentOffset, 0), maximumOffset);
            cardsContainer.style.transform = `translateX(-${currentOffset}px)`;
        };

        nextButton.addEventListener('click', () => {
            if (!isDesktop()) {
                return;
            }

            const cardStep = getCardStep();
            const maximumOffset = getMaximumOffset();

            if (!cardStep || !maximumOffset) {
                return;
            }

            currentOffset = currentOffset + cardStep >= maximumOffset
                ? 0
                : currentOffset + cardStep;
            updateCarousel();
        });

        previousButton.addEventListener('click', () => {
            if (!isDesktop()) {
                return;
            }

            const cardStep = getCardStep();
            const maximumOffset = getMaximumOffset();

            if (!cardStep || !maximumOffset) {
                return;
            }

            currentOffset = currentOffset - cardStep <= 0
                ? maximumOffset
                : currentOffset - cardStep;
            updateCarousel();
        });

        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    }

    const loginForm = document.querySelector('#login-form');
    const loginMessage = document.querySelector('#login-message');

    if (!loginForm || !loginMessage) {
        return;
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#senha').value.trim();

        if (!email || !password) {
            loginMessage.textContent = 'Preencha o email e a senha para continuar.';
            loginMessage.className = 'mt-3 mb-0 text-danger';
            return;
        }

        loginMessage.textContent = 'Login preenchido com sucesso.';
        loginMessage.className = 'mt-3 mb-0 text-success';
    });
});

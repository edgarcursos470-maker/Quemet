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

    const topButton = document.querySelector('#voltar-topo');
    const loginButton = document.querySelector('#login-button');
    const registerButton = document.querySelector('#cadastro-submit');

    const updateTopButton = () => {
        if (topButton) {
            topButton.classList.toggle('visivel', window.scrollY > 200);
        }
    };

    if (topButton) {
        topButton.addEventListener('click', topo);
        window.addEventListener('scroll', updateTopButton, { passive: true });
        updateTopButton();
    }

    if (loginButton) {
        loginButton.addEventListener('click', login);
    }

    if (registerButton) {
        registerButton.addEventListener('click', cadastro);
    }
});

function topo(){
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function login(){
    const usuarioField = document.getElementById('usuario');
    const senhaField = document.getElementById('senha');

    if (!usuarioField || !senhaField) {
        return;
    }

    const usuario = usuarioField.value.trim().toLowerCase();
    const senha = senhaField.value.trim().toLowerCase();

    if (usuario === 'admin' && senha === '123456') {
        window.location = 'index.html';
    } else {
        alert('Acesso Negado. Dados incorretos');
    }
}

function cadastro(){
    alert('Cadastrado com sucesso!');
    window.location.href = 'index.html';
}

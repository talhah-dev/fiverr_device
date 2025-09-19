(() => {
    const inner = document.querySelector('#appScreens .carousel-inner');
    const slides = [...inner.querySelectorAll('.carousel-item')];

    function perView() {
        return window.innerWidth >= 1200 ? 5 : 1; // desktop vs mobile
    }

    function clearClones() {
        inner.querySelectorAll('.cloned').forEach(n => n.remove());
    }

    function setup() {
        const n = perView();
        clearClones();
        slides.forEach((slide) => {
            let next = slide.nextElementSibling || slides[0];
            for (let i = 1; i < n; i++) {
                const clone = (next.querySelector('.col-slide') || next.firstElementChild).cloneNode(true);
                clone.classList.add('cloned');
                slide.appendChild(clone);
                next = next.nextElementSibling || slides[0];
            }
        });
    }

    setup();
    window.addEventListener('resize', setup, { passive: true });
})();

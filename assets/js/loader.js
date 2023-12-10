// loader nw
window.addEventListener('load', () => {
    const pageLoader = document.querySelector('.page-loader');
    if (pageLoader) {
        pageLoader.classList.add('fade');
        pageLoader.addEventListener('transitionend', () => {
            pageLoader.style.display = 'none';
        });
    }
  });
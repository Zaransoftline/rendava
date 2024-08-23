const body = document.getElementById('body');
const button = document.getElementById('menu__toggle');
const menu = document.getElementById('menu');

if (button && menu) {
    button.addEventListener('click', () => {
        menu.classList.toggle('visible');
        if (menu.classList.contains('visible')) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'scroll';
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 600) {
                menu.classList.remove('visible');
                body.style.overflowY = 'scroll';
                button.checked = false;
            }
        });
    });
}

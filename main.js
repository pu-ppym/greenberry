const toggleBtn = document.querySelector('.navbar-togglebtn');
const menu = document.querySelector('.nav-menu');

// 클릭 될때마다 호출하기
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
} );

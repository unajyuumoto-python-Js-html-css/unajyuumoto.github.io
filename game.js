document.addEventListener('DOMContentLoaded', () => {
    const topNav = document.getElementById('top-nav');
    if (!topNav) return;
   
    document.addEventListener('mousemove', (e) => {
        
        if (e.clientY < 50) { // 上から50px以内にマウスがある場合
            topNav.classList.add('visible');
        } else {
            topNav.classList.remove('visible');
        }
    });
});





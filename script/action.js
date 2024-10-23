document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.mouse_circle');

    document.addEventListener('mousemove', function(event) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
    });

    document.querySelector('.section5').addEventListener('mouseenter', function() {
        cursor.style.visibility = 'visible'; // 섹션에 마우스가 들어오면 커서 표시
    });

    document.querySelector('.section5').addEventListener('mouseleave', function() {
        cursor.style.visibility = 'hidden'; // 섹션에서 마우스가 나가면 커서 숨김
    });
});
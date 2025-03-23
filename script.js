const scene = document.querySelector('.scene');
let isDragging = false;
let autoRotate = true;
let lastX = 0;
let lastY = 0;
let rotationY = 0;
let rotationX = 0;

// Mouse down event
scene.addEventListener('mousedown', (e) => {
    isDragging = true;
    autoRotate = false;
    lastX = e.clientX;
    lastY = e.clientY;
});

// Mouse move event
scene.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;

        rotationY += deltaX * 0.5;
        rotationX -= deltaY * 0.5;

        scene.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;

        lastX = e.clientX;
        lastY = e.clientY;
    }
});

// Mouse up event
scene.addEventListener('mouseup', () => {
    isDragging = false;
    autoRotate = true;
});

// Auto-rotate function
function autoRotateCube() {
    if (autoRotate) {
        rotationY += 0.5; // Adjust speed here
        scene.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
    }
    requestAnimationFrame(autoRotateCube);
}

// Start auto-rotation
autoRotateCube();
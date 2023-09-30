const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const tooltip = document.getElementById('tooltip');

// Define an array to store star data
const stars = [
    { x: 100, y: 200, name: 'Star 1', description: 'This is the first star.' },
    { x: 300, y: 150, name: 'Star 2', description: 'This is the second star.' },
    // Add more star data as needed
];

// Function to draw stars
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        // Draw the star as a point
        ctx.beginPath();
        ctx.arc(star.x, star.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Customize opacity and color
        ctx.fill();

        // Draw connecting lines
        stars.forEach(otherStar => {
            if (star !== otherStar) {
                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(otherStar.x, otherStar.y);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; // Customize opacity and color
                ctx.stroke();
            }
        });
    });
}

// Function to display tooltips on hover
function showTooltip(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    stars.forEach(star => {
        const distance = Math.sqrt((mouseX - star.x) ** 2 + (mouseY - star.y) ** 2);
        if (distance < 10) {
            tooltip.innerHTML = `<strong>${star.name}</strong><br>${star.description}`;
            tooltip.style.left = `${star.x}px`;
            tooltip.style.top = `${star.y + 10}px`;
            tooltip.classList.remove('hidden');
        }
    });
}

// Event listeners for drawing and tooltips
canvas.addEventListener('mousemove', showTooltip);
canvas.addEventListener('mouseout', () => {
    tooltip.classList.add('hidden');
});

// Initial draw
drawStars();
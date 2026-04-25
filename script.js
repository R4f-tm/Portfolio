// Animation des liens de navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
        anchor.style.transform = 'scale(1.1)';
    });
    anchor.addEventListener('mouseleave', () => {
        anchor.style.transform = 'scale(1)';
    });
});

// Animation des cartes de projet
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
    const carousel = wrapper.querySelector('.carousel');
    wrapper.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
    });
    wrapper.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
    });
});
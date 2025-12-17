// Button ripple effect (pro touch)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Back button
document.querySelector('.back-btn').onclick = () => {
  history.back();
};

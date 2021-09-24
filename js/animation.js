var time = gsap.timeline();

time.from('#title', { duration: 1, x: -150 });
time.from('#btn', { duration: 1.5, y: 100, opacity: 0 });
time.from('#subtitle', { duration: 1, opacity: 0, ease: 'bounce' });
const coverScrollSpeed = 1.5;
const coverContentScrollSpeed = 1.3;

window.onscroll = () => {
    if (window.scrollY > 30) {
        document.querySelector('nav').classList.add('bg-dark');
    } else {
        document.querySelector('nav').classList.remove('bg-dark');
    }
    // Move cover element down in relation to scroll, so that it appears to
    // scroll slower
    try {
        document.querySelector('#cover').style.top = `${window.scrollY * (coverScrollSpeed-1)}px`;
    } catch {}
    try {
        document.querySelector('#half-cover').style.top = `${window.scrollY * (coverScrollSpeed-1)}px`;
    } catch {}
    // Compensate the movement of the cover element by moving the contentµ
    console.log('compensating');
    document.querySelector('#cover-content').style.top = `${window.scrollY * (coverContentScrollSpeed-coverScrollSpeed)}px`;
}
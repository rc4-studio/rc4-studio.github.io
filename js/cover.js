// Ensures that cover text fits to width, setting max font-size to 70px
let margin = 80;
function fitCover () {
    console.log('fitted');
    text = document.querySelector('#cover-text');
    text.style.fontSize = '20px';
    let width = text.offsetWidth;
    let parent_width = text.parentElement.offsetWidth - margin;
    text.style.fontSize = Math.min(20 * parent_width / width, 70) + 'px';
}
window.addEventListener('resize', fitCover, true);
document.addEventListener('DOMContentLoaded', fitCover);
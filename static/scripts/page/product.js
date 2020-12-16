
let calcImageMargin = () => {
    const imgContainerSelector = '[js-main-image]';

    const imgContainer = document.querySelector(imgContainerSelector);

    let imgHeight = imgContainer.clientHeight;
    imgContainer.style.marginTop = (window.innerHeight * 0.3) - imgHeight/2 + 'px';
}

calcImageMargin();
window.onresize = calcImageMargin;

let gestColor = () => {

    const backgroundSelector = '[js-bg-color]';
    const colorOptionsSelector = '[js-color-choice]';
    const activeClass = 'active';

    const background = document.querySelector(backgroundSelector);
    const colorOptions = document.querySelectorAll(colorOptionsSelector);

    colorOptions.forEach((color) => {
        color.addEventListener('click', () => {
            const activeColor = document.querySelector('.color.active');
            if (!color.classList.contains(activeClass)) {
                activeColor.classList.remove(activeClass)
                color.classList.add(activeClass)
                background.style.backgroundColor = color.style.backgroundColor;
            }
        })
    })

}
gestColor();
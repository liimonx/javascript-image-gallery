const allImages = document.querySelectorAll('#gallery img')
const fadeOutSlider = document.getElementById('fade-out')

setInterval(()=>{
    const selectedImages = allImages[Math.floor(Math.random()*allImages.length)];
    let src = selectedImages.src
    const slider = document.getElementById('slider')
    slider.style.backgroundImage = `url(${src})`
}, 4000)

window.addEventListener('scroll', (e)=>{
    fadeOutSlider.style.opacity = window.scrollY * 0.002
})
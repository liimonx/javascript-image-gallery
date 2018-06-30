import images from './imgsrc'
const targetImages = document.querySelectorAll('#gallery img')
const sliderContainer = document.getElementById('slider__container')
const slideShowBtn = document.querySelector('.slideshow')
const swplayIcon = document.querySelector('.slideshow .play img')
const swpauseIcon = document.querySelector('.slideshow .pause img')


const zoomSlider = (timg, simg) =>{
    document.querySelector('.slider__close').addEventListener('click', () => displaySlider(false))
    document.querySelector('#slider__control .next')
    const zSlider = document.getElementById('zoom__slider')

    let m = 0

    const displaySlider = (v) =>{
        const rvid = document.querySelectorAll('#slider__container div')
        if (v) {
            zSlider.style.display = 'block'
            document.body.style.overflow = 'hidden'
        } else {
            zSlider.style.display = 'none'
            document.body.style.overflow = 'auto'
            rvid.forEach(d => d.remove(d.children))
        }
    }

    const createSliderImg = () => {
        simg.forEach(img => {
            const div = document.createElement('div')
            const imgE = document.createElement('img')
            imgE.src = img.src
            imgE.dataset.tag = img.tag
            div.appendChild(imgE)
            sliderContainer.appendChild(div)
            sliderContainer.style.width = `${simg.length}00vw`
        })
    }
    timg.forEach(t => {
        t.addEventListener('click', (e) => {
            displaySlider(true)
            createSliderImg()
            const i = simg.findIndex(img => ('http://localhost:8080/'+img.src) == e.target.src)
            sliderContainer.style.transform = `translateX(-${i}00vw)`
            m = i
        })        
    });

    const slide = (d) => {
        if (d == 'next' && m != (`${simg.length}` - 1)) {
            m += 1
            sliderContainer.style.transform = `translateX(-${m}00vw)`
        } else if (d == 'prev' && m != 0) {
            m -= 1
            sliderContainer.style.transform = `translateX(-${m}00vw)`
        }
    }

    const slideshow = () =>{
        if (swpauseIcon.style.opacity == 0) {
            swpauseIcon.style.opacity = '1'
            swplayIcon.style.opacity = '0'
            let itv = setInterval(()=> {
                slide('next')
                if (swplayIcon.style.opacity == '1' || sliderContainer.style.transform == `translateX(-${simg.length - 1}00vw)` || zSlider.style.display == 'none') {
                    clearInterval(itv)
                    swpauseIcon.style.opacity = '0'
                    swplayIcon.style.opacity = '1'
                }
            }, 3000)
        } else {
            swpauseIcon.style.opacity = '0'
            swplayIcon.style.opacity = '1'
        }
    } 

    document.querySelector('#slider__control .next').addEventListener('click', () => slide('next'))
    document.querySelector('#slider__control .prev').addEventListener('click', () => slide('prev'))
    slideShowBtn.addEventListener('click', () => slideshow())
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            slide('next')
        }else if (e.key === 'ArrowLeft'){
            slide('prev')
        }else if (e.key === 'Escape'){
            displaySlider(false)
        }else if (e.key == 'Enter'){
            slideshow()
        }
    })

          
    
}

zoomSlider(targetImages, images)
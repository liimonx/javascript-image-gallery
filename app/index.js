/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
// ================================
// START YOUR APP HERE
// ================================
import './components/imgDistribution'
import './components/search'
import './components/slider'
import images from './components/imgsrc'
import zoomSlider from './components/zoom_in_slider'

const targetImages = document.querySelectorAll('#gallery img')

zoomSlider(targetImages, images)

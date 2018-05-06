import Vue from 'vue'
import App from './app.vue'
// import imgSrc from './assets/images/timg.jpg'
// import './assets/style/test.css'
import './assets/style/index.less'
const root = document.createElement('div')
// const img = new Image();
// img.src = imgSrc;
// document.body.appendChild(img)
document.body.appendChild(root)

new Vue({
    render: h => h(App)
}).$mount(root)
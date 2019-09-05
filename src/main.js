import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './components/store.js';

//Pages
import Main from './pages/main.vue';

// Vue.use($store);
Vue.use(VueRouter);


var browserDetecter = function() {

    var browser = 'unknown';

    var is_chrome = !!window.chrome && !is_opera;
    if (is_chrome) {
        browser = 'chrome';
    }
    var is_explorer= typeof document !== 'undefined' && !!document.documentMode;
    if (is_explorer) {
        browser = 'ie';
    }
    var is_firefox = typeof window.InstallTrigger !== 'undefined';
    if (is_firefox) {
        browser = 'firefox';
    }
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (is_safari) {
        browser = 'safari';
    }
    var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    if (is_opera) {
        browser = 'is_opera';
    }

    if (window.navigator.userAgent.indexOf("Edge") > -1) {
        browser = 'edge';
    }

    window.browser = browser;
    document.body.classList.add('browser-' + browser);
};
browserDetecter();

const routesList = [
	{path : '/', name: 'main', component: Main }
];

const router = new VueRouter({
	mode: 'history',
    routes: routesList,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
});

new Vue({
	el: "#app",
	router: router,
	store: store
});
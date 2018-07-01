window._ = require('lodash');
window.axios = require('axios');
window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');

import Search from './components/search/Search'
import VTooltip from 'v-tooltip'

require('materialize-css/');

Vue.use(VTooltip);

new Vue({
    el: '#app',
    data: {
        mode: 'repositories',
    },
    components: {
        Search,
    }
});

window.addEventListener('keyup', function (e) {
    if ((e.ctrlKey && e.key == '[') || (e.key == 'Escape')) {
        window.parent.postMessage('esc', '*');
    }
});
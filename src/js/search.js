window._ = require('lodash');
window.axios = require('axios');
window.Vue = require('vue');

require('materialize-css/');

import Search from './components/search/Search'

new Vue({
    el: '#app',
    data: {
        mode: 'repositories',
    },
    components: {
        Search,
    }
});
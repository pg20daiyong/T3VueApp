/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );


import Operation from '@/routes/Operation.vue'
import Analysis from '@/routes/Analysis.vue'
import Liveview from '@/routes/Liveview.vue'
import Overview from '@/routes/Overview.vue'


export default new Router({
    routes: [
        { path:"/operation", name:"Operation", component: Operation },
        { path:"/analysis", name:"Analysis", component: Analysis },
        { path:"/liveview", name:"Liveview", component: Liveview },
        { path:"/overview", name:"Overview", component: Overview },
    ]
});
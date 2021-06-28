<!--Copyright 2021 (C) Daiyong Kim, All Rights Reserved-->
<template>


    <section class="liveview-container">

        <div class="Liveview">{{ name }} your Vue.js App</div>
        <PositionChart></PositionChart>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import PositionChart from '@/components/PositionChart.vue'

    class LiveviewController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Liveview',
            }
        }
    }

    export default new LiveviewController('pgLiveview',  {PositionChart});

</script>
<style>
/* Local styles for this template */
    .about-container {
        display: inline-block;
        width: 100%;
    }

    .about {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }
</style>

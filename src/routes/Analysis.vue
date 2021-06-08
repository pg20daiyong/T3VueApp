<!--
AnalysisController File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Daiyong Kim, Kibble Online Inc. All Rights Reserved.
-->
<template>


    <section class="analysis-container">

        <div class="Analysis">{{ name }} your Vue.js App</div>
        <Chart></Chart>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import Chart from '@/components/Chart.vue'

    class AnalysisController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Analysis',
            }
        }
    }

    export default new AnalysisController('pgAnalysis', {Chart});

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

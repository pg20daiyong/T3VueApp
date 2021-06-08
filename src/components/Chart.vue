<template>
  <div class="Content">
    <canvas class="chart" ref="canvas" width="600" height="250" style="display: inline"></canvas>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import Controller from '@/mixins/controller'
import { mapActions, mapGetters } from 'vuex'

export default {
    extends: Bar,
    mounted () {
       //The data for our dataset
        let records = this.$store.state.records;
        let data = {
            labels: ['Section1', 'Section2', 'Section3', 'Section4', 'Section5'],
            datasets: [{
                label: 'Deaths by Section',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [2, 1, 3, 4, 6, 10]
                }]
            };
            // Configuration options go here
            let options = {};
        this.renderChart(data, options)
  }
}
</script>

<style scoped>
.chart {
  max-width: 600px;
  max-height: 250px;
}
</style>
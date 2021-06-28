<!--Copyright 2021 (C) Daiyong Kim-->

<template>
  <div class="Content">
    <canvas class="chart" ref="canvas" width="600" height="250" style="display: inline"></canvas>
  </div>
</template>

<script>
  //Importing Bubble class from the vue-chartjs wrapper
  import {Bubble} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default{
    extends: Bubble,  
    
    mounted () {
       //The data for our dataset
        let records = this.$store.state.records;
        //console.log(records.data)
        var coordinate = []
        for(var i = 0; i<records.data.length; i++)
        {
            var x = Math.floor(records.data[i].xLocation)
            var y = Math.floor(records.data[i].zLocation)
            var r = 3
            var z = { x, y, r}
            coordinate.push(z)
        }      

        // to modify ? 
        // what is better way to show graph
        
        let datacollection = {
          //Data to be represented on x-axis
          labels: ['Data'],
          datasets: [
            {
              label: 'positions',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: coordinate
            }
          ]
        };
            // Configuration options go here
            let options = {};
        this.renderChart(datacollection, options)
  }
} 
      
</script>

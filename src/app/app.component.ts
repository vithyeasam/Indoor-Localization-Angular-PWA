import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trackingPWA';
  scatterChart = [];
  x1: any;
  y1: any;
  x: any;
  y: any;


oldX: any;
  ngOnInit(): void {
this.oldX = [{x: 4 , y: 5}];
    // Bar chart:
this.scatterChart = new Chart('scatterChart', {
type: 'scatter',
data: {
//  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [{
     label: 'On/Off',
     data: this.oldX,
  //    data: [{
  //     x: this.x,
  //     y: this.y
  // // }, {
  // //     x: 10,
  // //     y: 10
  // // }, {
  // //     x: -9,
  // //     y: 5
  // }],
  pointRadius: 15,
  pointHoverRadius: 10,
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 0
 }]
},
options: {
 title: {
     text: 'Scatter Chart',
     display: false
 },
 scales: {
  yAxes: [{
    display: false,
    ticks: {
        beginAtZero: true,
        // steps: 10,
        stepSize: 5,
        max: 12
    }
}],
     xAxes: [{
       type: 'linear',
       position: 'bottom',
       ticks: {
        beginAtZero: true,
        // steps: 10,
        // stepValue: 5,
        max: 12,
        min: -12
    }
     }]
 }
}
});
setInterval( () => {
  this.x1 = Math.floor(Math.random() * 10) + 1;
  this.y1 = Math.floor(Math.random() * 10);
  // this.x.push(this.x1);
  // this.y.push(this.y1);
  this.oldX = [{x: this.x1 , y: this.y1}];
  // this.scatterChart.data.datasets[0].data[0].push(this.oldX);
  // this.scatterChart.update();
  console.log(this.oldX[0]);
  console.log(this.scatterChart.data.datasets[0].data[0].x);
  this.scatterChart.data.datasets[0].data[0].x = this.x1;
  this.scatterChart.data.datasets[0].data[0].y = this.y1;
  console.log(this.scatterChart.data.datasets[0].data[0].x);
  // console.log(this.oldX[0].x);
  // setData(this.oldX[0].x);
  // console.log(this.BarChart.name);
  // setData(this.data.datasets.data.y);
  // setLabels(data.labels);
  // this.BarChart = new Chart('barchart').Line(data, options);
  updateConfigByMutating(this.scatterChart);
}, 2000);

function setData(data) {
  data.push(Math.floor(Math.random() * 10) + 1);
  data.shift();

}

function updateConfigByMutating(chart) {
  // chart.options.title.text = 'new title';
  chart.update();
}

  }

}

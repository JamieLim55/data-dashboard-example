import { Component, OnInit } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  chartType = "line"
  chartData = []
  chartLabels = []
  constructor() { }

  ngOnInit() {
    
  let dataset = []
  let monthlyImage = {}

  for(let numberImage of data){
   var month= new Date(numberImage.dateAdded)
   var getEachMonth = month.getMonth()
  if(!monthlyImage[getEachMonth]){
    monthlyImage[getEachMonth] = 0
  }
  monthlyImage[getEachMonth] += 1
  }
  this.chartLabels = Object.keys(monthlyImage)
    for (let num of Object.keys(monthlyImage)){
      dataset.push(monthlyImage[num])
    }
    this.chartData.push({
      data: dataset
    })


  }

}

import { Component, OnInit } from '@angular/core';
import data from '../../data.json'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chartType = "pie"
  chartData = []
  chartLabels = []

  constructor() { }

  ngOnInit() { 

    let dataset = []
    let imageTags = []
    for ( let tagType of data){
      for ( let i=0; i<tagType.tags.length; i++){
      if(!imageTags[tagType.tags[i]]){
        imageTags[tagType.tags[i]] = 0
      }
      imageTags[tagType.tags[i]] += 1
     // console.log(noTags.tags[i])
    }
  }
    this.chartLabels = Object.keys(imageTags)
    for (let image of Object.keys(imageTags)){
      dataset.push(imageTags[image])
    }
    this.chartData.push({
      data: dataset
    })



   }

}



import { Component, OnInit } from '@angular/core';
import data from '../../data.json'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chartType = "bar"
  chartData = []
  chartLabels = []
  
  constructor() { }

  ngOnInit() {
  
  let dataset = []
  let monthTagLike = {}
  let tagsLike = {}
  for (let noTagsLike of data){
   var month= new Date(noTagsLike.dateAdded)
   var getEachMonth = month.getMonth()
 
    for ( let i=0; i<noTagsLike.tags.length; i++){
    if(!monthTagLike[getEachMonth]){
      monthTagLike[getEachMonth] = {}
    }
    if(!monthTagLike[getEachMonth][noTagsLike.tags[i]]){
      monthTagLike[getEachMonth][noTagsLike.tags[i]] = 0
    }
    monthTagLike[getEachMonth][noTagsLike.tags[i]] += noTagsLike.likes
    
    }
  }
  this.chartLabels = Object.keys(monthTagLike)
  for (let month of Object.keys(monthTagLike)){
    for(let tag in monthTagLike[month] ){
      if (!tagsLike[tag]){
        tagsLike[tag]=[]
        }
      tagsLike[tag].push(monthTagLike[month][tag])
    }
  }

  for(let tag in tagsLike){
  this.chartData.push({
    data: tagsLike[tag],
    label: tag
  })
  }
  this.chartData = dataset

  }
  

}







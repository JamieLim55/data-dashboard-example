import { Component, OnInit } from '@angular/core';
import data from '../../data.json'

@Component({
  selector: 'app-pie-no-like',
  templateUrl: './pie-no-like.component.html',
  styleUrls: ['./pie-no-like.component.css']
})
export class PieNoLikeComponent implements OnInit {
  chartType = "pie"
  chartData = []
  chartLabels = []

  constructor() { }

  ngOnInit() {  
  
  let dataset = []
  let tagsType = []

  for ( let noTags of data){
    for ( let i=0; i<noTags.tags.length; i++){
    if(!tagsType[noTags.tags[i]]){
      tagsType[noTags.tags[i]] = 0
    }
    tagsType[noTags.tags[i]] += noTags.likes
   // console.log(noTags.tags[i])
  }
}
  this.chartLabels = Object.keys(tagsType)
  for (let tag of Object.keys(tagsType)){
    dataset.push(tagsType[tag])
  }
  this.chartData.push({
    data: dataset
  })

  }

}

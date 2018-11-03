import { Component, OnInit } from '@angular/core';

import { WindowService } from '../service/window.service'

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.sass']
})
export class CaptureComponent implements OnInit {

  video:any

  constructor(
    private w:WindowService
  ) { }

  ngOnInit() {
    this.video = document.querySelector('#camare')
    this.streamCamare(this.video)
  }

  streamCamare(video){
    video.style.width = this.w.size().width + 'px'
    video.style.height = this.w.size().height + 'px'
    let canvas = document.createElement('canvas')
    let context = canvas.getContext('2d')
    context.drawImage(video, 0, 0, this.w.size().width, this.w.size().height);
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(stream=>{
      video.srcObject = stream
    }).catch(err=>{
      console.log(err)
    })
  }



}

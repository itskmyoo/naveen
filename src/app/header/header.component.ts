import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  logonTime =  new Date();

  currentDate = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
  currentTime =    new Date().toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true })

  constructor() {

  }

  ngOnInit() {

    this.startClock();
  }

  startClock(){

    setInterval(() => {
      this.currentDate = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
      this.currentTime =    new Date().toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true })

    }, 1000);
  }

}

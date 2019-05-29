import { Component } from '@angular/core';
import {HomeService} from './home.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homepage';


  currentUser = {};
  currentCard;


  constructor(private homeService: HomeService){

  }


  _handleUserClick(userIndex){
    console.log(userIndex);
    this.currentUser = this.homeService.userData[userIndex];

  }

  _handleCardClick(clickedCard){
    this.currentCard = clickedCard;

  }
  suggestions = [
    {
      title: "Suggestions 1",
      status: 1
    },
    {
      title: "Suggestions 2",
      status: 1
    },
    {
      title: "Suggestions 3",
      status: 2
    },
    {
      title: "Suggestions 4",
      status: 2
    },
    {
      title: "Suggestions 5",
      status: 0
    }
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homepage';


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

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }


  userData = [
    {
      title: "User 1",
      detail: "Long description for user 1",
      cards : [
        {
          cardId: 2345,
          detail : ["row 1","row 2"]
        },
        {
          cardId: 2346,
          detail : ["row 1","row 2"]
        }
      ]
    },
    {
      title: "User 2",
      detail: "Long description for user 2",
      cards : [
        {
          cardId: 2445,
          detail : ["row 1","row 2"]
        },
        {
          cardId: 2446,
          detail : ["row 1","row 2"]
        },
        {
          cardId: 2447,
          detail : ["row 1","row 2"]
        },
        {
          cardId: 2448,
          detail : ["row 1","row 2"]
        }
      ]
    }
  ];
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-balance-detail',
  templateUrl: './balance-detail.component.html',
  styleUrls: ['./balance-detail.component.css']
})
export class BalanceDetailComponent implements OnInit {


  @Input() card;
  constructor() { }

  ngOnInit() {
  }

}

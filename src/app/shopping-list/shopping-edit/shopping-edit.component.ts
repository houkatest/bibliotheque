import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
name = '';
  constructor() { }

  onUpdateServerName(event: any) {
    this.name = (<HTMLInputElement>event.target).value;
  }
   ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'online-store 🥨';

  power = 10;

  array = ['🍎', '🍏', '🍇', '🍌', '🍑'];
  addItem() {
    this.array.push(this.title);
  }

  deleteItem(index: number) {
    this.array.splice(index, 1);
  }

  ngOnInit(): void {
  }

}

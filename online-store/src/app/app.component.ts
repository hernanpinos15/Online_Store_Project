import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-store';

  array = ['🍎', '🍏', '🍇', '🍌', '🍑'];
  addItem() {
    this.array.push(this.title);
  }

  deleteItem(index: number) {
    this.array.splice(index, 1);
  }

}

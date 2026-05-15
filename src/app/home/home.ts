import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  homemessage = signal('hello world');
  keyUpHandler(event: KeyboardEvent) {
    console.log(event.key);
  }
}

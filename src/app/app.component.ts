import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component'; // Import NavComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent], // Import NavComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
}

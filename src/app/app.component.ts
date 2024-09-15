import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClient provider

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

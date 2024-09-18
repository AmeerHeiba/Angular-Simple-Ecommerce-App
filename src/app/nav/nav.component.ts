import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CartService } from '../requests/cart.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  cartItems: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((data) => {
      this.cartItems = data.length;
    });
  }
}

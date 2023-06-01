import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public cartService:ShoppingCartService,public authService:AuthService){}

  logOut=()=>{
    this.authService.logout();
  }
}

import { Component, OnInit } from '@angular/core';

// Application Services
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public cartValue = 0;
    public showCartValue = false;

  constructor(
      private utilsService: UtilsService
  ) {
    this.utilsService.updateCartValue$.subscribe(value => {
        this.cartValue += value;

        this.cartValue = parseFloat(this.cartValue.toFixed(2));

        localStorage.setItem('cartValue', JSON.stringify(this.cartValue));
    });

    if (localStorage.getItem('cartValue')) {
        this.cartValue = JSON.parse(localStorage.getItem('cartValue'));
    }
  }

  ngOnInit() {
  }

  public changeShowCartValue = () => {
      this.showCartValue = true;
  }

    public changeHideCartValue = () => {
        this.showCartValue = false;
    }

}

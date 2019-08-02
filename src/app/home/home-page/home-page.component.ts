import { Component, OnInit } from '@angular/core';

// Application Services
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    public productsList = [];

  constructor(
      private utilsService: UtilsService
  ) {
      this.getProducts();
  }

  ngOnInit() {
  }

  private getProducts = () => {
      this.utilsService.getJSONFile('products.json').subscribe(response => {
          if (response) {
              this.productsList = response;
          }
      });
  }

  public addProductToCart = (value) => {
      this.utilsService.updateCartValue(value);
  }

}

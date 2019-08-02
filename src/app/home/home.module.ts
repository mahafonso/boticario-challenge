import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Components
import { HomePageComponent } from './home-page/home-page.component';

// Application Modules
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
      HomePageComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

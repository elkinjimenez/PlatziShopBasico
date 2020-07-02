import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, BannerComponent],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }

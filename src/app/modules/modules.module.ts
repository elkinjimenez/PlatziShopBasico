import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [ProductsComponent, ProductComponent, ContactsComponent],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }

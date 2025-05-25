import {Component, Injectable} from '@angular/core';
import {ProductRepresentation} from '../../services/api/models/product-representation';
import {FormsModule} from '@angular/forms';
import {ProductService} from '../../services/api/products/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-product',
  imports: [
    FormsModule
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
@Injectable()
export class NewProductComponent {
  product:ProductRepresentation ={};

  constructor(private productService: ProductService,private router:Router) {
  }
  saveProduct() {
    this.productService.createProduct(this.product).subscribe({
      next: ()=> {
        this.router.navigate(['products']);
      }
    })
  }
}

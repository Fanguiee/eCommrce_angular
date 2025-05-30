import { Component, Input } from '@angular/core';
import { RatingRepresentation } from '../../services/api/models/rating-representation';
import { ProductRepresentation } from '../../services/api/models/product-representation';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() product!: ProductRepresentation;

}

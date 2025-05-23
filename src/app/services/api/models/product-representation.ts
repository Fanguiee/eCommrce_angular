import {RatingRepresentation} from './rating-representation';

export interface ProductRepresentation {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  rating?: RatingRepresentation;
}

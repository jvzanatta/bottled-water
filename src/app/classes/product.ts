export class Product {
  createdAt: number;
  updatedAt: number;
  id: number;
  name: string;
  defaultPriceInCents: number;
  msrpInCents: number;
  subscriptionPrice: number;
  ordinal: number;
  mainImage: any;
  cost: number;
  maxPrice: number;
  minPrice: number;

  constructor(info: any) {
    this.createdAt = info.createdAt;
    this.updatedAt = info.updatedAt;
    this.id = info.id;
    this.name = info.name;
    this.defaultPriceInCents = info.defaultPriceInCents;
    this.msrpInCents = info.msrpInCents;
    this.subscriptionPrice = info.subscriptionPrice;
    this.ordinal = info.ordinal;
    this.mainImage = info.mainImage;
    this.cost = info.cost;
    this.maxPrice = info.maxPrice;
    this.minPrice = info.minPrice;
  }

}

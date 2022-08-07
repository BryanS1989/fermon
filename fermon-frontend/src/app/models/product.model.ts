export class Product {
  public id : number;
  public name : string;
  public shortDescription : string;
  public price : number;
  public currency : string;
  public category : number[];
  public brandId : number;

  constructor (
    id : number,
    name : string,
    shortDescription : string,
    price : number,
    currency : string,
    category : number[],
    brandId : number
  ) {
    this.id = id;
    this.name = name;
    this.shortDescription = shortDescription;
    this.price = price;
    this.currency = currency;
    this.category = category;
    this.brandId = brandId;
  }
}

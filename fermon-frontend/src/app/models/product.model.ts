export class Product {
  public id : number = -1;
  public reference : string;
  public name : string;
  public shortDescription : string;
  public price : number;
  public currency : string;
  public category : number[];
  public brandId : number;
  public image : string;
  public rate : number = 0;

  constructor (
  ) {
    this.reference = "";
    this.name = "";
    this.shortDescription = "";
    this.price = 0;
    this.currency = "euro";
    this.category = [0];
    this.brandId = 0;
    this.image = "";
    this.rate = 0;
  }
}

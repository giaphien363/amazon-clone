export class Product {

    public id: Number;
    public title: String;
    public price: number;
    public rating: Number;
    public image: String;

    constructor(id: Number, title: String, price: number, rating: Number, image: String) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.image = image;
    }

}
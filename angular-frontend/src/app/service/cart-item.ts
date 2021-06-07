import { FoodItem } from "../common/food-item";

export class CartItem  {

    id: number;
    name: string;
    foodGroup: string;
    price: number;
    imgUrl: string;

    quantity: number;

constructor(fooditem: FoodItem) {
    this.id = fooditem.id;
    this.name = fooditem.name;
    this.foodGroup = fooditem.foodGroup;
    this.price = fooditem.price;
    this.imgUrl = fooditem.imgUrl;

    this.quantity = 1;

}
}

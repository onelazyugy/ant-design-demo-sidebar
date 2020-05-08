export interface PizzaImage {
    initialPizzaImage: string;
    endPizzaImage: string;
}

export interface PizzaSize {
    isSelected: boolean;
    value: string;
    label: string;
    id: number;
}

export class Pizza {
    id: number;
    size: PizzaSize[];
    price: number;
    typeOfImage: PizzaImage;

    constructor(id: number, size: PizzaSize[], price: number, typeOfImage: PizzaImage){
        this.id = id; this.size = size; this.price = price; this.typeOfImage = typeOfImage;
    }
}

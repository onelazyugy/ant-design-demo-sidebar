export class OrderSummary {
    totalSelectedMeatTopping: number;
    totalCostForSelectedMeatTopping: number;
    totalSelectedVeggieTopping: number;
    totalCostForSelectedVeggieTopping: number;
    totalSelectedCheeseTopping: number;
    totalCostForSelectedCheeseTopping: number;
    pizzaBasePrice: number;
    pizzaSize: string;
    subtotal: number;
    taxPercent: string;
    totalTax: number;
    totalDue: number;
    deliveryType: string;
}
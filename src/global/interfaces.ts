export interface IFoodPlate {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export type IOperationFoodData = Omit<IFoodPlate, 'id' | 'available'>
import { carData } from "../../../data/fake";
import { update, asyncUpdate, asyncAction } from "reduxigen/actions";
import addCarDetails from "./add-car-details";

export const setSelectedCar = update("selectedVehicle");

export const getCars = asyncAction(
  "cars",
  addCarDetails,
  query => new Promise(resolve => setTimeout(() => resolve(carData(query.max)), 3200))
);

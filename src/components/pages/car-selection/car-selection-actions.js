import { jobData } from "../../../data/fake";
import { update, asyncUpdate } from "simpl-r";

export const setCars = cars => update("cars", cars);

const fetchCars = asyncUpdate(
  amount => new Promise(resolve => setTimeout(() => resolve(jobData(amount)), 3200))
);
export const getCars = query => fetchCars("cars", query);

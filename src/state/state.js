import tripDetails from "./trip-details";
import carDetails from "./cars";
import passengerDetails from './passenger-details'

export default {
  ...tripDetails,
  ...carDetails,
  ...passengerDetails
};

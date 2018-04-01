import tripDetails from "./trip-details";
import carDetails from "./cars";
import passengerDetails from "./passenger-details";
import rideDetails from "./ride-details";

export default {
  ...tripDetails,
  ...carDetails,
  ...passengerDetails,
  ...rideDetails
};

import { action } from "src/actions/action-creators";
import retry from "utils/retry";

// Action names
export const SET_CARS = "SET_CARS";

// Named action methods
export const setCars = cars => action(SET_CARS, cars);

export const getCars = carQuery => dispatch => {
  retry(async function findCars() {
    const response = await fetch("https://raw.githubusercontent.com/joe-crick/book-my-hooptie/master/fixtures/cars.json");
    const data = await response.json();
    dispatch(setCars(data));
  });
};

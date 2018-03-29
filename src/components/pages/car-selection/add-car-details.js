const carImages = ["chrysler-turismo.jpg", "lebaron-purple.jpg", "e-class.png"];

const carTypes = ["Standard", "Business", "Luxury"];

const carPrices = ["100", "150", "200"];

export default carSet => {
  return carSet.map((car, index) => {
    car.image = carImages[index];
    car.type = carTypes[index];
    car.price = carPrices[index];
    return car;
  });
};
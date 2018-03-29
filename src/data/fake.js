import faker from "faker";
import _ from "lodash";

export const carData = num =>
  _.times(num, id => {
    return {
      id,
      companyName: faker.company.companyName(),
      companyLogo:
        "https://d3ey1qdi6d5u1h.cloudfront.net/images/5fa6176a-7887-4af3-9815-e59eff8c73f7/d5cfaddd-d305-45fb-b925-dc67782ee8c9.png",
      description: faker.lorem.sentence(),
      passengers: faker.random.number(),
      luggage: faker.random.number()
    };
  });

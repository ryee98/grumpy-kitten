export const typeDefs = `
  type Query {
    message: String
    favoriteNumber: Int
    color(colorId: ID) : Color
    colors: [Color]
    cars: [Car]
    car(carId: ID) : Car
  }

  type Mutation {
    appendColor(color: AppendColor): Color
    appendCar(car: AppendCar): Car
    deleteCar(carId: ID): Car
    updateCar(car: ReplaceCar): Car
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }

  input AppendColor {
    name: String
    hexcode: String
  }

  input AppendCar {
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

  input ReplaceCar {
    id: ID
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

  type Car {
    id: ID
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }
`;

import { useState } from "react";
import { addCar } from "../api";

const CarForm = ({ setCars }) => {

const initValue = {
    model: "",
    manufacturer: "",
    year: "",
  }

  const [car, setCar] = useState(initValue);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addedCar = await addCar(car);
      setCars((prevCars) => [...prevCars, addedCar]);
      setCar(initValue);
    } catch (error) {
      console.error(`Error adding car: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Model:</label>
        <input
          type="text"
          name="model"
          value={car.model}
          onChange={handleChange}
          placeholder="enter model"
          required
        />
      </div>
      <div>
        <label>Manufacturer:</label>
        <input
          type="text"
          name="manufacturer"
          value={car.manufacturer}
          onChange={handleChange}
          placeholder="input manufacturer"
          required
        />
      </div>
      <div>
        <label>Year:</label>
        <input
          type="text"
          value={car.year}
          name="year"
          onChange={handleChange}
          placeholder="input year"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default CarForm;

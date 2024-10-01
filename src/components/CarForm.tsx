import React, { useState, FC, Dispatch, SetStateAction, ChangeEvent, FormEvent } from "react";
import { addCar, NewCar } from "../api.ts";
import { Car } from "../App";

interface CarFormProps {
  setCars: Dispatch<SetStateAction<Car[]>>;
}

const CarForm: FC<CarFormProps> = ({ setCars }) => {
  const initValue: NewCar = {
    model: "",
    manufacturer: "",
    year: 0,
    status: "Available",
  };

  const [car, setCar] = useState<NewCar>(initValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const addedCar: Car = await addCar(car);
      setCars((prevCars) => [...prevCars, addedCar]);
      setCar(initValue);
    } catch (error) {
      console.error(`Error adding car: ${error}`);
    }
  };

  return (
    <form className="container form" onSubmit={handleSubmit}>
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
      <div>
        <button className="Button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default CarForm;

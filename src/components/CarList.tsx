import React, { Dispatch, SetStateAction } from "react";
import { deleteCar } from "../api.ts";
import { Car } from "./Home.tsx";
import { useNavigate } from "react-router-dom";

interface CarListProps {
  cars: Car[];
  filter: string;
  setCars: Dispatch<SetStateAction<Car[]>>;
}

const CarList: React.FC<CarListProps> = ({ cars, filter, setCars }) => {
  const navigate = useNavigate();

  const filteredCars = cars.filter((car) =>
    car.model.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    try {
      await deleteCar(id);
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (error) {
      console.error(`Error deleting car: ${error}`);
    }
  };

  const handleCarDetails = (id: number) => {
    navigate(`/cars/${id}`, { state: cars[id-1]} );
  };

  return (
    <div>
      <ul>
        {filteredCars.map((car) => (
          <li
            key={car.id}
            className="container"
            onClick={() => handleCarDetails(car.id)}
          >
            {car.model}-{car.manufacturer}-{car.year}-{car.status}
            <button className="Button" onClick={(e) => handleDelete(e, car.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;

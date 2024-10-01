import React, {Dispatch, SetStateAction} from 'react';
import { deleteCar } from '../api.ts';
import { Car } from '../App';

interface CarListProps {
  cars: Car[],
  filter: string,
  setCars: Dispatch<SetStateAction<Car[]>>;
}

const CarList: React.FC<CarListProps> = ({ cars, filter, setCars }) => {
  const filteredCars = cars.filter((car) =>
    car.model.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = async (id: number) => {
    try {
      await deleteCar(id);
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (error) {
      console.error(`Error deleting car: ${error}`);
    }
  };

  return (
    <div>
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id} className="container">
            {car.model}-{car.manufacturer}-{car.year}-{car.status}
            <button className="Button" onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;

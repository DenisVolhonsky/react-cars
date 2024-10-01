import { deleteCar } from '../api';

const CarList = ({ cars, filter, setCars }) => {
  const filteredCars = cars.filter((car) =>
    car.model.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = async (id) => {
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
          <li key={car.id}>
            {car.model}-{car.manufacturer}-{car.year}-{car.status}
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;

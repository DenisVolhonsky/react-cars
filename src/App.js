import { useState, useEffect } from "react";
import FilterPanel from "./components/FilterPanel";
import CarList from "./components/CarList";
import Pagination from "./components/Pagination";
import CarForm from "./components/CarForm";
import { fetchCars } from "./api";

function App() {
  const [cars, setCars] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCars(currentPage);
        setCars(data.items);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error(`Error car fetching, ${error}`);
      }
    };
    fetchData(); // get initial data
    const interval = setInterval(fetchData, 20000);

    return () => {
      clearInterval(interval);
    };
  }, [currentPage]);

  console.log(cars);

  return (
    <div>
      <header>Car rental</header>
      <FilterPanel setFilter={setFilter} />
      <CarList cars={cars} filter={filter} setCars={setCars} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <CarForm setCars={setCars} />
    </div>
  );
}

export default App;

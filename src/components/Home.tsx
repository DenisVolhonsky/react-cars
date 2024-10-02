import React, { useState, useEffect, FC } from "react";
import FilterPanel from "./FilterPanel.tsx";
import CarList from "./CarList.tsx";
import Pagination from "./Pagination.tsx";
import CarForm from "./CarForm.tsx";
import { fetchCars } from "../api.ts";

export interface Car {
  id: number;
  model: string;
  manufacturer: string;
  year: number;
  status?: string;
}

const Home: FC = () => {
  const [cars, setCars] = useState<Car[] | []>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("");

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
      <div className="wrapper">
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
};

export default Home;

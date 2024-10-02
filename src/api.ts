import axios from "axios";
import { Car } from "./components/Home";

export const API_URL = "http://localhost:5001";

interface FetchCarsResponse {
  items: Car[];
  totalPages: number;
}

export interface NewCar {
  model: string;
  manufacturer: string;
  year: number;
  status?: string;
}

export const fetchCars = async (page: number): Promise<FetchCarsResponse> => {
  try {
    const token = localStorage.getItem("token"); // Получаем токен из localStorage
    const response = await axios.get(`${API_URL}/cars`, {
      params: { _page: page, _limit: 10 },
      headers: {
        Authorization: `Bearer ${token}`, // Добавляем токен в заголовки
      },
    });

    const items = response.data;
    const totalItems = response.headers["x-total-count"];
    const totalPages = Math.ceil(totalItems / 10);
    return { items, totalPages };
  } catch (error) {
    console.error(`Error fetching cars: ${error}`);
    throw error;
  }
};

export const addCar = async (newCar: NewCar): Promise<Car> => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/cars`, newCar, {
      headers: {
        "Conent-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error adding car: ${error}`);
    throw error;
  }
};

export const deleteCar = async (id: number): Promise<void> => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${API_URL}/cars/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(`Error deleting car: ${error}`);
    throw error;
  }
};

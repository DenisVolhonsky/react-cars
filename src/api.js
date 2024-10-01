import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchCars = async (page) => {
  try {
    const response = await axios.get(`${API_URL}/cars`, {
      params: { _page: page, _limit: 10 },
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

export const addCar = async (newCar) => {
  try {
    const response = await axios.post(`${API_URL}/cars`, newCar, {
      headers: { 'Conent-type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.error(`Error adding car: ${error}`);
    throw error;
  }
};

export const deleteCar = async (id) => {
  try {
    await axios.delete(`${API_URL}/cars/${id}`);
  } catch (error) {
    console.error(`Error deleting car: ${error}`);
    throw error;
  }
};

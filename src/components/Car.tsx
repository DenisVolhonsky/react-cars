import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Car: React.FC = () => {
  const { state } = useLocation();
  const { id } = useParams();
  return <div>Car id: {id} - {state.model}</div>;
};

export default Car;

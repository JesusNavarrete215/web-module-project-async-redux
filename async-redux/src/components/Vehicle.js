import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVehicle } from "../actions/index";

const Vehicle = (props) => {
  const { vehicle, isFetching, error, getVehicle } = props;
  //undefined getVehicle, error, isFetching

  useEffect(() => {
    props.getVehicle();
  }, []);

  if (error) {
    return <h2>We got an error:</h2>;
  }

  if (isFetching) {
    return <h2>Obtaining New Car 🚗</h2>;
  }

  const handleSubmit = () => {
    //getting issues keeps breaking when i click
    props.dispatch(getVehicle());
  };

  return (
    <>
      <div>
        <h2>Vehicle: {vehicle.make_and_model}</h2>
        <p>Color: {vehicle.color} </p>
        <p>Drive Type: {vehicle.drive_type}</p>
        <p>Type: {vehicle.car_type}</p>
        <p>Doors: {vehicle.doors}</p>
        <button onClick={handleSubmit}>New Car</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    vehicle: state.vehicle,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getVehicle })(Vehicle);

import PropTypes from "prop-types";

function CarDetails({ car }) {
  return (
    <div >
      <h2 className="text-lg font-semibold">{car.title}</h2>
      <p className="text-sm text-black-500">
        <span className="font-bold">Brand:</span> {car.brand}
      </p>
      <p className="text-sm text-black-500">
        <span className="font-bold">Year:</span> {car.year}
      </p>
      <p className="text-sm text-black-500">
        <span className="font-bold">Price:</span> ${car.price.toLocaleString()}
      </p>
      <p className="text-sm text-black-500">
        <span className="font-bold">Premium:</span> {car.isPremium ? "Yes" : "No"}
      </p>
    </div>
  );
}

CarDetails.propTypes = {
  car: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CarDetails;

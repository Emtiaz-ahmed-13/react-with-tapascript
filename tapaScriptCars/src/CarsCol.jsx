import PropTypes from "prop-types";
import CarDetails from "./CarDetails";

function CarCols({ searchTerm, cars, showPremium }) {
    const carResults = cars.filter((car) => {
        if (car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
            return false;
        }
        if (showPremium && !car.isPremium) {
            return false;
        }

        return true;
    }).map(car => <CarDetails key={car.id} car={car} />);

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
            {carResults}
        </div>
    );
}

CarCols.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    cars: PropTypes.array.isRequired,
    showPremium: PropTypes.bool.isRequired,
};

export default CarCols;

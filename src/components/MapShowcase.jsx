import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MapShowcase({ map }) {
    return (
        <div className="MapShowcase">
            <h1>{map.name}</h1>
            <Link className="map-link" to={"/wheres-waldo/maps/" + map._id}>
                <img className="map-img" src={map.imgUrl} alt={map.name} />
            </Link>
        </div>
    );
}

MapShowcase.propTypes = {
    map: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
};

export default MapShowcase;

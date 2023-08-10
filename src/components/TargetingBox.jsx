import PropTypes from "prop-types";
import { useState } from "react";

function TargetingBox({ xPercent, yPercent, widthPercent, heightPercent, onClick }) {
    const width = `${widthPercent * 100}%`;
    const height = `${heightPercent * 100}%`;
    const top = `${(yPercent - heightPercent / 2) * 100}%`;
    const left = `${(xPercent - widthPercent / 2) * 100}%`;

    const [found, setFound] = useState(false);

    function handleClick() {
        onClick();
        setFound(true);
    }

    return (
        <button
            className={`TargetingBox${found ? " TargetingBoxFound" : ""}`}
            style={{ width, height, top, left }}
            onClick={handleClick}
        ></button>
    );
}

TargetingBox.propTypes = {
    xPercent: PropTypes.number.isRequired,
    yPercent: PropTypes.number.isRequired,
    widthPercent: PropTypes.number.isRequired,
    heightPercent: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TargetingBox;

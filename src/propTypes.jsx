import PropTypes from "prop-types";

export const characterPropType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
});

export const scorePropType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    playerName: PropTypes.string.isRequired,
    seconds: PropTypes.number.isRequired,
});

export const mapPropType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(characterPropType).isRequired,
    scores: PropTypes.arrayOf(scorePropType).isRequired,
});

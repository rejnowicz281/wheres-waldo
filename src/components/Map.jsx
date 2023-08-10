import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { mapPropType } from "../propTypes";
import TargetingBox from "./TargetingBox";

function Map({ map, findCharacter }) {
    const [originalWidth, setOriginalWidth] = useState(0); // Original width of map image
    const [originalHeight, setOriginalHeight] = useState(0); // Original height of map image

    useEffect(() => {
        const realImg = new Image();

        realImg.src = map.imgUrl;
        realImg.onload = () => {
            setOriginalWidth(realImg.width);
            setOriginalHeight(realImg.height);
        }; // Get image's original width and height before it gets resized by CSS
    }, []);

    if (map) {
        return (
            <div className="Map">
                <img className="map-img" src={map.imgUrl} alt={map.name} />
                {map.characters.map((character) => {
                    return (
                        <TargetingBox
                            key={character._id}
                            xPercent={character.x / originalWidth}
                            yPercent={character.y / originalHeight}
                            widthPercent={100 / originalWidth}
                            heightPercent={100 / originalHeight}
                            onClick={() => findCharacter(character.name)}
                        />
                    );
                })}
            </div>
        );
    }
}

Map.propTypes = {
    map: mapPropType.isRequired,
    findCharacter: PropTypes.func.isRequired,
};

export default Map;

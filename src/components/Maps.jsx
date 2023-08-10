import { useEffect, useState } from "react";
import { getMaps } from "../../helpers/API";
import images from "../assets";
import MapShowcase from "./MapShowcase";

function Maps() {
    const [maps, setMaps] = useState(null);

    useEffect(() => {
        getMaps()
            .then((res) => {
                const maps = res.data;

                maps.map((map) => (map.imgUrl = images[map.imgName]));

                setMaps(maps);
            })
            .catch((err) => console.log(err));
    }, []);

    if (maps) {
        return (
            <div className="Maps">
                {maps.map((map) => {
                    return <MapShowcase key={map._id} map={map} />;
                })}
            </div>
        );
    }
}

export default Maps;

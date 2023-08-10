import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getMap } from "../../helpers/API";
import { secondsToTime } from "../../helpers/utils";
import images from "../assets";
import CharactersFound from "./CharactersFound";
import Map from "./Map";
import PlayEnd from "./PlayEnd";

function MapPlay() {
    const { id } = useParams();
    const [map, setMap] = useState(null);
    const [charactersFound, setCharactersFound] = useState([]);
    const [timer, setTimer] = useState(0);
    let timerInterval = useRef(null);

    useEffect(() => {
        getMap(id)
            .then((res) => {
                const map = res.data.map;

                map.imgUrl = images[map.imgName];

                setMap(map);
            })
            .catch((error) => console.log(error));
    }, []);

    function setFound(characterName) {
        setCharactersFound([...charactersFound, characterName]);
    }

    function stopTimer() {
        clearInterval(timerInterval.current);
    }

    function findCharacter(characterName) {
        if (!isCharacterFound(characterName)) {
            setFound(characterName);
        }
    }

    function isCharacterFound(characterName) {
        return charactersFound.some((characterFound) => characterFound == characterName);
    }

    function hasFoundAll() {
        return map.characters.every((character) => isCharacterFound(character.name));
    }

    if (map) {
        return (
            <div className="MapPlay">
                {!hasFoundAll() && <h2>Time: {secondsToTime(timer)}</h2>}
                <h1>{map.name}</h1>
                {hasFoundAll() && (
                    <>
                        {stopTimer()}
                        <PlayEnd mapId={map._id} scores={map.scores} seconds={timer} />
                    </>
                )}
                <CharactersFound characters={map.characters} isCharacterFound={isCharacterFound} />
                <Map map={map} findCharacter={findCharacter} />
            </div>
        );
    }
}

export default MapPlay;

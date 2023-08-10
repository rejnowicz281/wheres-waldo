import PropTypes from "prop-types";
import { characterPropType } from "../propTypes";

function CharactersFound({ characters, isCharacterFound }) {
    return (
        <div className="CharactersFound">
            {characters.map((character) => (
                <div
                    key={character._id}
                    className={`character${isCharacterFound(character.name) ? " characterFound" : ""}`}
                >
                    <p>{character.name}</p>
                </div>
            ))}
        </div>
    );
}

CharactersFound.propTypes = {
    characters: PropTypes.arrayOf(characterPropType).isRequired,
    isCharacterFound: PropTypes.func.isRequired,
};

export default CharactersFound;

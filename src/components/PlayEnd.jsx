import PropTypes from "prop-types";
import { useState } from "react";
import { secondsToTime } from "../../helpers/utils";
import { scorePropType } from "../propTypes";
import Leaderboard from "./Leaderboard";
import ScoreSender from "./ScoreSender";

function PlayEnd({ mapId, scores, seconds }) {
    const [scoreIsSent, setscoreIsSent] = useState(false);

    return (
        <div className="PlayEnd">
            <h2>You found everyone in {secondsToTime(seconds)}!</h2>
            <ScoreSender mapId={mapId} seconds={seconds} scoreIsSent={scoreIsSent} setscoreIsSent={setscoreIsSent} />
            {scores.length > 0 && (
                <Leaderboard mapId={mapId} scoreAchieved={seconds} initialScores={scores} scoreIsSent={scoreIsSent} />
            )}
        </div>
    );
}

PlayEnd.propTypes = {
    mapId: PropTypes.string.isRequired,
    scores: PropTypes.arrayOf(scorePropType),
    seconds: PropTypes.number.isRequired,
};

export default PlayEnd;

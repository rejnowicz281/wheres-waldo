import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getScores } from "../../helpers/API";
import { secondsToTime } from "../../helpers/utils";
import { scorePropType } from "../propTypes";

function Leaderboard({ mapId, initialScores, scoreIsSent }) {
    const [scores, setScores] = useState(initialScores);

    useEffect(() => {
        if (scoreIsSent) {
            getScores(mapId).then((res) => {
                setScores(res.data.scores);
            });
        }
    }, [scoreIsSent]);

    return (
        <div className="Leaderboard">
            <h3 className="text-center">Leaderboard: </h3>
            <ol className="leaderboard-list">
                {scores.length === 0 && <li className="no-marker">No scores yet</li>}
                {scores.slice(0, 3).map((score) => (
                    <li key={score._id}>
                        {score.playerName} - {secondsToTime(score.seconds)}
                    </li>
                ))}
            </ol>
        </div>
    );
}

Leaderboard.propTypes = {
    mapId: PropTypes.string.isRequired,
    initialScores: PropTypes.arrayOf(scorePropType),
    scoreIsSent: PropTypes.bool.isRequired,
};

export default Leaderboard;

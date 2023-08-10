import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getScores } from "../../helpers/API";
import { secondsToTime } from "../../helpers/utils";
import { scorePropType } from "../propTypes";

function Leaderboard({ mapId, initialScores, scoreAchieved, scoreIsSent }) {
    const [scores, setScores] = useState(initialScores);

    useEffect(() => {
        if (scoreIsSent && scores.length > 2 && scoreAchieved < scores[2].seconds) {
            getScores(mapId).then((res) => {
                setScores(res.data.scores);
            });
        }
    }, [scoreIsSent]);

    return (
        <div className="Leaderboard">
            <h3 className="text-center">Leaderboard: </h3>
            <ol className="leaderboard-list">
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
    scoreAchieved: PropTypes.number.isRequired,
    scoreIsSent: PropTypes.bool.isRequired,
};

export default Leaderboard;

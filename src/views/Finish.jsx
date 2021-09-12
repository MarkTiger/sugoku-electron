import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Finish() {
  const { name, playTime, difficulty } = useSelector(
    ({ name, playTime, difficulty }) => {
      return { name, playTime, difficulty };
    }
  );
  const [time] = useState(Math.floor((Date.now() - playTime) / 1000));

  useEffect(() => {
    const player = {
      name,
      time,
    };

    if (localStorage[difficulty]) {
      let leaderboard = JSON.parse(localStorage[difficulty]);
      leaderboard.push(player);
      leaderboard.sort((a, b) => a.time - b.time);
      localStorage[difficulty] = JSON.stringify(leaderboard);
    } else {
      localStorage[difficulty] = JSON.stringify([player]);
    }
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-light h-100">
      <h3>Congratulations,</h3>
      <h3>{name}!</h3>
      <h6 className="bg-success text-light p-2 rounded">
        Solved in {time} seconds
      </h6>
      <div className="d-flex flex-column w-25">
        <Link className="btn custom-bg-light mb-3" replace to="/">
          Play again
        </Link>
        <Link className="btn custom-bg-light" replace to="/leaderboard">
          Leaderboard
        </Link>
      </div>
    </div>
  );
}

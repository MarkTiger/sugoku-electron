import React from 'react';
import Player from '../components/Player';

export default function Leaderboard() {
  return (
    <div className="d-flex flex-column align-items-center p-3 text-light custom-height overflow-auto">
      <h2>Leaderboard</h2>
      <h5 className="custom-bg-light text-dark p-1 rounded w-100 text-center">
        Easy
      </h5>
      {localStorage.easy
        ? JSON.parse(localStorage.easy).map((player, i) => {
            return <Player key={'player-easy-' + i} player={player} />;
          })
        : null}
      <h5 className="custom-bg-light text-dark p-1 rounded w-100 text-center">
        Medium
      </h5>
      {localStorage.medium
        ? JSON.parse(localStorage.medium).map((player, i) => {
            return <Player key={'player-medium-' + i} player={player} />;
          })
        : null}
      <h5 className="custom-bg-light text-dark p-1 rounded w-100 text-center">
        Hard
      </h5>
      {localStorage.hard
        ? JSON.parse(localStorage.hard).map((player, i) => {
            return <Player key={'player-hard-' + i} player={player} />;
          })
        : null}
    </div>
  );
}

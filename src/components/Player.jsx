import React from 'react';

export default function Player({ player }) {
  return (
    <div className="d-flex justify-content-between bg-dark p-2 rounded w-100 mb-3">
      <span>{player.name}</span>
      <span>{player.time} seconds</span>
    </div>
  );
}

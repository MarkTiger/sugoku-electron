import React from 'react';
import Col from './Col';

export default function Row({ data, row }) {
  return (
    <div
      className="d-flex flex-row flex-wrap w-100"
      style={{ height: '11.1%' }}
    >
      {data.map((col, i) => {
        return <Col key={'board-col-' + i} data={col} row={row} col={i} />;
      })}
    </div>
  );
}

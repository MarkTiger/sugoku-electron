import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fillSugoku } from '../store/action';

export default function Col({ data, row, col }) {
  const { initialSugoku } = useSelector(({ initialSugoku }) => {
    return {
      initialSugoku,
    };
  });

  const dispatch = useDispatch();

  const getStyle = () => {
    if (
      (row === 2 && col === 2) ||
      (row === 2 && col === 5) ||
      (row === 5 && col === 2) ||
      (row === 5 && col === 5)
    ) {
      return 'colXY';
    } else if (col === 2 || col === 5) {
      return 'colY';
    } else if (row === 2 || row === 5) {
      return 'colX';
    } else {
      return 'col';
    }
  };

  const getValue = (value) => {
    if (Number(value) && !isNaN(Number(value)) && String(value).length === 1) {
      return value;
    } else {
      return '';
    }
  };

  const handleChange = (e) => {
    dispatch(fillSugoku(row, col, Number(e.currentTarget.value)));
  };

  return (
    <input
      type="text"
      value={getValue(data)}
      onChange={handleChange}
      disabled={initialSugoku.board[row][col] ? true : false}
      className={`${getStyle()} ${
        initialSugoku.board[row][col] ? '' : 'text-light bg-success'
      }`}
    />
  );
}

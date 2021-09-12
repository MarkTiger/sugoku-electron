import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Row from '../components/Row';
import {
  fetchSugoku,
  setPlayTime,
  setStatus,
  solveSugoku,
  submitSugoku,
} from '../store/action';

export default function Game() {
  const { sugoku, isLoading, status } = useSelector(
    ({ sugoku, isLoading, status }) => {
      return {
        sugoku,
        isLoading,
        status,
      };
    }
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchSugoku());
    dispatch(setPlayTime(Date.now()));
  }, [dispatch]);

  useEffect(() => {
    if (status === 'solved') {
      dispatch(setStatus(''));
      history.replace('/finish');
    }
  }, [status, dispatch, history]);

  const handleSolve = () => {
    dispatch(solveSugoku());
  };

  const handleValidate = () => {
    dispatch(submitSugoku());
  };

  if (isLoading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-light h-100">
        Loading...
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-light h-100">
        <h3 className="text-capitalize">{status}</h3>
        <div className="d-flex flex-column flex-wrap board">
          {sugoku.board?.map((row, i) => {
            return <Row key={'board-row-' + i} data={row} row={i} />;
          })}
        </div>
        <div className="d-flex mt-3">
          <button onClick={handleSolve} className="btn custom-bg-light me-3">
            Solve
          </button>
          <button onClick={handleValidate} className="btn custom-bg-light">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

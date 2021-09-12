import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setReduxDifficulty, setReduxName, setStatus } from '../store/action';

export default function Main() {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [warning, setWarning] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setReduxName(name));
  }, [name, dispatch]);

  useEffect(() => {
    dispatch(setReduxDifficulty(difficulty));
  }, [difficulty, dispatch]);

  useEffect(() => {
    dispatch(setStatus(''));
  }, [dispatch]);

  const handleName = (e) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };

  const handleDifficulty = (e) => {
    e.preventDefault();
    setDifficulty(e.currentTarget.value);
  };

  const handlePlay = () => {
    if (name) {
      history.replace('/game');
    } else {
      setWarning('Please set player name');
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-light h-100">
      <h1>Let's Play!</h1>
      <div className="w-50 d-flex flex-column align-items-center">
        <input
          value={name}
          onChange={handleName}
          type="text"
          className="input-name text-center mb-3"
          placeholder="Set player name"
        />
        <select
          value={difficulty}
          onChange={handleDifficulty}
          className="form-select w-50"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button onClick={handlePlay} className="btn custom-bg-light w-50 my-3">
          <i className="bi bi-play-fill"></i>Play
        </button>
        <h5 className="text-warning">{warning}</h5>
      </div>
    </div>
  );
}

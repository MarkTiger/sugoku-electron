import { encodeParams } from '../helpers/urlencoded';
import {
  DIFFICULTY_SET,
  INITIALSUGOKU_SET,
  ISLOADING_SET,
  NAME_SET,
  PLAYTIME_SET,
  STATUS_SET,
  SUGOKU_SET,
} from './actionType';

const baseUrl = 'https://sugoku.herokuapp.com';

export function setSugoku(sugoku) {
  return {
    type: SUGOKU_SET,
    payload: sugoku,
  };
}

export function setInitialSugoku(sugoku) {
  return {
    type: INITIALSUGOKU_SET,
    payload: sugoku,
  };
}

export function setIsLoading(bool) {
  return {
    type: ISLOADING_SET,
    payload: bool,
  };
}

export function setReduxName(name) {
  return {
    type: NAME_SET,
    payload: name,
  };
}

export function setReduxDifficulty(difficulty) {
  return {
    type: DIFFICULTY_SET,
    payload: difficulty,
  };
}

export function setStatus(status) {
  return {
    type: STATUS_SET,
    payload: status,
  };
}

export function setPlayTime(time) {
  return {
    type: PLAYTIME_SET,
    payload: time,
  };
}

export function fetchSugoku() {
  return async function (dispatch, getState) {
    try {
      dispatch(setIsLoading(true));
      const { difficulty } = getState();
      const response = await fetch(baseUrl + '/board?difficulty=' + difficulty);
      const data = await response.json();
      dispatch(setSugoku(data));
      dispatch(setInitialSugoku(data));
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
}

export function fillSugoku(row, col, value) {
  return function (dispatch, getState) {
    const { sugoku } = getState();
    const newSugoku = {
      board: sugoku.board.map((grd) => {
        return grd.map((cl) => cl);
      }),
    };

    newSugoku.board[row][col] = value;
    dispatch(setSugoku(newSugoku));
  };
}

export function solveSugoku() {
  return async function (dispatch, getState) {
    try {
      const { initialSugoku } = getState();
      const response = await fetch('https://sugoku.herokuapp.com/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeParams(initialSugoku),
      });
      const data = await response.json();
      dispatch(
        setSugoku({
          board: data.solution,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
}

export function submitSugoku() {
  return async function (dispatch, getState) {
    try {
      const { sugoku } = getState();
      const response = await fetch('https://sugoku.herokuapp.com/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeParams(sugoku),
      });
      const data = await response.json();
      dispatch(setStatus(data.status));
    } catch (err) {
      console.log(err);
    }
  };
}

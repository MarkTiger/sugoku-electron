import {
  DIFFICULTY_SET,
  INITIALSUGOKU_SET,
  ISLOADING_SET,
  NAME_SET,
  PLAYTIME_SET,
  STATUS_SET,
  SUGOKU_SET,
} from './actionType';

const initialState = {
  sugoku: {},
  initialSugoku: {},
  isLoading: false,
  name: '',
  difficulty: '',
  status: '',
  playTime: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SUGOKU_SET:
      return {
        ...state,
        sugoku: action.payload,
      };
    case INITIALSUGOKU_SET:
      return {
        ...state,
        initialSugoku: action.payload,
      };
    case ISLOADING_SET:
      return {
        ...state,
        isLoading: action.payload,
      };
    case NAME_SET:
      return {
        ...state,
        name: action.payload,
      };
    case DIFFICULTY_SET:
      return {
        ...state,
        difficulty: action.payload,
      };
    case STATUS_SET:
      return {
        ...state,
        status: action.payload,
      };
    case PLAYTIME_SET:
      return {
        ...state,
        playTime: action.payload,
      };
    default:
      return state;
  }
}

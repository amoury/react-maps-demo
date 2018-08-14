export const FETCH_SPACES = 'FETCH_SPACES';
export const CREATE_SPACE = 'CREATE_SPACE';


export const fetchSpaces = spaces => ({
  type: FETCH_SPACES,
  payload: spaces
});

export const createSpace = space => ({
  type: CREATE_SPACE,
  payload: space
});
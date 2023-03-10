export const FILL_USERS = 'USERS/FILL_USERS';
export const PREV_PAGE = 'USERS/PREV_PAGE';
export const NEXT_PAGE = 'USERS/NEXT_PAGE';

export const fillUsers = (userData) => {
  return {
    type: FILL_USERS,
    payload: { userData },
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const getCenterDetail = payload => ({
  type: 'GET_CENTER_DETAIL',
  payload,
});

export const getFilteredCenters = payload => ({
  type: 'FILTER_CENTERS',
  payload,
});

export const getAllCenters = payload => ({
  type: 'GET_ALL_CENTERS',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

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

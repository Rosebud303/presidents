export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  isLoading: boolean
});

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
});

export const setPresidents = (presidents) => ({
  type: 'SET_PRESIDENTS',
  presidents
});

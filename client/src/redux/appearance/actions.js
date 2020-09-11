// action types
export const SET_SHOW_MODAL_PERSON = 'SET_SHOW_MODAL_PERSON';
export const SET_TYPE_MODAL_PERSON = 'SET_TYPE_MODAL_PERSON';
export const SET_SHOW_MODAL_STATUS = 'SET_SHOW_MODAL_STATUS';

// action creators
export const setShowModalPerson = (isShownPersonModal) => ({
  type: SET_SHOW_MODAL_PERSON,
  isShownPersonModal
});

export const setTypeModalPerson = (personModalType) => ({
  type: SET_TYPE_MODAL_PERSON,
  personModalType
});

export const setShowModalStatus = (isShownStatusModal) => ({
  type: SET_SHOW_MODAL_STATUS,
  isShownStatusModal
});

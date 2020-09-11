import { SET_SHOW_MODAL_PERSON, SET_TYPE_MODAL_PERSON,
  SET_SHOW_MODAL_STATUS } from './actions';

const initialAppearance = {
  isShownPersonModal: false,
  personModalType: 'create',
  isShownStatusModal: false
};

const appearance = (state = initialAppearance, action) => {
  const {type, isShownPersonModal, personModalType, 
    isShownStatusModal } = action;
  switch (type) {
    case SET_SHOW_MODAL_PERSON:
      return {...state, isShownPersonModal};
    case SET_TYPE_MODAL_PERSON:
      return {...state, personModalType};
    case SET_SHOW_MODAL_STATUS:
      return {...state, isShownStatusModal};
    default:
      return state;
  }
};

export default appearance;
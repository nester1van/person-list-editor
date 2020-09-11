import { SET_SHOW_MODAL_PERSON, SET_TYPE_MODAL_PERSON } from './actions';

const initialAppearance = {
  isShownPersonModal: false,
  personModalType: 'create'
};

const appearance = (state = initialAppearance, action) => {
  const {type, isShownPersonModal, personModalType } = action;
  switch (type) {
    case SET_SHOW_MODAL_PERSON:
      return {...state, isShownPersonModal};
    case SET_TYPE_MODAL_PERSON:
      return {...state, personModalType};
    default:
      return state;
  }
};

export default appearance;
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setShowModalStatus } from '../../redux/appearance/actions';
import statusMessage from './statusMessage';
import './statusModal.css';

const StatusModal = ({ isShownStatusModal, status, setShowModalStatus }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModalStatus(false);
    }, 1500);
  }, [isShownStatusModal]);

  const isShown = () => isShownStatusModal ? 'status-modal_is-shown' : '';
  const theme = () => (statusMessage[status].theme === 'success') ? 
    ' status-modal_success' : ' status-modal_danger';

  return (
    <div className={'status-modal ' + isShown() + theme()}>
      {statusMessage[status].message}
    </div>
  )
};

const mapStateToProps = (state) => ({
  isShownStatusModal: state.appearance.isShownStatusModal,
  status: state.persons.status
});

export default connect(mapStateToProps, {setShowModalStatus})(StatusModal);
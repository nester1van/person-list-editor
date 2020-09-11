import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setShowModalStatus } from '../../redux/appearance/actions';
import statusMessage from './statusMessage';
import './statusModal.css';

const StatusModal = ({ isShownStatusModal, status, setShowModalStatus }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModalStatus(false);
    }, 1000);
  }, [isShownStatusModal])

  const isShown = () => isShownStatusModal ? 'status-modal_is-shown' : '';

  return (
    <div className={'status-modal ' + isShown()}>
      {statusMessage[status]}
    </div>
  )
};

const mapStateToProps = (state) => ({
  isShownStatusModal: state.appearance.isShownStatusModal,
  status: state.persons.status
});

export default connect(mapStateToProps, {setShowModalStatus})(StatusModal);
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditProfileModalContainer from './edit_profile_modal_container';
import './modal.css'
import CarouselModal from './carousel_modal';
import ReviewModal from './review_modal';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'editProfile':
      component = <EditProfileModalContainer/>;
      break;
    case 'gameCarousel':
      component = <CarouselModal/>;
      break;
    case 'reviewModal':
      component = <ReviewModal/>;
      break;
    default:
      return null;
  }
  
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
    props: state.props
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
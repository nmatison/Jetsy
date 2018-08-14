import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/session_actions'
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import {withRouter} from 'react-router-dom';

function Modal({modal, closeModal, removeErrors}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break
    case 'signup':
      component = <SignupFormContainer modal={modal}/>;
      break
    case 'regtocontinue':
      component = <SignupFormContainer modal={modal}/>;
      break
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-background" onClick={removeErrors}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));

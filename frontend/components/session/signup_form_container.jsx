import {connect} from 'react-redux';
import React from 'react';
import {signup, login} from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions';
import SessionForm from '../session/session_form';


const mapStateToProps = ({errors}, ownProps) => ({
  errors: errors.session,
  formType: ownProps.modal === 'signup' ? 'Register' : 'Please register to continue'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  otherform: (
    <button onClick={() => openModal('login')}>
      Log In
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

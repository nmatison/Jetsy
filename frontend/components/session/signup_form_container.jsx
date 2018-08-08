import {connect} from 'react-redux';
import React from 'react';
import {signup} from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/session_actions';
import SessionForm from '../session/session_form';


const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  formType: 'Sign up',
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  otherform: (
    <button onClick={openModal('login')}>
      Log In
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

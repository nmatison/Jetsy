import {connect} from 'react-redux';
import React from 'react';
import {signup, login} from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions';
import SessionForm from '../session/session_form';
import {createCart} from '../../actions/cart_actions'


const mapStateToProps = ({errors, session}, ownProps) => ({
  errors: errors.session,
  formType: ownProps.modal === 'signup' ? 'Register' : 'Please register to continue',
  currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  createCart: (cart) => dispatch(createCart(cart)),
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

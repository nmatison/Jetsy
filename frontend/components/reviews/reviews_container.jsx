import { fetchReviews } from '../../actions/review_actions';
import { connect } from 'react-router-dom';
import ReviewForm from './review_form'

const mapStateToProps = (state) => ({
  // users: state.entities.users,
  // reviews: state.entities.reviews
});


const mapDispatchToProps = (dispatch) => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);

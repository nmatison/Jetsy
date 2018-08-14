import { connect } from 'react-redux'
import UserShow from './user_show'
import { fetchUser } from '../../actions/user_actions'
import { fetchProducts } from '../../actions/product_actions'


const mapStateToProps = (state, ownProps) => {
  let values = Object.values(state.entities.products)
  const user = state.entities.users[ownProps.match.params.userId]
  let sellerProducts = [];
  values.forEach(obj => {if (obj.user_id === user.id) sellerProducts.push(obj)})
  return {user, sellerProducts }
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchUser: () => dispatch(fetchUser())
});


export default connect(mapStateToProps, mapDispatchToProps)(UserShow)

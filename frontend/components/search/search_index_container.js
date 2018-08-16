import SearchIndex from './search_index';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  products: Object.values(state.entities.products),
  users: state.entities.users
});

export default connect(
  mapStateToProps,
  null
)(connect);

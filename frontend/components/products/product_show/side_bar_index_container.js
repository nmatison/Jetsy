import {connect} from 'react-redux'
import SideBarIndex from './side_bar_index';

const mapStateToProps = ({entities: { products }}) => ({
  products: Object.values(products)
});

export default connect(
  mapStateToProps,
  null
)(SideBarIndex);
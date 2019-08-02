import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { push } from 'connected-react-router';

const mapStateToProps = state => ({
    categories: state.shopping.categories
})

const mapDispatchToProps = dispatch => ({
    onClick(path) {
        dispatch(push(path));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
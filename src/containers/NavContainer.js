import { connect } from 'react-redux';
import Nav from '../components/Nav/Nav.js';
import {logOut} from '../actions/NavActions.js';

const mapStateToProps = (state) => {
    return {
        authenticated: state.user.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut());
        }
    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer
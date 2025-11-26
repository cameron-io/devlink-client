import { Fragment, FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutAction } from '../../redux/dispatchers/auth'
import type { RootState } from '../../redux/store'
import { StateAuth } from '../../types/common'

type Props = {
    auth: StateAuth;
    logoutAction: () => Promise<void>
}

const Navbar: FunctionComponent<Props> = ({
    auth: { isAuthenticated, loading },
    logoutAction,
}) => {
    const authLinks = (
        <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'>
                <Link className='nav-link active' to="/profiles">
                    <i className="fab fa-dev" />{' '}
                    <span className="hide-sm">Developers</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link active' to="/dashboard">
                    <i className="fa fa-user" />{' '}
                    <span className="hide-sm">Dashboard</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link active' onClick={logoutAction} to="#!">
                    <i className="fa fa-sign-out-alt" />{' '}
                    <span className="hide-sm">Logout</span>
                </Link>
            </li>
        </ul>
    )

    const guestLinks = (
        <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'>
                <Link className='nav-link active' to="/profiles">Developers</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link active' to="/register">Register</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link active' to="/login">Login</Link>
            </li>
        </ul>
    )

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 border">
            <h1>
                <Link className='navbar-brand' to="/">
                    <i className="fas fa-network-wired"></i> DevLink
                </Link>
            </h1>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {!loading && (
                    <Fragment>
                        {isAuthenticated ? authLinks : guestLinks}
                    </Fragment>
                )}
            </div>
        </nav>
    )
}

const mapStateToProps = (state: RootState) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutAction })(Navbar)

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
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className='nav-item border rounded-3 px-3'>
                <Link className='nav-link' to="/profiles">
                    <i className="fab fa-dev" />{' '}
                    <span className="hide-sm">Developers</span>
                </Link>
            </li>
            <li className='nav-item border rounded-3 px-3 mt-2'>
                <Link className='nav-link' to="/dashboard">
                    <i className="fa fa-user" />{' '}
                    <span className="hide-sm">Dashboard</span>
                </Link>
            </li>
            <li className='nav-item border rounded-3 px-3 mt-2'>
                <Link className='nav-link' onClick={logoutAction} to="#!">
                    <i className="fa fa-sign-out-alt" />{' '}
                    <span className="hide-sm">Logout</span>
                </Link>
            </li>
        </ul>
    )

    const guestLinks = (
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className='nav-item border rounded-3 px-3'>
                <Link className='nav-link' to="/profiles">Developers</Link>
            </li>
            <li className='nav-item border rounded-3 px-3 mt-2'>
                <Link className='nav-link' to="/register">Register</Link>
            </li>
            <li className='nav-item border rounded-3 px-3 mt-2'>
                <Link className='nav-link' to="/login">Login</Link>
            </li>
        </ul>
    )

    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Link className='navbar-brand' to="/">
                    DevLink<i className="fas fa-network-wired ms-2"></i>
                </Link>
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{maxWidth: "200px"}}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">DevLink</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {!loading && (
                        <Fragment>
                            {isAuthenticated ? authLinks : guestLinks}
                        </Fragment>
                    )}
                </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state: RootState) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutAction })(Navbar)

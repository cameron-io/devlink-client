import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import type { RootState } from '../../redux/store'
import { FunctionComponent } from 'react'

type Props = { isAuthenticated: boolean | null }

const Landing: FunctionComponent<Props> = function ({ isAuthenticated }) {
    if (isAuthenticated) {
        return <Navigate to="/dashboard" />
    }
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold">The Developer Network</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Create and Showcase your Portfolio.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Link to="/register" className="btn btn-primary btn-lg px-4 me-sm-3">
                        Sign Up
                    </Link>
                    <Link to="/login" className="btn btn-outline-secondary btn-lg px-4">
                        Login
                    </Link>
                </div>
            </div>
            <div className="container px-5 mt-0 mb-0 pb-0">
                <img src="showcase.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Hero image" height="500" loading="lazy"></img>
            </div>
            <p className="mb-4">
                    Blog, share posts and get help from fellow developers!
            </p>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Landing)

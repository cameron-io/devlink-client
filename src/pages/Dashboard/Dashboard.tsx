import { Fragment, FunctionComponent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../redux/dispatchers/profile'
import DashboardActions from '../../components/dashboard/DashboardActions'
import Experience from '../../components/dashboard/Experience'
import Education from '../../components/dashboard/Education'
import Spinner from '../../components/layout/Spinner'
import { RootState } from '../../redux/store'
import { StateAuth, StateProfile } from '../../types/common'

type Props = {
    getCurrentProfile: () => Promise<void>
    deleteAccount: () => Promise<void>
    authData: StateAuth
    profileData: StateProfile
}

const Dashboard: FunctionComponent<Props> = ({
    getCurrentProfile,
    deleteAccount,
    authData: { user },
    profileData: { profile, loading },
}) => {
    useEffect(() => {getCurrentProfile()}, [getCurrentProfile])

    let page = (
        <Fragment>
            <h1 className="text-primary">Dashboard</h1>
            <p className="lead">
                <i className="fa fa-user"></i> Welcome {user && user.name}
            </p>
            {profile != null ? (
                <Fragment>
                    <div className='text-end'>
                        <DashboardActions />
                    </div>
                    <br></br>
                    <Experience experience={profile.experience!} />
                    <Education education={profile.education!} />

                    <div className="my-5">
                        <button
                            className="btn border"
                            onClick={() => {
                                if (window.confirm(
                                    'Are you sure you want to delete your account? This cannot be undone.'
                                )) {
                                    return deleteAccount()
                                }
                            }}
                        >
                            <i className="fas fa-trash-alt mx-1"></i> Delete My Account
                        </button>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <p>
                        You have not yet created a profile, please add some
                        info.
                    </p>
                    <Link to="/create-profile" className="btn btn-primary my-1">
                        Create Profile
                    </Link>
                </Fragment>
            )}
        </Fragment>
    )

    return loading && profile === null ? (<Spinner />) : page
}

const mapStateToProps = (state: RootState) => ({
    authData: state.auth,
    profileData: state.profile,
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
    Dashboard
)

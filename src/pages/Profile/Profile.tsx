import { Fragment, FunctionComponent, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../../components/layout/Spinner'
import { getProfileById } from '../../redux/dispatchers/profile'
import ProfileTop from '../../components/profile/ProfileTop'
import ProfileAbout from '../../components/profile/ProfileAbout'
import type { RootState } from '../../redux/store'
import { StateAuth, StateProfile } from '../../types/common'

type Props = {
    getProfileById: (userId: string) => Promise<void>
    profile: StateProfile
    auth: StateAuth
}

const Profile: FunctionComponent<Props> = ({
    getProfileById,
    profile: { profile, loading },
    auth,
}) => {
    const id: string = useParams().id!

    useEffect(() => {
        getProfileById(id)
    }, [getProfileById, id])

    return (
        <Fragment>
            {profile === null || loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <Link to="/profiles" className="btn btn-primary m-2">
                        Back to Profiles
                    </Link>
                    {auth.isAuthenticated &&
                        auth.loading === false &&
                        auth.user!.id === profile.user.id && (
                            <Link to="/edit-profile" className="btn border m-2">
                                Edit Profile
                            </Link>
                        )}
                    <div className="container my-1">
                        <div className='row'>
                            <div className='col'>
                                <ProfileTop profile={profile} />
                            </div>
                            <div className='col'>
                                <ProfileAbout profile={profile} />
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    profile: state.profile,
    auth: state.auth,
})

export default connect(mapStateToProps, { getProfileById })(Profile)

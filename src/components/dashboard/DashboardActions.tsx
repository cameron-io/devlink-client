import { Fragment } from 'react'
import { Link } from 'react-router-dom'

type DashboardActionsProps = {
    deleteAccount: any
}

const DashboardActions = ({
    deleteAccount
}: DashboardActionsProps) => {
    return (
        <Fragment>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Manage
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <Link className='dropdown-item' to="/edit-profile">
                            <span>
                                <i className="fas fa-user-circle text-primary" style={{width: 25}}></i>
                                Edit Profile
                            </span>
                        </Link>
                    </li>
                    <li>
                        <button
                            className="dropdown-item"
                            onClick={() => {
                                if (window.confirm(
                                    'Are you sure you want to delete your account? This cannot be undone.'
                                )) {
                                    return deleteAccount()
                                }
                            }}
                        >
                            <span>
                                <i className="far fa-trash-alt text-danger" style={{width: 25}}></i>
                                Delete My Account
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default DashboardActions

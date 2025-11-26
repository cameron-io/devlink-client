import { Fragment } from 'react'
import { FormProps, Link } from 'react-router-dom'

const DashboardActions = (_props: FormProps) => {
    return (
        <Fragment>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Manage Profile
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
                        <Link className='dropdown-item' to="/add-experience">
                            <span>
                                <i className="fab fa-black-tie text-primary" style={{width: 25}}></i>
                                Add Experience
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className='dropdown-item' to="/add-education">
                            <span>
                                <i className="fas fa-graduation-cap text-primary" style={{width: 25}}></i>
                                Add Education
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default DashboardActions

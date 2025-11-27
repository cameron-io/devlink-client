import { Fragment, FunctionComponent } from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteExperience } from '../../redux/dispatchers/profile'
import { Link } from 'react-router-dom'

type Props = {
    experience?: any[]
    deleteExperience: (id: number) => Promise<void>
}

const Experience: FunctionComponent<Props> = ({
    experience,
    deleteExperience,
}) => {
    return (
        <Fragment>
            <h2 className="my2">Experience Credentials</h2>
            {experience == null || experience.length == 0 ?
                (
                    <p>No Entries.</p>
                ) : (
                <div className="table-responsive">
                    <table className="table table-striped-columns">
                        <thead>
                            <tr>
                                <th scope="col">Company</th>
                                <th scope="col">Title</th>
                                <th scope="col">Started</th>
                                <th scope="col">Until</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {experience.map((exp: any) => (
                                <tr key={exp.id}>
                                    <td>{exp.company}</td>
                                    <td>{exp.title}</td>
                                    <td><Moment format="YYYY/MM/DD">{exp.from}</Moment></td>
                                    <td>
                                        {exp.to === null ?
                                            (
                                                'Now'
                                            ) : (
                                                <Moment format="YYYY/MM/DD">{exp.end}</Moment>
                                            )
                                        }
                                    </td>
                                    <td>{exp.description}</td>
                                    <button
                                        onClick={() => deleteExperience(exp.id)}
                                        className="btn btn-danger"
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                )
            }
            <div className='border text-center rounded-3 mt-3' style={{width: 200}}>
                <Link className='btn' to="/add-experience">
                    <span>
                        <i className="fab fa-black-tie text-primary" style={{width: 25}}></i>
                        Add Experience
                    </span>
                </Link>
            </div>
        </Fragment>
    )
}

export default connect(null, { deleteExperience })(Experience)

import { Fragment, FunctionComponent } from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteEducation } from '../../redux/dispatchers/profile'

type Props = {
    education?: any[]
    deleteEducation: (id: number) => Promise<void>
}

const Education: FunctionComponent<Props> = ({
    education,
    deleteEducation,
}) => {
    return (
        <Fragment>
            <h2 className="my2">Education Credentials</h2>
            {education == null || education.length == 0 ?
                (
                    <p>No Entries.</p>
                ) : (
                <div className="table-responsive">
                    <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th scope="col">School</th>
                            <th scope="col">Degree</th>
                            <th scope="col">Started</th>
                            <th scope="col">Until</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {education.map((edu: any) => (
                            <tr key={edu.id}>
                                <td>{edu.school}</td>
                                <td>{edu.degree}</td>
                                <td><Moment format="YYYY/MM/DD">{edu.from}</Moment></td>
                                <td>
                                    {edu.to === null ?
                                        (
                                            'Now'
                                        ) : (
                                            <Moment format="YYYY/MM/DD">{edu.end}</Moment>
                                        )
                                    }
                                </td>
                                <td>{edu.description}</td>
                                <button
                                    onClick={() => deleteEducation(edu.id)}
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
        </Fragment>
    )
}

export default connect(null, { deleteEducation })(Education)

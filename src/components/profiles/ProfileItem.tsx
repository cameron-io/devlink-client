import { Link } from 'react-router-dom'
import { FunctionComponent } from 'react'

type Props = { profile: any }

const ProfileItem: FunctionComponent<Props> = ({
    profile: {
        user: { id, name, avatar },
        status,
        company,
        location,
        skills,
    },
}) => {
    return (
        <div className="profile border rounded-3">
            {avatar ?
                    <img src={'https:' + avatar} alt="" className="border rounded-3" style={{height: "180px"}} /> 
                :
                    <div className="text-center bg-black p-5 rounded" style={{height: "180px", width: "180px"}}>
                        <h1 className="far fa-user fa-4x"></h1>
                    </div>}
            <div>
                <h2>{name}</h2>
                <p>
                    {status} {company && <span> at {company}</span>}
                </p>
                <p className="my-1">{location && <span>{location}</span>}</p>
                <Link to={`/profile/${id}`} className="btn btn-primary">
                    View Profile
                </Link>
            </div>
            <div>
                {skills.slice(0, 4).map((skill: string, index: number) => (
                    <div key={index} className="text-primary">
                        <i className="fas fa-check"></i> {skill}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileItem

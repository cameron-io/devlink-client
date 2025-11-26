import { Link } from 'react-router-dom'
import { FunctionComponent } from 'react'
import Avatar from '../../components/profile/ProfileAvatar'

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
            <Avatar avatar={avatar} size={180}></Avatar>
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

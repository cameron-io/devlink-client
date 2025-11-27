import { Link } from 'react-router-dom'
import { FunctionComponent } from 'react'
import Avatar from '../../components/profile/ProfileAvatar'
import { Profile } from '../../types/common'

type Props = { profile: Profile }

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
        <div className="container border rounded-3 p-4">
            <div className='row'>
                <div className='col me-4' style={{maxWidth: 180}}>
                    <Avatar avatar={avatar} size={180}></Avatar>
                </div>
                <div className='col border-end'>
                    <div>
                        <h2>{name}</h2>
                        <p>{status} {company && <span> @ {company}</span>}</p>
                        <p>{location && <span>{location}</span>}</p>
                        <Link to={`/profile/${id}`} className="btn btn-primary">
                            View Profile
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div>
                        <h4 className='text-primary'>Skills</h4>
                        {skills.slice(0, 4).map((skill: string, index: number) => (
                            <div key={index} className="text-tertiary">
                                <i className="fas fa-check"></i> {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileItem

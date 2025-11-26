import { FunctionComponent } from 'react'
import { Profile } from '../../types/common'
import Avatar from './ProfileAvatar'

type Props = { profile: Profile }

const ProfileTop: FunctionComponent<Props> = ({
    profile: {
        status,
        company,
        location,
        website,
        gitHubUsername,
        social,
        user: { name, avatar },
    },
}) => {
    return (
        <div className="d-flex justify-content-center border rounded-3 p-4 mb-4">
            <div>
                <Avatar avatar={avatar} size={200}></Avatar>
                <h1 className="large my-3">{name}</h1>
                <p className="lead">
                    {status} {company && <span>@ {company}</span>}
                </p>
                <p>{location && <span>{location}</span>}</p>
                <div className="my-1">
                    {gitHubUsername && (
                        <div>
                            <a
                                href={'https://github.com/' + gitHubUsername}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-brands fa-github me-2"></i>
                                {gitHubUsername}
                            </a>
                        </div>
                    )}
                    {website && (
                        <div>
                            <a
                                className='my-2'
                                href={'https://' + website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-globe me-2"></i>
                                {website}
                            </a>
                        </div>
                    )}
                    {social && social.twitter && (
                        <a
                            href={social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                    )}
                    {social && social.facebook && (
                        <a
                            href={social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                    )}
                    {social && social.linkedin && (
                        <a
                            href={social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    )}
                    {social && social.youtube && (
                        <a
                            href={social.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-youtube fa-2x"></i>
                        </a>
                    )}
                    {social && social.instagram && (
                        <a
                            href={social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfileTop

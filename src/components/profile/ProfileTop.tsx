import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
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
                <h1 className="my-3">{name}</h1>
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
                                <FontAwesomeIcon icon={faGithub} className='me-2'/>
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
                                <FontAwesomeIcon icon={faGlobe} className='me-2'/>
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
                            <FontAwesomeIcon icon={faXTwitter}/>
                        </a>
                    )}
                    {social && social.facebook && (
                        <a
                            href={social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                    )}
                    {social && social.linkedin && (
                        <a
                            href={social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    )}
                    {social && social.youtube && (
                        <a
                            href={social.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                    )}
                    {social && social.instagram && (
                        <a
                            href={social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfileTop

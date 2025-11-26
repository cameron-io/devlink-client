import { Fragment, FunctionComponent } from 'react'
import { Profile } from '../../types/common'
import ProfileEducation from '../../components/profile/ProfileEducation'
import ProfileExperience from '../../components/profile/ProfileExperience'

type Props = { profile: Profile }

const ProfileAbout: FunctionComponent<Props> = ({
    profile: {
        bio,
        education,
        experience,
        skills,
    },
}) => (
    <Fragment>
        <div className="border rounded-3 p-2">
            {bio && (
                <Fragment>
                    <h2 className="text-primary">About Me</h2>
                    <p>{bio}</p>
                    <div className="line"></div>
                </Fragment>
            )}
            <h2 className="text-primary">Skill Set</h2>
            <div className="skills">
                {skills.map((skill: string, index: number) => (
                    <div key={index} className="p-1">
                        <i className="fa fa-check"></i> {skill}
                    </div>
                ))}
            </div>
        </div>
        <div className="border rounded-3 p-2 my-4">
            <h2 className="text-primary">Experience</h2>
            {experience.length > 0 ? (
                <Fragment>
                    {experience.map(
                        (experience: any) => (
                            <ProfileExperience
                                key={experience.id}
                                experience={experience}
                            />
                        )
                    )}
                </Fragment>
            ) : (
                <p>No experience credentials</p>
            )}
        </div>
        <div className="border rounded-3 p-2">
            <h2 className="text-primary">Education</h2>
            {education.length > 0 ? (
                <Fragment>
                    {education.map(
                        (education: any) => (
                            <ProfileEducation
                                key={education.id}
                                education={education}
                            />
                        )
                    )}
                </Fragment>
            ) : (
                <p>No experience credentials</p>
            )}
        </div>
    </Fragment>
)

export default ProfileAbout

import { Fragment } from 'react'

type AvatarProps = {
    avatar: string | undefined
    size: number | string
}

const Avatar = (props: AvatarProps) => (
    <Fragment>
        {props.avatar 
            && 
            <img src={'https:' + props.avatar} alt="" className="border rounded-3" style={{height: props.size}} /> 
            || 
            <div className="text-center bg-black p-5 rounded" style={{height: props.size, width: props.size}} >
                <h1 className="far fa-user fa-6x"></h1>
            </div>
        }
    </Fragment>
)

export default Avatar
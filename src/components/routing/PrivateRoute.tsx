import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { FunctionComponent } from 'react'

type Props = { component: FunctionComponent; authData: any }

const PrivateRoute: FunctionComponent<Props> = ({
    component: Component,
    authData: { isAuthenticated, loading },
    ...props
}) =>
    !isAuthenticated && !loading ? (
        // Back to login page
        <Navigate to="/login" />
    ) : (
        // Else display component
        <Component {...props} />
    )

const mapStateToProps = (state: RootState) => ({
    authData: state.auth,
})

export default connect(mapStateToProps)(PrivateRoute)

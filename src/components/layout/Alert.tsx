import { connect } from 'react-redux'
import type { RootState } from '../../redux/store'

// If alerts property contains a state alert, output div with alert.msg
const Alert = ({ alertsData }: { alertsData: any }) =>
    alertsData !== null &&
    alertsData.length > 0 &&
    alertsData.map((alert: any) => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
            {alert.msg}
        </div>
    ))

// Remap redux state to property in react component
const mapStateToProps = (state: RootState) => ({
    alertsData: state.alert,
})

export default connect(mapStateToProps)(Alert)

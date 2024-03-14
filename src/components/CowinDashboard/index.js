import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

const API_STATUS = {
  initial: 'INITIAL',
  inProcess: 'IN_PROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {apiStatus: API_STATUS.initial, data: null}

  componentDidMount() {
    this.fetchVaccinationData()
  }

  fetchVaccinationData = async () => {
    this.setState({
      apiStatus: API_STATUS.inProcess,
    })

    const res = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const result = await res.json()

    console.log(result)

    if (res.status !== 200) {
      this.setState({
        apiStatus: API_STATUS.failure,
      })
    } else {
      this.setState({
        apiStatus: API_STATUS.success,
        data: result,
      })
    }
  }

  render() {
    const {apiStatus, data} = this.state
    return (
      <div className="bg">
        {apiStatus === 'SUCCESS' && (
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
                alt="website logo"
              />
              <h1>Co-WIN</h1>
            </div>
            <h1>CoWIN Vaccination in India</h1>

            <VaccinationCoverage
              last7DaysVaccination={data.last_7_days_vaccination}
            />

            <VaccinationByGender
              vaccinationByGender={data.vaccination_by_gender}
            />

            <VaccinationByAge vaccinationByAge={data.vaccination_by_age} />
          </div>
        )}

        {apiStatus === 'FAILURE' && (
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
                alt="website logo"
              />
              <h1>Co-WIN</h1>
            </div>
            <h1>CoWIN Vaccination in India</h1>

            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
            <h1>Something went wrong</h1>
          </div>
        )}

        {apiStatus === 'IN_PROCESS' && (
          <div data-testid="loader">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
                alt="website logo"
              />
              <h1>Co-WIN</h1>
            </div>
            <h1>CoWIN Vaccination in India</h1>
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CowinDashboard

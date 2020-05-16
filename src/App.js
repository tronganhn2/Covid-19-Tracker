import React from 'react';

import { Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api'

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const FetchedData = await fetchData()
        this.setState({data: FetchedData})
    }

    handleCountryChange = async (country) => {
        const FetchedData = await fetchData(country)
        this.setState({data: FetchedData, country: country})
    }

    render(){
        const { data , country } = this.state
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
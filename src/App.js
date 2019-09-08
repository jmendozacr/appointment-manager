import React, { Component } from 'react';
import Header               from './components/Header';
import NewAppointment       from './components/NewAppointment';
import DateList             from './components/DateList';

class App extends Component {
  state = {
    dates: []
  }

  componentDidMount() {
    const datesLocalStorage = localStorage.getItem('citas');

    if(datesLocalStorage) {
      this.setState({
        dates: JSON.parse(datesLocalStorage)
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.dates));
  }

  createNewDate = date => {
    const dates = [...this.state.dates, date];

    this.setState({
      dates
    });
  }

  removeDate = id => {
    const currentDates = [...this.state.dates];
    const dates = currentDates.filter(date => date.id !== id );

    this.setState({
      dates
    });
  }

  render() {

    return (
      <div className="container">
        <Header titulo="Veterinary Patient Manager"/>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment
              createNewDate={this.createNewDate}/>
          </div>
          <div className="col-md-10 mt-5 mx-auto">
            <DateList
              dates={this.state.dates}
              removeDate={this.removeDate} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import uuid                 from 'uuid';

const initialState = {
    date: {
        petName: '',
        owner: '',
        date: '',
        time: '',
        description: ''
    },
    error: false
}

export default class NewAppointment extends Component {

    state = { ...initialState }

    handleChange = e => {
        this.setState({
            date: {
                ...this.state.date,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { petName, owner, date, time, description } = this.state.date;

        if(petName === '' || owner  === '' || date === '' || time === '' || description === '') {
            this.setState({
                error: true
            });

            return;
        }

        const newDate = {...this.state.date};
        newDate.id = uuid();

        this.props.createNewDate(newDate);

        this.setState({
            ...initialState
        })
    }

    render() {
        const { error } = this.state;

        return (
            <div className="card mt-5 p-3">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Fill out the form to create a new appointment.
                    </h2>

                    {
                        error ?
                        <div className="alert alert-danger mt-2 mb-5">All fields are required</div>
                        : null
                    }

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-12 col-lg-12 pl-0 col-form-label">Pet's name</label>
                            <div className="p-0 col-sm-8 col-md-12">
                                <input
                                    name="petName"
                                    onChange={this.handleChange}
                                    value={this.state.date.petName}
                                    type="text"
                                    className="form-control"
                                    placeholder="name"/>
                            </div>
                         </div> {/* form-group */}

                         <div className="form-group row">
                            <label className="col-sm-12 col-lg-12 pl-0 col-form-label">Owner's name</label>
                            <div className="p-0 col-sm-8 col-md-12">
                                <input
                                    name="owner"
                                    onChange={this.handleChange}
                                    value={this.state.date.owner}
                                    type="text"
                                    className="form-control"
                                    placeholder="owner"/>
                            </div>
                         </div> {/* form-group */}

                         <div className="form-group row">
                            <div className="col-sm-12 col-md-6 p-0">
                                <label className="col-sm-4 col-lg-4 pl-0 col-form-label">Date</label>
                                <div className="p-0 col-sm-8 col-md-12">
                                    <input
                                        name="date"
                                        onChange={this.handleChange}
                                        value={this.state.date.date}
                                        type="date"
                                        className="form-control"/>
                                </div>
                            </div>
                             <div className="col-sm-12 col-md-6 pr-1">
                                <label className="col-sm-4 col-lg-12 pl-0 col-form-label">Appointment time</label>
                                <div className="p-0 col-sm-8 col-md-12">
                                    <input
                                        name="time"
                                        onChange={this.handleChange}
                                        value={this.state.date.time}
                                        type="time"
                                        className="form-control"/>
                                </div>
                             </div>
                         </div> {/* form-group */}

                         <div className="form-group row">
                            <label className="col-sm-12 col-lg-12 pl-0 col-form-label">Symptom</label>
                            <div className="p-0 col-sm-8 col-md-12">
                                <textarea
                                    name="description"
                                    onChange={this.handleChange}
                                    value={this.state.date.description}
                                    className="form-control"
                                    placeholder="description" />
                            </div>
                         </div> {/* form-group */}

                         <input
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Add new appointment"/>
                    </form>
                </div>
            </div>
        )
    }
}

NewAppointment.propTypes = {
    createNewDate: PropTypes.func.isRequired
}
import React     from 'react';
import PropTypes from 'prop-types';
import Date      from './Date';

const DateList = ({dates, removeDate}) => {
    const titleMessage = dates.length === 0 ? "No appointments" : "Manage appointments here";

    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{titleMessage}</h2>
                <div className="list-dates">
                    {
                        dates.map(date => (
                            <Date
                                key={date.id}
                                date={date}
                                removeDate={removeDate}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

DateList.protoTypes = {
    dates: PropTypes.array.isRequired,
    removeDate: PropTypes.func.isRequired
}

export default DateList

import React     from 'react';
import PropTypes from 'prop-types';

const Date = ({date, removeDate}) => (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{date.petName}</h3>
                <p className="card-text"><span>Owner</span> {date.owner} </p>
                <p className="card-text"><span>Date</span> {date.date} </p>
                <p className="card-text"><span>Time</span> {date.time} </p>
                <p className="card-text"><span>Description</span> {date.description} </p>
                <button
                    onClick={() => removeDate(date.id)}
                    className="btn btn-danger"
                >
                    Borrar &times;
                </button>
            </div>
        </div>
);

Date.propTypes = {
    date: PropTypes.object.isRequired,
    removeDate: PropTypes.func.isRequired
}

export default Date

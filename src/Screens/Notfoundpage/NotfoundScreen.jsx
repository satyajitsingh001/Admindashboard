import React from 'react'
import notfoundlogo from '../../assets/error.svg'
import { Link } from 'react-router-dom'

const NotfoundScreen = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100" id="container-wrapper">
            <div className="text-center">
                <img src={notfoundlogo} style={{ maxWidth: '100px' }} className="mb-3" />
                <h3 className="text-gray-800 font-weight-bold">Oopss!</h3>
                <p className="lead text-gray-800 mx-auto">404 Page Not Found</p>
                <Link to="/Home">&larr; Back to Dashboard</Link>
            </div>
        </div>
    )
}

export default NotfoundScreen
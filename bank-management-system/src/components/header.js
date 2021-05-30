import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">LOGO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active font-weight-bold" aria-current="page">Home</Link>
                        </li>
                        {!props.currentUser &&
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link font-weight-bold">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link font-weight-bold">Signup</Link>
                                </li>
                            </>
                        }
                        {props.currentUser &&
                            <>
                                <li className="nav-item">
                                    <Link to="/profile" className="nav-link">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/loan" className="nav-link">Apply Loan</Link>
                                </li>
                            </>
                        }
                    </ul>
                    {props.currentUser &&
                        <div className="d-flex">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="/login" className="nav-link" onClick={() => { props.logout() }}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    }
                </div>

            </div>
        </nav>
    )
}

export default Header;

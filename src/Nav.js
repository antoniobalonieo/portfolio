import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" to="/service/AddServiceForm">about me</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/service/AddTechForm">skills</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/service/AddTechForm">experience</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/service/AddTechForm">projects</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/service/AddTechForm">contact</NavLink></li>
                        
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Nav;

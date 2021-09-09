import React,{ Component , Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router ,Route, Link} from 'react-router-dom';
import AddUser from './AddUser';
import GetAllUsers from './GetAllUsers';

class MainPage extends Component{

    render(){
        return (
            <Router>
                <Fragment>
                <nav className="navbar navbar-expand-sm bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/adduser" className="nav-link">Add User</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/getallusers" className="nav-link">Get All Users</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Route path="/adduser" component={AddUser}/>
                    <Route path="/getallusers" component={GetAllUsers}/>
                </div>
                </Fragment>
            </Router>
        );
    }
}

export default MainPage;

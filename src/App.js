import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  <Appointment />
                </PrivateRoute>}>

            </Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>}>

            </Route>
            {/* <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute> */}
            <Route path="/users" element={<Home />}>

            </Route>
            <Route path="/home" element={<Home />}>

            </Route>
            <Route path="/login" element={<Login />}>

            </Route>
            <Route path="/register" element={<Register />
            }>
            </Route>
            {/* <Route path="/register">
              <Register />
            </Route> */}

            <Route path="/" element={<Home />}>

            </Route>
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;

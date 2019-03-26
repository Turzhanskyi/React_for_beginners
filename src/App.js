import React, { Component } from 'react';
import "./App.css";
import RegistrationForm from './RegisttationForm';

class App extends Component {
    render() {
        return (
            <div className="container">
                <RegistrationForm />
            </div>
        );
    }
}

export default App;
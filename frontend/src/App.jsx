import React from 'react';
import Routes from './Routes.jsx';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app max-viewport">
            <React.StrictMode>
                <Routes />
            </React.StrictMode>
            <Footer/>
        </div>
    )
}

export default App;
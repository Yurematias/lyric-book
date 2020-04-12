import React from 'react';
import Routes from './Routes.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <div className="app">
            <React.StrictMode>
                <Routes />
            </React.StrictMode>
            <Footer />
        </div>
    )
}

export default App;
import React from 'react';
import Routes from './Routes.jsx';

function App() {
    return (
        <div className="app max-viewport">
            <React.StrictMode>
                <Routes />
            </React.StrictMode>
        </div>
    )
}

export default App;
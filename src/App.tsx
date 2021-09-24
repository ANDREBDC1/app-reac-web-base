import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import AppProvider from './Contexts';

const App: React.FC = () => {
    return (
        <AppProvider>
            <Router>
                <Routes />
                <GlobalStyle />
            </Router>
        </AppProvider>
    );
};

export default App;

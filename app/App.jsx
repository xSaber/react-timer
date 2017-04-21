import React from 'react';

// include bootstrap styles
import 'Assets/styles/bootstrap.css';
import 'Assets/styles/bootstrap-theme.css';

import Header from './components/Header';
import Scenes from './scenes';

/**
 * Main App component
 */
export default class App extends React.Component {
    render () {
        return (
            <Scenes>
                <Header />
            </Scenes>
        );
    }
}

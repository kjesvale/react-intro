import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DetailPage from './DetailPage';
import FeedPage from './FeedPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Route exact path="/">
                    <FeedPage />
                </Route>
                <Route exact path="/post/:id">
                    <DetailPage />
                </Route>
            </div>
        </BrowserRouter>
    );
}

function Header(props) {
    return (
        <header className="site-header">
            <h1>
                <Link to="/">Bekkstagram</Link>
            </h1>
        </header>
    );
}

export default App;

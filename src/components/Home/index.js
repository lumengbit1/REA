import React from 'react';
import './../../less/style.less';
import './home.less';
import Card from './../Card';

function Home() {
    return (
        <div className="home-page">
            <div className="results-area">
                <Card area="results" />
            </div>
            <div className="saved-properties-area">
                <Card area="saved" />
            </div>
        </div>
    );
}
export default Home;

import React from 'react';
import FeaturedNews from '../../components/featured-news';
import SubscribeForm from '../subscribe-form';
import LatestNews from '../../components/latest-news';

const url = 'http://localhost:3004/home';

class Home extends React.Component {
    state = {
        home: {}
    };

    componentDidMount() {
        fetch(url, {method: 'GET'})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    home: json
                })
            })
    }

    render() {
        const home = this.state.home;
        return (
            <div>
                <FeaturedNews slides={home.slider}/>
                <SubscribeForm/>
                <LatestNews blocks={home.blocks}/>
            </div>
        );
    }
}

export default Home;
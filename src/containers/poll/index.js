import React from 'react';
import './poll.scss';

const url = 'http://localhost:3004/teams';

class Poll extends React.Component {
    state = {
        pollTeams: []
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(`${url}?poll=true&_sort=count&_order=desc`, {method: 'GET'})
            .then(res => res.json())
            .then(json => this.setState({
                pollTeams: json
            }));
    }

    addCount(e, count, id) {
        e.preventDefault();

        fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({count: count + 1})
        }).then(() => {
            this.fetchData();
        })

    }

    renderPoll() {
        const position = ['1ST', '2ND', '3RD'];

        return this.state.pollTeams.map((item, i) => (
            <div key={item.id} className="poll-item" onClick={(e) => this.addCount(e, item.count, item.id)}>
                <img className="team-logo" src={`/images/teams/${item.logo}`} alt={item.name}/>
                <p className="place">{position[i]}</p>
                <div className="votes">{item.count} Votes</div>
            </div>
        ))
    }

    render() {
        return (
            <div className="home-poll">
                <h3 className="text-center title">Who will be the next champion?</h3>
                <div className="poll-container">
                    {this.renderPoll()}
                </div>
            </div>
        );
    }
}

export default Poll;
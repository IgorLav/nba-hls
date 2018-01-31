import React from 'react';

const url = 'http://localhost:3004/teams';

class Poll extends React.Component {
    state = {
        pollTeams: []
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(`${url}?poll=true&&_sort&=count&_order=desc`, {method: 'GET'})
            .then(res=> res.json())
            .then(json=> this.setState({
                pollTeams: json
            }));
    }

    renderPoll () {
        const position = ['1ST', '2ND', '3RD'];
        return this.state.pollTeams.map((item, i) => (
            <div key={item.id} className="poll-item">
                <img src={`/images/teams/${item.logo}`} alt={item.name}/>
                <h4>{position[i]}</h4>
                <div>{item.count} Votes</div>
            </div>
        ))
    }

    render() {
        return (
            <div className="home-poll">
                <h3 className="text-center">Who will be the next champion?</h3>
                <div className="poll-container">
                    {this.renderPoll()}
                </div>
            </div>
        );
    }
}

export default Poll;
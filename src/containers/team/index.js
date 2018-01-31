import React from 'react';
import './team.scss';

const url = 'http://localhost:3004/teams';

class Team extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch(`${url}?id=${this.props.match.params.id}`, {method: 'GET'})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json
                })
            })
    }

    renderData = () => {
        return this.state.data.map(item => (
            <div key={item.id} className="team-data-wrap">
                <aside className="sidebar">
                    <img className="team-logo" src={`/images/teams/${item.logo}`} alt={item.name}/>
                </aside>
                <div className="content">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <hr/>
                    <div className="squad">
                        {this.renderSquad(item.squad)}
                    </div>
                </div>
            </div>
        ))
    };

    renderSquad = (data) => {
        return data.map(item=>(
            <div key={item.name} className="player-wrap">
                <img className="player-thumb" src={`/images/avatar.png`} alt={item.name} />
                <h4 className="player-name">{item.name}</h4>
                <ul className="player-info">
                    <li><strong>Number:</strong>{item.number}</li>
                    <li><strong>PPG:</strong>{item.PPG}</li>
                    <li><strong>APG:</strong>{item.APG}</li>
                    <li><strong>RPG:</strong>{item.RPG}</li>
                </ul>
            </div>
        ));
    };

    render() {
        return (
            <div className="team-page">
                {this.renderData()}
            </div>
        );
    }
}

export default Team;
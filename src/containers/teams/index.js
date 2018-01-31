import React from 'react';
import {Link} from 'react-router-dom';
import  './teams.scss';

const url = 'http://localhost:3004/teams';

class Teams extends React.Component {
    state = {
        teams: [],
        filtered: [],
        keyword: ''
    };

    componentDidMount() {
        fetch(url, {method: 'GET'})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    teams: json,
                    filtered: json
                })
            })
    }

    renderTeams = () => {
        return this.state.filtered.map(item => (
            <li key={item.id} className="team-item">
                <Link to={`/team/${item.id}`}>
                    <img src={`/images/teams/${item.logo}`} alt={item.name}/>
                </Link>
            </li>
        ));
    };

    onFilter = (e) => {
        const keyword = e.target.value;

        if (keyword) {
            const list = this.state.teams.filter(item => item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
            this.setState({
                filtered: list,
                keyword
            });
        }
        else {
            this.setState({
                filtered: this.state.teams,
                keyword
            });
        }
    };

    render() {
        return (
            <div className="teams-component">
                <div className="search">
                    <input placeholder="Type to filter" type="text" value={this.state.keyword} onChange={e => this.onFilter(e)}
                           className="input-style"/>
                </div>

                <div className="container">
                    <ul className="teams-list">
                        {this.renderTeams()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Teams;
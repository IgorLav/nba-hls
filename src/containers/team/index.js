import React from 'react';
import {Link} from 'react-router-dom';
import './team.scss';

const url = 'http://localhost:3004/teams';

class Teams extends React.Component {
    state = {

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
            <div className="team-component">
            </div>
        );
    }
}

export default Teams;
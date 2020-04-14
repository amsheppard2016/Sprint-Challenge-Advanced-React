import React from "react";

class Players extends React.Component {
    state = {
        players: []
    };
    componentDidMount() {
        fetch("http://localhost:5000/api/players")
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                this.setState({
                    ...this.state,
                    players: data
                });
            })
            .catch(err => {
                console.log("players data not returned", err);
            });
    }
    render() {
        return (
            console.log("render,players", this.state.players),
            (
                <div className="player-container">
                    <h2>June - July 2019</h2>
                    <div id="playerCards" className="player-cards">
                        {this.state.players.map(player => {
                            return (
                                <div className="player-card" key={player.id}>
                                    <h2>{player.name}</h2>
                                    <h3>Country: {player.country}</h3>
                                    <h4>
                                        Number of Searches: {player.searches}
                                    </h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )
        );
    }
}

export default Players;

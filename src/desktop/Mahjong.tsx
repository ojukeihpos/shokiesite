import React from 'react'
import axios from 'axios'

export default class Mahjong extends React.Component<{}> {
    render() {
        return <MahjongList />
    }
}

class MahjongList extends React.Component<{}, { players: [] }> {
    componentDidMount(): void {
        axios.get(`http://localhost:7777/players`) // should return a json from the local mongoDB cluster
            .then(res => {
                const players = res.data
                this.setState({ players })
            })
            .catch(() => this.setState({ players: [] }))
    }
    render() {
        return <div>
            {this.state ? this.state.players.map((player: { name: String, id: Number }) => { // is there a way to not have to check for null state? It probably has something to do with the timing of componentDidMount, but it's not like react has a lateUpdate like libGDX
                return <div>{player.name} : {player.id}</div>
            }) : null}
        </div>
    }
}
import React from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'

export default class Mahjong extends React.Component<{}, { validUser: Boolean }> {
    componentDidMount() {
        this.setState({
            validUser: false
        })
    }
    render() {
        return <div>
            <button
                //onClick={(e) => { window.open("http://localhost:3000/auth/discord/callback") }}
            >
                test
            </button>
            <button
                onClick={async (e) => {
                    //axios.get("http://localhost:3000/checkAccessToken?accessToken=" + Cookies.get("accessToken"))
                    await axios.get(`http://discord.com/api/v10/users/@me/guilds`, {
                        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` }
                    })
                        .then(res => {
                            let validUser = res.data.some((guild: any) => guild.id == process.env.guildID)
                            this.setState({ validUser: validUser })
                            console.log(validUser)
                        })
                }}
            >
                {this.state ? this.state.validUser ? "Valid" : "Not Valid" : "test"}
            </button>

            <MahjongList />

        </div>
    }
}

class MahjongList extends React.Component<{}, { players: [] }> {
    /*componentDidMount(): void {
        axios.get(`http://localhost:7777/mahjong/players`) // should return a json from the local mongoDB cluster
            .then(res => {
                const players = res.data
                this.setState({ players })
            })
            .catch(() => this.setState({ players: [] }))
    }*/
    render() {
        return <div>
            {this.state ? this.state.players.map((player: { name: String, id: Number }) => { // is there a way to not have to check for null state? It probably has something to do with the timing of componentDidMount, but it's not like react has a lateUpdate like libGDX
                return <div>{player.name} : {player.id}</div>
            }) : null}
        </div>
    }
}
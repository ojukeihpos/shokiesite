import React, { useState, useEffect, useRef } from 'react'
import './commissions.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Container, Row } from 'react-bootstrap'
import TextareaAutosize from 'react-textarea-autosize'

export default class Commissions extends React.Component<{}, {
    extraNotesValue: string,
    extraNotesHeight: number,
}> {
    constructor({ }) {
        super({})

        this.state = {
            extraNotesValue: "",
            extraNotesHeight: 38,
        }
    }

    render() {
        return <div className="panel">
            <div className='background' />
            <div className='inner'>
                <div className="heading">Commissions!</div>
                <hr/>
                <Container>
                    <Row className="centered">
                        <div id="table01" className="table-wrapper">
                            <div className="table-inner">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>⬐ (๑˘︶˘๑) Yes!</th>
                                            <th>⬐ (｡•́︿•̀｡) No!</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>♥ WoL's / OC's</td>
                                            <td>✖</td>
                                            <td>Mech's / Anthros</td>
                                        </tr>
                                        <tr>
                                            <td>♥ Nudity <strong>(NO LALAFELL/LOLI)</strong></td>
                                            <td>✖</td>
                                            <td>Mounts</td>
                                        </tr>
                                        <tr>
                                            <td>♥ Casual-Wear / Light Armour</td>
                                            <td>✖</td>
                                            <td>Heavy Armor</td>
                                        </tr>
                                        <tr>
                                            <td>♥ Minions / Companions</td>
                                            <td>✖</td>
                                            <td>Sexual Acts</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <p id="text10"><em>sorry hroth players.... ;;</em></p>
                    </Row>
                </Container>
                <Container>
                    <label className='form-label'>Twitter Handle:</label>
                    <input className='form-control' type="text" placeholder="@" />
                    <label className='form-label'>Paypal Email:</label>
                    <input className='form-control' type="email" placeholder="abc@xyz.com" />
                    <label className='form-label'>Extra Notes:</label>
                    <TextareaAutosize
                        className='notes form-control'
                        minRows={4}
                        placeholder="Let me know anything else!" />
                    <br />
                </Container>
                <span className="p centered"><strong>PS : Please make sure your Twitter DMs are open so I can contact you! I'd rather not use e-mail.</strong></span>
                <br/>
                <Button variant="primary" type="button" formMethod=''>Submit</Button>
            </div>
        </div>
    }
}
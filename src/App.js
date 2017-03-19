import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.pChangeHandler = this.pChangeHandler.bind(this);
        this.state = {
            pros: [
                'Its really tasty!',
                'Its really tasty!',
                'Its really tasty!',
                'Its really tasty!',
                'Its really tasty!',
                ' '
            ],
            cons: ['Makes me fat', 'Too expensive', ' ']
        }
    }
    pChangeHandler = (e) => {
        let pros = this.state.pros;
        let num = e.target.id;
        this.state.pros[num] = e.target.value;
        if (pros[num] === '') {
            pros.splice(num, 1);
            this.setState({pros});
        } else if (pros[num] == pros[pros.length - 1]) {
            this.setState({pros});
            pros.push('');
        } else {
            this.setState({pros})
        }
    }
    cChangeHandler = (e) => {
        let cons = this.state.cons;
        let num = e.target.id;
        this.state.cons[num] = e.target.value;
        if (cons[num] === '') {
            cons.splice(num, 1);
            this.setState({cons});
        } else if (cons[num] == cons[cons.length - 1]) {
            this.setState({cons});
            cons.push('');
        } else {
            this.setState({cons})
        }
    }
    render() {
        const main = {
            display: 'flex',
            flexDirection: 'column',
            margin: '139px auto',
            width: '900px',
            height: '800px',
            border: '1px solid grey'
        }
        const header = {
            margin: '0',
            paddingTop: '20px',
            paddingBottom: '20px',
            textAlign: 'center',
            fontSize: '35.5px',
            backgroundColor: 'grey',
            color: 'white'
        }
        const twocols = {
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }
        const titles = {
            textAlign: 'center',
            fontSize: '30px',
            color: 'grey'
        }
        const pstyle = {
            height: '715px',
            border: '2px solid grey'
        }
        const listyle = {
            fontSize: '30px'
        }
        const inpStyle = {
            width: '402px',
            fontSize: '30px'
        }
        return (
            <div style={main}>
                <h1 style={header}>
                    Should I eat at McDonalds?
                </h1>
                <div style={twocols}>
                    <div style={pstyle}>
                        <div style={titles}>PROS</div>
                        <ol>
                            {this.state.pros.map((pros, index) => {
                                return (
                                    <li style={listyle}>
                                        <input id={index} style={inpStyle} value={this.state.pros[index]} onChange={this.pChangeHandler}></input>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                    <div style={pstyle}>
                        <div style={titles}>CONS</div>
                        <ol>
                            {this.state.cons.map((cons, index) => {
                                return (
                                    <li style={listyle}>
                                        <input id={index} style ={inpStyle} value={this.state.cons[index]} onChange={this.cChangeHandler}></input>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

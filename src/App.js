import React, {Component} from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.pChangeHandler = this.pChangeHandler.bind(this);
        this.state = {
            pros: ['']
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
    render() {
        return (
            <div>
                <div>
                    <div>pros</div>
                    <ul>
                        {this.state.pros.map((pro, index) => {
                            return (
                                <li>
                                    <input id={index} value={this.state.pros[index]} onChange={this.pChangeHandler}></input>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;

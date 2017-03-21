import React, {Component} from 'react';
import Todo from './Todo.jsx';
import WorkList from './WorkList.jsx';

export default class Main extends Component {
    onItemClick(item) {
    
    }
    constructor() {
        super();
        this.state = {
            line: [
                {
                    name: 'Work',
                    work: ['sth to do1'],
                    key: [1]
                }, {
                    name: 'Private',
                    work: ['sth to do2'],
                    key: [2]
                }
            ],
            active: false
        };
    }
    render() {
        return (
            <div >
                <Todo line={this.state.line}/>
                <WorkList line={this.state.line}/>
            </div>
        );
    }
};

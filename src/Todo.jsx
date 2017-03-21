import React, {Component} from 'react';

export default class Todo extends Component {
    addItem = (e) => {
        var ArrayofLines = this.props.line;
        ArrayofLines.push({name: this.todoInpname.value, work: ['sth again'], key: this.todoInpname.value.toUpperCase()});
        this.setState({line: ArrayofLines});
        this.todoInpname.value = "";
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.addItem}>
                        <input ref= {(a) => this.todoInpname = a}/>
                        <input type="submit" value='+'></input>
                    </form>
                    <Todoline entries={this.props.line}/>
                </div>
            </div>
        )
    }
};

class Todoline extends Component {
    render() {
        var todoEntries = this.props.entries;
        return (
            <ul className="theList">
                {todoEntries.map((item, i) => {
                    return <li key={i} onClick= {() => this.onItemClick(item)}>
                          {item.name}
                        + {item.key}
                        +{item.work}
                    </li>
                })
}
            </ul>
        )
    }
};

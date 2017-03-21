import React, {Component} from 'react';

export default class WorkList extends Component {
    addWork = (e) => {
        var ArrayofLines = this.props.line;
        ArrayofLines.push({work: this.inputRef.value});
        this.setState({line: ArrayofLines});
        this.inputRef.value = "";
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.addWork}>
                        <input ref= {(a) => this.inputRef = a}/>
                        <input type="submit" value='+'></input>
                    </form>
                    <Todoline2 entries={this.props.line}/>
                </div>
            </div>
        )
    }
};

class Todoline2 extends Component {
    render() {
        var todoEntries = this.props.entries;
        return (
            <ul className="theList">
                {todoEntries.map((item, i) => {
                    return <li key={i}>
                        ....................................................
                        <li>Title: {item.name}</li>
                        <li>Key: {item.key}</li>
                        <li>Worklist:{item.work}</li>
                    </li>
                })
}
            </ul>
        )
    }
};

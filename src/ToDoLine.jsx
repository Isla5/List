import React, {Component} from 'react';

export default class Todoline extends Component {
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
                })}
            </ul>
        )
    }
};

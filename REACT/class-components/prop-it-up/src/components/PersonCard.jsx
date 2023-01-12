import React, {Component} from 'react';


class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div className='App'>
                <h1>{lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}


export default PersonCard;
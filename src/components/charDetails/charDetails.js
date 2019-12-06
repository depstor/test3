import React, {Component} from 'react';
import './charDetails.css';
import SwapiService from '../../services/gotServices';

export default class CharDetails extends Component {

    SwapiService = new SwapiService();

    state = {
        char: true,
    }


    componentDidMount() {
        this.updateChar();
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.SwapiService.getAllPeople(charId)
            .then((char) => {
                this.setState({char})
            })
            
    }

    render() {
        if (!this.state.char) {
            return <span className='slect-error'>Please select a characted</span>
        }


        const {name, gender, height, mass} = this.state.char;
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{height}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{mass}</span>
                    </li>
                    {/* <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>First</span>
                    </li> */}
                </ul>
            </div>
        );
    }
}
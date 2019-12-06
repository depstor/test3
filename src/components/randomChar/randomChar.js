import React, {Component} from 'react';
import './randomChar.css';
import SwapiService from '../../services/gotServices';
import Spinner from '../spinner';
import ErrorMesage from '../errorMessage';

export default class RandomChar extends Component {



    SwapiService = new SwapiService();
    state = {
        char: {},
        loading: true,
        error: false,
    }



    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillMount() {
        clearInterval(this.timerId);
    }


    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        })
    }

    updateChar = () => {
        
        const id = Math.floor(Math.random()*87 + 1);
        this.SwapiService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
                
                // name : char.name, //name
                // gender: char.gender,
                // height: char.height, //born
                // mass: char.mass, //died
                
           
    }

    render() {
        console.log('render');
        const {char, loading, error} = this.state;
            const errorMessage = error ? <ErrorMesage/> : null;
            const spinner = loading ? <Spinner/> : null;
            const content = !(loading || error) ? <View char = {char}/> : null;
       
        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}


const View = ({char}) => {
    const {name, gender, height, mass} = char;
    return (
        <>
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Height</span>
                        <span>{height}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Mass</span>
                        <span>{mass}</span>
                    </li>
                </ul>
        </>
    )
}
import React, {Component} from 'react';
import './itemList.css';
import SwapiService from '../../services/gotServices';
import Spinner from '../spinner';


export default class ItemList extends Component {


    SwapiService = new SwapiService();

    state = {
        charList: null,
    }


    componentDidMount() {
        this.SwapiService.getAllPeople()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
          
    }
    
    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li key={i} 
                className="list-group-item"
                onClick={ () => this.props.onCharSelected(i)}>
                {item.name}
            </li>
            )
        })

    }
   

    render() {

        const {charList} = this.state;

        

        if(!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


export default class App extends Component {

    state = {
        sowRandomChar: true,
        selectedChar: null,
    };

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showandomChar: !state.showandomChar,
            }
        });
    };


    onCharSelected = (id) => {
        this.setState({
            selectedChar: id,
        })
    }


    render() {
        const char = this.state.sowRandomChar ? <RandomChar/> : null;

    return (
        <>            
        <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {char}
                        <button
                            className="toggle-btn"
                            onClick={this.toggleRandomChar}>Toggle</button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onCharselected={this.onCharSelected}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.selectedChar}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
    }
};


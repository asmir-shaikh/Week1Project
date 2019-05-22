import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class Apicall extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            info : [],
            ordlist : []
            
        }
    }
    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.031264,-78.4881806&radius=2000&types=restaurant&opennow=true&key="+API_KEY)
            .then(res => {
                const info = res.data.results;
                this.setState({ info })

            })
            
        
    }

    render() {
        return (
            <div>
                


                <ul>
                    {this.state.info.map(info => <li>{info.name} has a rating of {info.rating} and has a price level of {info.price_level}</li>)}
                </ul>

                



            </div>

        )
    }







}

export default Apicall;

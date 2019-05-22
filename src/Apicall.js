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
//AIzaSyAC9wnPs2Uxr3EfZt2J7AAyRi6CxD-b0uk
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

                

                <iframe
                    frameBorder="0" 
                    height = "500"
                    width = "1000"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAC9wnPs2Uxr3EfZt2J7AAyRi6CxD-b0uk
                    &center=38.031264,-78.4881806&q=Alderman+Road">
                </iframe>



            </div>

        )
    }







}

export default Apicall;

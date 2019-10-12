import React, { Component } from 'react';

var arr = [];
var a = JSON.parse(localStorage.getItem("StudentDetails"));


class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playername: "",
            country: "",
            twenty: "",
            oscore: "",
            tscore: ""

        }
    }


    handelAll = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handelsubmit = (event) => {

        // alert(JSON.stringify(this.state))
        event.preventDefault();
        arr.push(this.state);
        // console.log(arr);
        localStorage.setItem("StudentDetails", JSON.stringify(arr));


        console.log(a);

    }



    render() {
        return (
            <div style={{marginLeft:"50px"}}>
                <form onSubmit={this.handelsubmit}>

                    <label>Player Name</label> <br />
                    <input type="text" name="playername" placeholder="player Name" value={this.state.playername}
                        onChange={this.handelAll} /> <br />

                    <label>Country</label><br />
                    <input type="text" name="country" placeholder="country" value={this.state.country}
                        onChange={this.handelAll} /> <br />

                    <label>T20 Score</label><br />
                    <input type="text" name="twenty" placeholder="T20 score" value={this.state.twenty}
                        onChange={this.handelAll} /> <br />

                    <label>ODI Score</label> <br />
                    <input type="text" name="oscore" placeholder="Odi score" value={this.state.oscore}
                        onChange={this.handelAll} /> <br />

                    <label>Test Score</label><br />
                    <input type="text" name="tscore" placeholder="test score" value={this.state.tscore}
                        onChange={this.handelAll} /> <br />


                    <input type="submit" value="submit" />
                </form>
                {
                    a.map(items => {
                        return (
                            <div>
                                <ul>
                                    <li><p>{items.playername}</p></li>
                                    <li><p>{items.country}</p></li>
                                    <li><p>{items.twenty}</p></li>
                                    <li><p>{items.oscore}</p></li>
                                    <li><p>{items.tscore}</p></li>

                                </ul>


                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Button;
import React from 'react';
import ReactDOM  from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';
import "./index.css"

class Contact extends React.Component{
    constructor(){
        super();
        this.state={subject:"",body:""};
    }
    validateForm=event => {
        var subject=document.getElementById("subject").value;
        var body=document.getElementById("body").value;
        window.location.href="mailto:enteryourmailid@gmail.com="+ subject + "&body" + body;
        event.preventDefault();
        return false;
    };
    render(){
        return(
            <div class="heading">
                <div class="jumbotron text-center" id="heading">
                    <h1 class="myname">Xcode Emulators</h1>
                    <p class="myoccupation">A Passionate FrondEnd Developer</p>
                    <u1 class="nav nav-pills nav-justified" id="navigation">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">
                                Home
                            </a>
                            </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/youtube">
                                Youtube
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/contact">
                                Contact
                            </a>
                        </li>
                    </u1>

                </div>

                <div class="container" id="mailme">
                    <div class="row">
                        <div class="col-sm-8">
                            <form
                            class="form-horizontal"
                            onSubmit={this.validateForm}
                            target="_blank"
                            method="GET"
                            >
                                <div class="form-group form-group-lg">
                                    <label class="skills" for="Subjects">
                                        Name
                                    </label>
                                    <input type="text"
                                    id="subject"
                                    class="form-control"
                                    required
                                    />
                                </div>
                                <div class="form-group form-group-lg">
                                    <label class="skills" for="Body">
                                        Your Message
                                    </label>
                                    <textarea id="body" class="form-control" rows="5" required/>
                                    </div>
                                    <input type="submit" value="Send" id="navigation" class="btn btn-primary"
                                    />

                            </form>
                        </div>
                    </div>
                
                 </div>
                 <div class="jumbotron text-center" id="footer">
                                        <u1 class="nav justify-content-center">
                                            <li class="nav-item">
                                                <a href="https://www.linkedin.com/in/athiban-p-373110230/"
                                                class="fa fa-linkedin nav-link"
                                                style={{color:"blue"}}
                                                />
                                            </li>
                                            <li class="nav-item">
                                                <a href="https://github.com/Athiban-32"
                                                class="fa fa-github nav-link"
                                                style={{color:"blue"}}
                                                />
                                            </li>
                                            <li class="nav-item">
                                                <a href="https://www.youtube.com/channel/UCdDTr1MqIpeDXbolsHJ8hlw"
                                                class="fa fa-youtube nav-link"
                                                style={{color:"red"}}
                                                />
                                            </li>
                                            <li class="nav-item">
                                                <a href="https://www.instagram.com/xcodeemulators/"
                                                class="fa fa-instagram nav-link"
                                                style={{color:"red"}}
                                                />
                                            </li>
                                            <li class="nav-item">
                                                <a href="https://twitter.com/Athiban_32"
                                                class="fa fa-twitter nav-link"
                                                style={{color:"blue"}}
                                                />
                                            </li>

                                        </u1>
                                    </div>
            </div>
        );
    }
}

export default Contact;
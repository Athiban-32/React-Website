import React from 'react';
import ReactDOM  from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Routes
} from 'react-router-dom';

class Youtube extends React.Component{
    constructor(){
        super();
    }
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
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="embed-responsive embed-responsive-16by9">
                            <br />
                            <iframe class="embed-responsive-item" 
                                src="https://www.youtube.com/embed/12A10MZXATM" 
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen
                                />
                                </div>
                                </div>
                                <div class="col-sm-4">
                            <div class="embed-responsive embed-responsive-16by9">
                            <br />
                            <iframe class="embed-responsive-item"   
                            src="https://www.youtube.com/embed/OuitNdXCfPQ"  
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowfullscreen
                             />
                             </div>
                             </div>
                
                             <div class="col-sm-4">
                            <div class="embed-responsive embed-responsive-16by9">
                            <br />
                            <iframe class="embed-responsive-item" 
                            src="https://www.youtube.com/embed/vb1JAiyU-HI" 
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            />
                            </div>
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

export default Youtube;
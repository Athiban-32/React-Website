import React from 'react';
import ReactDOM  from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Routes
} from 'react-router-dom';

class Home extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <body>
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
                            <div class="rounded-circle">
                                <img src="https://raw.githubusercontent.com/Athiban-32/logo/main/logo.png"
                                class="rounded-circle mx-auto d-block"
                                alt="Hii this is Xcode Emulators"
                                width="140px"
                                height="160px"/>
                            </div>
                            <br />

                        </div>
                        <div class="col-sm-8">
                            <h2 class="myskills">My Skills</h2>
                            <br/>
                            <p class="skills">
                                I am much Interested to learn Machine Learning.I having some Knowledge in Android App Development.
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2 class="languages">Programming Language</h2>
                            <br/>
                            <u1 class="skills">
                                <li>
                                 HTML,CSS,JavaScript
                                 </li>
                                 <li>
                                    C,C++,Java
                                 </li>
                                 <li>
                                    MySql,Oracle
                                 </li>
                            </u1>
                            </div>
        
                            <div class="col-sem-6">
                                <h2 class="Currently Studying">Currently Studying</h2>
                                <br/>
                                <ul class="study">
                                <li>
                                    I am Currently Studying React JS
                                </li>
                                <li>
                                    Machine Learning
                                </li>
                                <li>
                                    Web Development
                                </li>
                                </ul>
                                </div>   
                                <br/>   
                                </div>
                                <div class="col-sem-12">
                                    <h2 class="myskills">My Projects</h2>
                                    <br/>
                                    <table class="table table-dark table-stripped">
                                        <thead>
                                            <tr>
                                                <th>Project Domain</th>
                                                <th>Languages Used</th>
                                                <th>Project Link</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Full Stack Development</td>
                                                <td>Java,Mysql</td>
                                                <td>
                                                    <a href={"https://github.com/Athiban-32/Hospital-Management-System-Using-Java-Netbeans"}>Hospital Management System</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Android Application</td>
                                                <td>Java</td>
                                                <td>
                                                    <a href={"https://github.com/Athiban-32/Image-classification-using-Tensorflowlite"}>Image Classification</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Simple Python Project</td>
                                                <td>Python</td>
                                                <td>
                                                    <a href={"https://github.com/Athiban-32/Conver-Day-to-Night-Image"}>Day image to night image</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Android Application</td>
                                                <td>Java</td>
                                                <td>
                                                    <a href={"https://github.com/Athiban-32/QRCode"}>QRCode</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
            </body>
        );
    }
}

export default Home;
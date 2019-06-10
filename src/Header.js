import React, { Component } from 'react';
import Background from './Mobile.png';
import './Header.css'
import Background2 from'./Mobile1.png'
import Background3 from './Mobile2.png'
class Header extends Component {
    render() {
        return (
            <header>
                <hr className="line0"></hr>
            <img src={Background} width="700px"  height="500px" className="imgclass"/>
                <h1 className="class1">Your PG Manager</h1>
                <p className="class2">Save Your Time,Effort and Money with EazyPG</p>
                <button className="class3">Watch Demo</button>
                <button className="class4">Download App</button>
                <hr className="line"></hr>
                        <a className="tag1" href="#"><strong>2</strong> Android Apps</a>
                    <a className="tag2" href="#"><strong>400+</strong> PG ONBOARDED</a>
                    <a className="tag3" href="#"><strong>500+</strong>TENANTS VERIFIED</a>
                    <h1 className="class5">Current Status</h1>
                <hr className="line2"></hr>
                <div className="divtag">

                <iframe className="video"width="560" height="315" src="https://www.youtube.com/embed/rDAqWMYgI2g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <p className="para1"><strong>Digital Solutions </strong>Boost Your Revenue</p>
                    <div className="divtag2">
                    In this ever evolving technological world, leverage technology to manage redundant day to day task in managing a rental property

Watch this demo<br></br> to know how!
                    </div>
                    <button className="button1">Download App Now</button>
                <hr className="line"></hr>
                <div className="divtag3">
                    <h1 className="h1tag">Why use Our Platform</h1>
                    <img src={Background2} width="500px"  height="500px" className="imgclass1"/>
                    <h1 className="h1tag5">Get Your Rent &  Bills On Time</h1>
                    <ul className="list2">
                        <li>Automatic Rent & Bill Calculator</li>
                        <li>Multiple Call/SMS Reminders</li>
                        <li>Automatic Late Fine</li>
                    </ul>
                </div>
                <div className="divtag4">
                <hr className="line4"></hr>
                <img src={Background3} width="500px"  height="500px" className="imgclass2"/>
                <h1 className="h1tag6">Make Your PG Smart</h1>
                <ul className="list2">
                    <li>Online Rental agreement & police Verification</li>
                    <li>Automatic Attendance</li>
                    <li>One-click Accounts manager</li>
                </ul>
                </div>
                <hr className="line3"></hr>
                <div className="divtag5">
                    <h1 className="h1tag7">Save Your <strong>Time, Effort & Money</strong> <br></br>
With<strong> EazyPG Manager App</strong></h1>
                <button className="button3">Book 30 Days Free Trial Now!</button>
                </div>
                <hr className="line5"></hr>
                <div className="divtag8">
                <iframe className="iframeclass"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.153547877065!2d77.11483781442078!3d28.744832182373493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01fb2eca436f%3A0xc11e99f8d87e425f!2sEAZYPG+-+BOYS+PGs%2FHOSTEL+NEAR+DTU+COLLEGE!5e0!3m2!1sen!2sin!4v1560123711265!5m2!1sen!2sin" width="500" height="500" allowfullscreen></iframe>
                
                <h1 className="h1tag9">Get In Touch</h1>
                <div className="block1">  <h1 className="h1tag10">Contact</h1> 
                <p>Trention Technologies Pvt<br></br> Ltd, DTU IIF, Delhi<br></br> Technological University,<br></br> Main Bawana Road, Delhi<br></br>-110042</p>
                </div>
                <div className="block2">  <h1 className="h1tag11">Location</h1> 
                <p>Phone :+91 886232632272<br></br>
                Email:<br></br>
                support@eazypg.net
                </p>
                </div>
    
              
                
                </div>
                </div>
            </header>
        )
    }
}

export default Header

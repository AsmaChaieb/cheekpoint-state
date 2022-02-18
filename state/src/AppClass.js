import React, { Component } from 'react'
import './AppClass.css'

class AppClass extends Component {
    constructor(props){
        super(props)
            this.state={
                fullName :"Asma  ",
                bio :"I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well",
                profession : "Full stack Web Developer",
                imgSrc : "imaage.webp",
                show : false ,
                count: 0 ,
                date: new Date()
            }
        
    }
    show=()=>{
        this.setState({show:!this.state.show})
    }
    tick(){
        this.setState({date: new Date()})
    };
    componentDidMount(){
        setInterval(()=>this.tick(), 1000)
    }
    render() {

        return (
        <div className='main'>
            <h1>
                Cheeckpoint State
            </h1>
            <h2>Please Click on the Button to show my Profile</h2>
            {this.state.show ?<div className='profile'>
            <h2> my name is {this.state.fullName}</h2><p> {this.state.bio}</p>
            <h2> and I am a {this.state.profession}</h2>
            <img src={this.state.imgSrc}/></div> : null } 
            
            <button className='btnName' onClick={this.show}> Show name</button> <br/>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>


        </div>
        )
    }
}
export default AppClass
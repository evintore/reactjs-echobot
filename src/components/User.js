import React, {Component} from 'react'

class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            message:[],
        };        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
    }

    handleChange(event) {        
        this.setState({user: event.target.value });   

    }
    handleAreaChange(event){
     
        if(this.state.user !==''){

            let newmessage=[...this.state.message]
            newmessage.push("Me:" + this.state.user)
            newmessage.push("Bot:" + this.state.user)
            this.setState({message: newmessage , user:''})

        }
     /* else{
            alert('Empty Message Sent');
        } */
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="msgInput" onChange={this.handleChange} type="text" placeholder="Input Message..." value={this.state.user}/>
                    <button className="msgSendBtn" onClick={this.handleAreaChange}>Submit</button> <br /><br />
                    <textarea className="echoBot" value={this.state.message.join('\n')} /> 
                </form>
            </div>
        )
    }
}
export default User;
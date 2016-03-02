Signupform=React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
  let data={};
  data.currentUser=Meteor.user();
  return data;
  },
  getInitialState(){
    return{
      message:"",
      messageClass:"hidden"
    }
  },
  displayError(message){
    this.setState({message:message,messageClass:"alert alert-danger registerError"});
  },
  handleSubmit(e){
e.preventDefault();
this.setState({message:"",messageClass:'hidden'});
var that=this;
var first_name=ReactDOM.findDOMNode(this.refs.first_name).value.trim();
var last_name=ReactDOM.findDOMNode(this.refs.last_name).value.trim();
var email=ReactDOM.findDOMNode(this.refs.email).value.trim();
var password=ReactDOM.findDOMNode(this.refs.password).value.trim();
var user={email:email,password:password,profle:{fullname:(first_name+last_name).toLowerCase(),first_name:first_name,last_name:last_name,avatar:"http://placehold.it/150x150",friends:[]}};
Accounts.createUser(user,function(e){
  FlowRouter.go('/dashboard');
  if(e){
    that.displayError(e.reason);
  }
});

  },
render(){
   return(
    <div className="row">
      <div className="signup">
        <h1>Sign Up</h1>
        <p className="text-muted">
          It's free and always will be
        </p>
      </div>
      <form onSubmit={this.handleSubmit}>
        <div className="col-sm-9">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text"  ref="first_name" name="first_name" placeholder="First Name" className="form-control"/>
              </div>
              <div className="col-md-6 form-group">
              <input type="text" ref="last_name" name="last_name" placeholder="Last Name" className="form-control"/>
              </div>
            </div>
            <div className="form-group">
              <input className="form-control" ref="email" name="email" placeholder="Email or mobile number" type="email"/>

            </div>
            
            <div className="form-group">
              <input className="form-control" ref="password" name="password" placeholder="New Password" type="password"/>
            </div>
            <button type="submit" className="btn btn-sucess btn-md">Sign Up</button>
            <span className="this.state.messageClass">{this.state.message}</span>
        </div>

    </form>
    </div>
  )
}
});

Header=React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData:function(){
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
this.setState({message:message,messageClass:"alert alert-danger message"});
  },
  handleSubmit(e){
    e.preventDefault();
    this.setState({message:"",messageClass:'hidden'});
    var that =this;
    var email=ReactDOM.findDOMNode(this.refs.email).value.trim();
    var password=ReactDOM.findDOMNode(this.refs.password).value.trim();
    Meteor.loginWithPassword(email,password,function(e){
      if(e){
        console.log(e.reason);
        that.displayError(e.reason);
      }
      else{
      FlowRouter.go('/dashboard');
      }
    });

  },
  render(){
    return(<div className="navbar navbar-react">
    <span>
      <i className="fa fa-facebook"></i>
      akebook
      </span>
      <div className="collapse navbar-collapse" id="navbar">
      <form className="navbar-form navbar-right" role="form" onSubmit={this.handleSubmit}>
      <div className="input-group">
      <span className="input-group-addon">
      <i className="fa fa-user"></i>
      </span>
      <input type="text" id="email" className="form-control" ref="email" placeholder="Email Address"/>
      </div>
      <div className="input-group">
      <span className="input-group-addon">
      <i className="fa fa-lock"></i>
      </span>
      <input placeholder="Password" type="password" ref="password" className="form-control"/>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      <div className={this.state.messageClass}>
      {this.state.message}
      </div>
      </form>

      </div>
    </div>

    )
  }
});

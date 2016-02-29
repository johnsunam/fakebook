Header=React.createClass({
  render(){
    return(<div className="navbar navbar-react">
    <span>
      <i className="fa fa-facebook"></i>
      akebook
      </span>
      <div className="collapse navbar-collapse" id="navbar">
      <form className="navbar-form navbar-right" role="form">
      <div className="input-group">
      <span className="input-group-addon">
      <i className="fa fa-user"></i>
      </span>
      <input type="text" id="email" className="form-control" placeholder="Email Address"/>
      </div>
      <div className="input-group">
      <span className="input-group-addon">
      <i className="fa fa-lock"></i>
      </span>
      <input placeholder="Password" type="password" ref="password" className="form-control"/>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      </form>
      </div>
    </div>

    )
  }
});

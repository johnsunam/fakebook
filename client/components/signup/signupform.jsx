Signupform=React.createClass({
render(){
  return(
    <div className="row">
      <div className="signup">
        <h1>Sign Up</h1>
        <p className="text-muted">
          It's free and always will be
        </p>
      </div>
      <form>
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
              <input className="form-control" ref="emil" name="email" placeholder="Email or mobile number" type="email"/>
            </div>
            <div className="form-group">
              <input className="form-control"  placeholder="Re-enter email or mobile number" type="email"/>
            </div>
            <div className="form-group">
              <input className="form-control" ref="password" name="password" placeholder="New Password" type="password"/>
            </div>
            <button type="submit" className="btn btn-sucess btn-md">Sign Up</button>

        </div>

    </form>
    </div>
  )
}
});

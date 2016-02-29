Navbar=React.createClass({
  render(){
    return(
      <div className="navbar navbar-blue navbar-fixed-top">
      <div className="navbar-header">
     <button type="button" className  ="navbar-toggle" data-toggle="collapse" data-target="navbar" aria-expanded="false">
       <span className="sr-only"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
     </button>
     <a className="navbar-brand logo" href="/dashboard">
     <i className="fa fa-facebook"></i></a>
   </div>
      <nav className="collapse navbar-collapse">
      <form className="navbar-form navbar-left" role="form">
      <div className="input-group input-group-sm bs-example">
      <input type="text" ref="searchText" placeholder="Search Fakebook" className="form-control tt-query" id="typeahead"/>
      <div className="input-group-btn searchBtn">
      <button type="submit" className="btn btn-default">
      <i className="fa fa-search"></i></button></div>
      </div>
      </form>
      <ul className="nav navbar-nav">
      <li>
      <a href="/dashboard"><i className="fa fa-home"></i></a>
      </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
      <li className="dropdown">
      <a data-toggle="dropdown" href="#" className="dropdown-toggle">
      <i className="fa fa-user"></i>
      john sunam
      </a>

      <ul className="dropdown-menu">
    <li><a href="/profile">Edit Profile</a></li>
    <li><a href="/logout">Logout</a></li>
      </ul>
</li>
      </ul>
        </nav>
      </div>
    )
  }
});

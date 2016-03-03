Navbar=React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    let data={};
    data.currentUser=Meteor.user();
    return data;
  },
  componentDidMount(){
    var users=Meteor.users.find({},{fields:{profile:1}}).fetch();
    var usernames=[];
    users.map(function(user){
      usernames.push(user.profile.fullname);
    });
  //  $('#typeahead').typeahead({
    //  name:'users',
      //local:usernames
    //});
  },
  handleSubmit(e){
    e.preventDefault();
    FlowRouter.go('/user/'+(this.refs.searchText.value.trim()));
  },
  render(){
    var fullname="";
    if(this.data.currentUser && this.data.currentUser.profile){
      fullname=this.data.currentUser.profile.first_name +' ' + this.data.currentUser.profile.last_name;
    }
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
      <form className="navbar-form navbar-left" role="form" onSubmit={this.handleSubmit}>
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
      {fullname}
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

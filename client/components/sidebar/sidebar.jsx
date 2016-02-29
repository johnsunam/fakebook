Sidebar=React.createClass({
  links:[
    {id:1,href:"/profile",icon:"fa fa-user fa-2x",text:"profile"},
    {id:2,href:"/message",icon:"fa fa-comment fa-2x",text:"message"},
    {id:3,href:"/friends",icon:"fa fa-user fa-2x",text:"friends"},
    {id:4,href:"/dashboard",icon:"fa fa-rss fa-2x",text:"News feed"}
  ],
  render(){
    var row= this.links.map(function(link){
      return(
        <li key={link.id}>
        <a href={link.href}><i className={link.icon}></i>{link.text}
        </a>
        </li>
      )
    });
    return(
      <div className="column col-sm-2 col-xs-1 sidebar-offcanvas">
      <ul className="nav">
      <li>
      <a href="#" className="visible-xs text-center">
      <i className="fa fa-list-alt"></i>
        </a>
      </li>
      </ul>
      <ul className="nav hidden-xs" id="lg-menu">
      {row}
      </ul>
      </div>
    )
  }
});

Ad=React.createClass({
  render(){
  var image=this.props.ad.image ? <p><img className="img-thumbnail" alt="" src={this.props.ad.image} /></p>:"";
    return(
          <div className="panel panel-default ad">
      <div className="panel panel-header" >
      <h4>{this.props.ad.title}</h4>
      </div>
      <div className="panel-body">
{image}
<hr/>
{this.props.ad.text}
      </div>
      </div>
    )
  }
});

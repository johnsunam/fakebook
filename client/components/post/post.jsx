Post=React.createClass({
  render(){
    var dimage="";
    if(this.props.post.imageurl){
      dimage=(
        <div>
        <div className="panel-thumbnail">
        <img src={this.props.post.imageurl} alt="" className="img-thumbnail img-responsive postimage"/>
        </div>
        </div>
      );
    }
    return(
      <div className="panel panel-white post col-md-12">
      <div className="post-heading">
      <div className="pull-left image">
      <img  className="img-circle avatar" src="http://placehold.it/48x48" alt=""/>
      </div>
      <div className="pull-left meta">
      <div className="title h5">
      <b>John sunam</b>&nbsp;
      <span className="text-muted">made a post.</span>
      </div>
      <h6 className="text-muted time">an hour ago</h6>
      </div>
      </div>
      <div className=" col-md-12 post-description">
      <div className="col-md-12">
    {this.props.post.message}
      <br/>
      </div>
      <div className="col-md-12">
{dimage}
<br/>
      </div>
      <div className="action">
      <a href="#" className="btn btn-default stat-item"><i className="fa fa-thumbs-up icon"></i>like</a>&nbsp;
      10 likes
      </div>
      </div>
      <div className="col-md-12 post-footer">
      comment list
      </div>
      </div>
    )
  }
});

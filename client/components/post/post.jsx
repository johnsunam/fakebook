Post=React.createClass({
mixins:[ReactMeteorData],
getMeteorData(){
  return{
    currentUser:Meteor.userId()
  }
},
likePost(e){
  e.preventDefault();
  var postid=this.props.post._id;
  Meteor.call("likePost",postid,this.data.currentUser);
},
renderLikes(){
  var likes='';
  var likesub=0;
  var currentUser=String(Meteor.userId());
  if(this.props.post.likes.indexOf(currentUser)!==-1){
    likes='you and';
    likesub=1;
  }
  switch (this.props.post.likes.length-likesub) {
    case 0:
    return likesub >0 ? 'you like this': '';
    case 1:
    return likesub>0 ? 'you and 1 other person like this':'1 other person like this';
      break;
    default:
    return likes+ (this.props.post.like.length-sublike)+ 'people like this';

  }
},
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
      <Avatar user={this.props.post._id} klass="img-circle avatar"/>

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
      <a href="#" onClick={this.likePost} className="btn btn-default stat-item"><i className="fa fa-thumbs-up icon"></i>like</a>&nbsp;
      {this.renderLikes(this.props.post.likes.length())}
      </div>
      </div>
      <div className="col-md-12 post-footer">
      comment list
      </div>
      </div>
    )
  }
});

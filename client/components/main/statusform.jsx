Statusform=React.createClass({
  getInitialState(){
    return{
      image:"",
      filename:""
    }
  },
  uploadFile(e){
e.preventDefault();
var that=this;
FS.Utility.eachFile(e,function(file){
  Images.insert(file,function(err,fileobj){
    that.setState({image:fileobj._id,filename:fileobj.data.blob.name});
    alert(this.state.image);
  });
});

  },
  handleSubmit(e){
    e.preventDefault();
    var message=this.refs.sharing.value;
    var imageid=this.refs.imageid.value;
    alert(imageid);
     if(imageid){
       var image=Images.findOne({_id:imageid});
       var imageurl=image.url();
     }
     Meteor.call('Post.insert',message,imageid,imageurl,function(e){
       if(e){
         console.log(e);
       }

     })
        this.setState({image:"",filename:""});
        this.resetFields();
  },
  resetFields(){
    ReactDOM.findDOMNode(this.refs.sharing).value="";
    ReactDOM.findDOMNode(this.refs.imageid).value="";
    ReactDOM.findDOMNode(this.refs.sharing).focus();
  },
  render(){
    return(
      <div className="panel panel-default">
      <div className="panel-heading">
      Update Status
      </div>
      <form className="form center-block"onSubmit={this.handleSubmit}>
      <input type="hidden" ref="imageid" className="form-control" value={this.state.image}/>
      <div className="panel-body">
      <div className="form-group">
      <textarea className="form-control" ref="sharing" placeholder="what do u want to share?">
      </textarea>
      <h3>{this.state.filename||''}</h3>
      </div>
      </div>
      <div className="panel-footer">
      <div>
      <ul className="pull-left list-inline">
      <li>
      <input type="file" onChange={this.uploadFile} ref="file" className="filepicker" id="fie"/>
      </li>
      </ul>
      <button className="btn btn-primary btn-sm postbutton">post
      </button>
      </div>
      </div>
        </form>
      </div>
    )
  }
});

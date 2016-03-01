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
  Images.insert(file,function(e,fileobj){
    that.setState({image:fileobj.id,filename:fileobj.data.blob.name});
  });
});

  },
  render(){
    return(
      <div className="panel panel-default">
      <div className="panel-heading">
      Update Status
      </div>
      <form className="form center-block">
      <input type="hidden" ref="imageid" className="form-control" value={this.state.image}/>
      <div className="panel-body">
      <div className="form-group">
      <textarea className="form-control" placeholder="what do u want to share?">
      </textarea>
      <h3>{this.state.filename||''}</h3>
      </div>
      </div>
      </form>

      <div className="panel-footer">
      <div>
      <ul className="pull-left list-inline">
      <li>
      <input type="file" onChange={this.uploadFile} ref="file" className="filepicker" id="fie"/>
      </li>
      </ul>
      <button className="btn btn-primary">post
      </button>
      </div>
      </div>
      </div>
    )
  }
});

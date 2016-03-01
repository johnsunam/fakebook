Statusform=React.createClass({
  render(){
    return(
      <div className="panel panel-default">
      <div className="panel-heading">
      Update Status
      </div>
      <div className="panel-body">
      <form>
      <div className="form-group">
      <textarea className="form-control" placeholder="what do u want to share?">
      </textarea>
      </div>
      </form>
      </div>
      <div className="panel-footer">
      <div>
      <ul className="pull-left list-inline">
      <li>
      <input type="file" ref="file" className="filepicker" id="fie"/>
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

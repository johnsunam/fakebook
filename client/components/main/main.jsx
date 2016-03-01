Main=React.createClass({
  render(){
    adobj={id:1,title:"some company",image:"http://placehold.it/150x150",text:"my company"}
    return(
      <div className="col-sm-9 col-sm-11 " id="main" >
      <div className="full col-sm-9">
      <div className="row">
      <div className="col-sm-9">
      <Statusform/>
      <Post/>
      <button className="btn btn-sm">more</button>
      </div>
      <div className="col-sm-3">
       <Ad ad={adobj}/>
      <div>
      </div>
      </div>
      </div>
      </div>
      </div>

    )
  }
});

Main=React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    let data={};
    data.posts=[];
    data.ads=[];
    data.posts=Posts.find({},{sort:{createdAt:-1}}).fetch();
    data.ads=DBAds.find({},{}).fetch();
    return data;
  },
  render(){
    adobj={id:1,title:"some company",image:"http://placehold.it/150x150",text:"my company"}
    posts=this.data.posts.map(function(record){
    return  <Post key={record.id} post={record}/>
    });
    return(
      <div className="col-sm-9 col-sm-11 " id="main" >
      <div className="full col-sm-9">
      <div className="row">
      <div className="col-sm-9">
      <Statusform/>
      {posts}
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

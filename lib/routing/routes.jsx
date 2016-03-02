publicRoutes=FlowRouter.group({
  name:'publicroutes'
});
privateRoutes=FlowRouter.group({
  name:'privateroutes',
  triggersEnter:[function(context,redirect){
  if(!Meteor.userId())
  {
    return FlowRouter.go('/');
  }
}]
});
publicRoutes.route('/',{
  name:'Home',
  action:function(){
    ReactLayout.render(Homelayout,{})
  }

});
privateRoutes.route('/dashboard',{
  name:'Dashboard',
  action:function(){
    ReactLayout.render(Layout,{
  sidebar:<Sidebar/>,
  content:<Main/>
    })
  }

});
publicRoutes.route('/logout',{
  name:'Logout',
  action:function(){
    Meteor.logout(function(){
      FlowRouter.go('/')
    });
  }
});

Meteor.methods({
  'Post.insert':function(message,imageid,imageurl){
    var post={
      user:Meteor.user(),
      createdAt:new Date(),
      image:imageid,
      imageurl:imageurl,
      message:message
    };
    Posts.insert(post);
  }
});

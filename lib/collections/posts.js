Posts = new Mongo.Collection('posts');

Posts.allow({
    // User must be logged in to post
    insert: function (userId, doc) {
        return !! userId;
    }
});

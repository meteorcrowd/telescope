Posts = new Mongo.Collection('posts');

Posts.allow({
    // User must be logged in to post
    insert: function (userId, doc) {
        return !! userId;
    }
});

Meteor.methods({
    postInsert: function (postAttributes) {
        /*
        Insert a post into the database
        checking attributes
        and adding user and date fields
        */

        // Check fields for safety
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            url: String
        });

        // Get the current user
        var user = Meteor.user();

        // Extend the post object with user attributes and submssion date
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });

        // Insert the post
        var postId = Posts.insert(post);

        // Return ID of new post
        return {
            id: postId
        }
    }
});

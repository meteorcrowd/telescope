if (Posts.find().count() === 0){
    Posts.insert({
        title: "Meteor",
        url: "http://meteor.com"
    });

    Posts.insert({
        title: "Meteor Forums",
        url: "http://forums.meteor.com"
    });

    Posts.insert({
        title: "Meteor Documentation",
        url: "http://docs.meteor.com"
    });
}

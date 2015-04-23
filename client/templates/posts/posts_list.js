var postsData = [
    {
        title: "Introducing Telescope",
        url: "http://sachagreif.com/introducing-telescope/"
    },
    {
        title: "Meteor",
        url: "http://meteor.com/"
    },
    {
        title: "Meteor Forum",
        url: "http://forum.meteor.com/"
    },
];

Template.postsList.helpers({
    posts: postsData
});

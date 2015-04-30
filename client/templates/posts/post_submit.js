Template.postSubmit.events({
    'submit form': function (event) {
        event.preventDefault();
        console.log('submitted');

        var post = {
            url: $(event.target).find('[name=url]').val(),
            title: $(event.target).find('[name=title]').val()
        }

        post._id = Posts.insert(post);
        Router.go('postPage', post);
    }
});

Template.postSubmit.events({
    'submit form': function (event) {
        event.preventDefault();
        console.log('submitted');

        var post = {
            url: $(event.target).find('[name=url]').val(),
            title: $(event.target).find('[name=title]').val()
        }

        Meteor.call('postInsert', post, function(error, result) {
            // display the error to the user and abort
            if (error) {
                return alert(error.reason):
            }
        }):

        Router.go('postPage', { _id: result._id });
    }
});

$(function() {

    userList = Backbone.Collection.extend({
        initialize: function() {

        }
    });

    listView = Backbone.View.extend({

        tagName: 'li',

        events: {
            'click #add-input': 'getFriend',
        },

        initialize: function() {
            var thisView = this;
            this.generallist = new userList;
            _.bindAll(this, 'render');
            this.generallist.bind("add", function(model) {
                thisView.render(model);
            })
        },

        getFriend: function() {
            var user_name = $('#input').val();
            this.generallist.add({
                name: user_name
            });
        },

        render: function(model) {
            $("#userlist").append("<li>" + model.get("name") + "</li>");
            console.log('rendered')
        },

    });

    var view = new listView({
        el: 'body'
    });
});
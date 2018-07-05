define([
        "jquery",
        "bootstrap",
        "popper",
        "backbone",
        "text!template/admin.html",
        "underscore"
    ],
    function($, popper, backbone, underscore, admintext) {
        $(function() {
            userList = Backbone.Collection.extend({
                initialize: function() {
                }
            });

            listView = Backbone.View.extend({
                el: '#inputtext',
                template: _.template(admintext),

                tagName: 'li',

                events: {
                    'click #add-input': 'getList',
                    'click #nav-listview-tab': 'onclick',
                },


                initialize: function() {
                    var thisView = this;
                    this.generallist = new userList;
                    _.bindAll(this, 'render');
                    this.generallist.bind("add", function(model) {
                        thisView.render(model);
                    })
                },
                onclick: function() {
                    $("#inputtext").append(this.template);

                },
                getList: function() {
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

    });

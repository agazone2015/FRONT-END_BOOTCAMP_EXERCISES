(function($) {

    $.fn.green = function() {
        console.log(this);
        return this.addClass("green");
    };

    // 1.
    $(".grid.grid-12").green();

    // 2.
    $(".list a[href*='http']").not(".list a[href*='https']").green();

    // 3.
    $("input:radio, input:checkbox").not(":checked").green();

    // 4.
    $("input:checkbox").not(":checked").green();
    
    // 5.
    $(".text p:empty:first").green();

    // 6.
    $(".pagination-item:not(span)").green();
    
    

    
     var nav = $(".nav");

    $("#toggle-nav").on("click", function() {

        var opened = nav.data("opened");

        nav.stop().transition({
            x: opened ? 0 : nav.outerWidth()
        });

        nav.data("opened", opened ? false : true);
        
    });
    
    
    
      function createUserUI(name) {
        return "<li>" + name + "</li>";
    }

    var form = $(".form"),
        input = form.find("input[name='user']"),
        list = $("<ul></ul>").insertBefore(form);

    form.on("submit", function(e) {

        e.preventDefault();

        var name = $.trim( input.val() );

        if(name === "") {
            input.addClass("invalid");
            return;
        }

        input.removeClass("invalid").val("");

        list.append( createUserUI(name) );

    });
    
    
    
        var API_URL = "https://jsonplaceholder.typicode.com/users",
        template = $("#userTemplate").html();

    function showUsers(data) {

        var regex = /\{\{ *(\w+) *\}\}/g;
        var lista = $("<ul></ul>");

        $.each(data, function(i, user) {

            var item = $("<li></li>"),
                templateCopy = template,
                found;

            while(found = regex.exec(templateCopy)) {

                var localRegex = new RegExp("\\{\\{ *" + found[1] + " *\\}\\}", "g");

                templateCopy = templateCopy.replace(localRegex, user[found[1]]);

            }

            item.append(templateCopy).appendTo(lista);

        });

        lista.appendTo(".spis");
    }

    $("#getUsers").on("click", function() {

        $.getJSON(API_URL)
            .done(function(data) {
                showUsers(data);
            })
            .fail(function() {
                $(".spis").append("<ul><li>Wystąpił błąd</li></ul>");
            });

    });


})(jQuery);
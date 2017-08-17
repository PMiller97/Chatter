$(document).ready(function () {
    $("#getChats").click(
        function () {
            $.get("@Url.Action("TestJson","Chats")", function (serverResponse) {
                var jsonTest = JSON.parse(serverResponse);
                console.log(jsonTest);

                //var ul = $("<ul>", { id: "messageList", "class": "bg-primary" });
                //$("#response").append(ul);

                $.each(jsonTest, function (inx, val) {
                    var messageClass = ["message"];
                    var p = $("<p>", { id: "p" + inx, "class": messageClass });
                    p.text(val.Message);
                    $("#postSection").append(p);


                    $.get("@Url.Action("TestJson","Chats")", function (serverResponse) {
                        var jsonTest = JSON.parse(serverResponse);
                        console.log(jsonTest);

                        //var ul = $("<ul>", { id: "messageList", "class": "bg-primary" });
                        //$("#response").append(ul);

                        $.each(jsonTest, function (inx, val) {
                            var userNameClass = ["userName"];
                            var p = $("<p>", { id: "p" + inx, "class": userNameClass });
                            p.text(val.UserName);
                            $(".message").append(p);
                        });
                    });

                });
            });
        });
});
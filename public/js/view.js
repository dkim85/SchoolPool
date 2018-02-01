$(document).ready(function () {

    loadTable()
    $(document).on("click", "#submitBtn", function () {

        var data = {
            departure: $("#departure").val(),
            destination: $("#destination").val(),
            date: $("#date").val(),
            time: $("#time").find(":selected").text(),
            seats: $("#seats").find(":selected").text(),
            minMoney: $("#minumum").val()
        };

        console.log(data)

        $.post("/api/all", data)

        $("#addDiv").css("display","none")
        loadTable()

    })

    function reload() {

    }

    //clear the default value of inputbox when click.

    $(document).on("click", ".inputValue", function () {

        $(this).val("");
    })

    $(document).on("click", "#closeBtn", function () {

        $("#addDiv").css("display", "none")
        loadTable()
    })

    $(document).on("click", "#postRide", function () {
        $("#listDiv").empty()
        $("#addDiv").css("display", "block")
    })


    $(document).on("click", "#getRide", function () {
        $("#addDiv").css("display","none")
        loadTable()
    })


    function loadTable() {
        $("#listDiv").empty();

        var table =
            `<table>
            <tr>
                <th>Departure</th>
                <th>Destination</th>
                <th>Date</th>
                <th>Time</th>
                <th>Number of Seats</th>
                <th>Minimum Pay</th>
                <th>Join</th>
            </tr>`

        $.get("/api/all", function (data) {

            for (var i = 0, n = data.length; i < n; i++) {
                var contents =
                    `<tr>
                <td> ${data[i].departure} </td>
                <td> ${data[i].destination} </td>
                <td> ${data[i].date} </td>
                <td> ${data[i].time} </td>
                <td> ${data[i].seats} </td>
                <td> ${data[i].minMoney} </td>
                <td><button class="joinBtn" id="${data[i].id}">Join</button></td>
            </tr>`

                table += contents
            }

            table += `</table>`

            $("#listDiv").append(table)

        })
    }

})

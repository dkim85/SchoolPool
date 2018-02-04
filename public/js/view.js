$(document).ready(function () {

    loadAll()
    //posting ride
    $(document).on("click", "#postBtn", function () {

        var data = {
            departure: $("#departure").val(),
            destination: $("#destination").val(),
            date: $("#date").val(),
            time: $("#time").find(":selected").text(),
            currentSeats: 0,
            seats: $("#seats").find(":selected").text(),
            minMoney: $("#minumum").val()
        };

        console.log(data)

        $.post("/api/postRide", data)

        $("#addDiv").css("display", "none")
        loadAll()

    })


    //join ride
    $(document).on("click", "#joinBtn",function(){
        $("#blackoutDiv").css("display","none");
        $("#joinDiv").css("display","none");
        var targetId = $(this).parent().parent().attr("value");
        console.log(targetId)

        var data ={
            name: $("#joinName").val(),
            phone:$("#joinPhone").val(),
            email:$("#joinEmail").val(),
            memo:$("#joinMemo").val(),
            postid: targetId
        }        

        console.log(data)

        $.post("/api/joinRide",data).then(function(){
            $("#joinName").val("");
            $("#joinPhone").val("");
            $("#joinEmail").val("");
            $("#joinMemo").val(""); 
        })

        $.get("/api/all/"+targetId, function (data) {
            // console.log(data[0])
            console.log(`updating target id:${data[0].id}`);
            var addSeat = data[0].currentSeats+1
            console.log(`new seat is ${addSeat}`)
            var updatedSeat = {
                id:data[0].id,
                currentSeats: addSeat
            };

            

            console.log(updatedSeat);

            $.ajax({
                method: "PUT",
                url: "/api/update",
                data: updatedSeat
            }).then(function(){
                
            })  
            
            
        })       

        
    })

    //join button inside the table
    $(document).on("click",".joinBtn", function(){
        $("#blackoutDiv").css("display","block");
        $("#joinDiv").css("display","block");
        // console.log(`${$(this).attr("id")}`)
        $("#joinDiv").attr("value",`${$(this).attr("id")}`);

    }) 

    //clear the default value of inputbox when click.

    $(document).on("click", ".inputValue", function () {

        $(this).val("");
    })

    //close button for the modal in general
    $(document).on("click", "#closeBtn", function () {

        var target=`#${$(this).parent().attr("id")}`;
        console.log(target)

        $(target).css("display", "none");
        $("#blackoutDiv").css("display","none");
        loadAll()
    })

    //post ride button from the nav bar

    $(document).on("click", "#postRide", function () {
        $("#listDiv").empty()
        $("#blackoutDiv").css("display","block");
        $("#addDiv").css("display", "block")
    })

    //get ride button from the nav bar
    $(document).on("click", "#getRide", function () {
        $("#addDiv").css("display", "none")
        loadAll()
    })


    //search by school button from the nav bar
    $(document).on("click", "#searchBtn", function () {
        var searchTerm = `/api/all/${$("#searchTerm").val()}`;
        console.log(searchTerm)
        loadBySchool(searchTerm);
    })

    //search by school function

    function loadBySchool(searchTerm){        
        
        $.get(searchTerm, function (data) {            
      
            refreshTable(data)
        })       

    }

    //refreshing table (front end side)

    function refreshTable(data) {
        // console.log(data)

        $("#listDiv").empty();
        $("#blackoutDiv").css("display","none");

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

        for (var i = 0, n = data.length; i < n; i++) {
            var contents =
                `<tr>
                <td> ${data[i].departure} </td>
                <td> ${data[i].destination} </td>
                <td> ${data[i].date} </td>
                <td> ${data[i].time} </td>
                <td> ${data[i].currentSeats} / ${data[i].seats} </td>
                <td> ${data[i].minMoney} </td>
                <td><button class="joinBtn" id="${data[i].id}">Join</button></td>
            </tr>`

            table += contents
        }

        table += `</table>`

        $("#listDiv").append(table)
    }

 

    //requesting all database 
    function loadAll() {
        console.log("loading all")
        $.get("/api/all/", function (data) {

            refreshTable(data);

        })
    }

})

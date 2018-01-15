// Select color input
var colorPicker; //colorPicker slector
var selectedColor; // choosen color value
var gridHeight = 1; //grid height value
var gridWidth = 1; //grid width value
var pixelCanvas //grid table
colorPicker = $("#colorPicker");
pixelCanvas = $("#pixel_canvas");

//if the input value change, then refresh variables value
$("input").on("change", function() {
    selectedColor = colorPicker.val();
    gridHeight = $("#input_height").val();
    gridWidth = $("#input_width").val();
});

// when size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function makeGrid(evt) {

    //prevent refresh page
    evt.preventDefault();
    //delete previous table (if any)
    $("tr").remove();
    //create gridHeiht rows
    for (let i = 0; i < gridHeight; i++) {
        pixelCanvas.append("<tr><td></td></tr>");
    }
    //add gridWidth columns
    $("tr").each(function() {
        for (let j = 1; j < gridWidth; j++) {
            $(this).append("<td></td>");
            console.log("posilam form" + j);
        };
    });
    //add color on click
    $("td").on("click", function() {
        $(this).css("background-color", selectedColor);
    });
    $("td").on("dblclick", function() {
        $(this).css("background-color", "");
    });
});
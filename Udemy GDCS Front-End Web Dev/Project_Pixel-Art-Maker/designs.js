// Select color input
var colorPicker; //colorPicker slector
var selectedColor; // choosen color value
var gridHeight = 1; //grid height value
var gridWidth = 1; //grid width value
var pixelCanvas //grid table
colorPicker = $("#colorPicker");
pixelCanvas = $("#pixel_canvas");

//If the input value change, then refresh variables value
$("input").on("change", function() {
    selectedColor = colorPicker.val();
    gridHeight = $("#input_height").val();
    gridWidth = $("#input_width").val();
});

// When size is submitted by the user, call makeGrid()


$("#sizePicker").submit(function makeGrid(evt) {

    //Do stuff here

    evt.preventDefault();
    $("tr").remove();
    for (let i = 0; i < gridHeight; i++) {
        pixelCanvas.append("<tr><td></td></tr>");
    }

    $("tr").each(function() {
        for (let j = 1; j < gridWidth; j++) {
            $(this).append("<td></td>");
            console.log("posilam form" + j);
        };
    });
    $("td").on("click", function() {
        $(this).css("background-color", selectedColor);
    });
});
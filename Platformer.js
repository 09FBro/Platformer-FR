console.log("Hello World!");
//Yo Rayan, you seeing this??? Nah i aint seeing shit

console.log(`Script for Javascript`)
let map = document.getElementById(`platformgamecanvas`);
let mapping = map.getContext("2d");  
// .getcontext - sets the mode to a different context in this case its 2d dimension 
const tilesize = 50

let mapmaker = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Row 0
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // Row 1
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Row 2
]
function mapdrawing(){
    for (let row = 0; row < mapmaker.length; row++) {  
        for (let col = 0; col < mapmaker[row].length; col++) {
            let tile = mapmaker[row][col];
            if (tile === 1) {
                mapping.fillStyle = "red";

            } else if (tile === 0) {
                mapping.fillStyle = "blue";

                
        }
        mapping.fillRect(col * tilesize, row * tilesize, tilesize, tilesize);
    }
}
}
mapdrawing();
// .length - counts the number of the data in the array
// .fillstyle - sets the colour, any object afterwards will be changed to this colour
// .fillrect - sets the shape, and also fills it

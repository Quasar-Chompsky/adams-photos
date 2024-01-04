let images = [];


function preload() {
    for (let i = 1; i <= 45; i++) {
        let imgPath = `img/image${i}.jpg`;
        let img = loadImage(imgPath);
        images.push(img);
    }
}


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    //imageMode(CENTER);
}

function draw() {
    
    //background(220);
    let gridSize = 2; // Adjust the number of columns in the grid
    let imageSize = width / gridSize; // Calculate the size of each image based on the grid
    
    
   
    for (let i = 0; i < images.length; i++) {
        
        let col = i % gridSize; // Calculate the column index
        let row = Math.floor(i / gridSize); // Calculate the row index

        let x = col * imageSize; // Calculate the x-coordinate of the image
        let y = row * imageSize; // Calculate the y-coordinate of the image
        let x1 = 0;
        let y1 = 0;
        image(images[i], x, y+y1, imageSize, imageSize); // Draw the image at the specified position
        
        y1 += 1; 

    }


   
  
}


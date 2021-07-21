console.log('index is ready');

// NOTE: windos.onload is required if you put the snapsvg in the header;
// base snapsvg obj
let s = Snap(400, 400); // paper - working area
// let circle = s.circle(100, 100, 100); // centerOfTheCircle - x, y, radius
// let rect = s.rect(200, 0, 200, 200); // x, y point to the top left corner


// let ellipse = s.ellipse(200, 200, 100, 200); // x, y, w, h
// let roundRect = s.rect(0, 0, 400, 400, 10, 50); // xPos, yPos, h, w, angleOneRoundness, andgeTwoRoundness
// let roundRect = s.rect(0, 0, 400, 400, 50); // xPos, yPos, h, w, angleOneRoundness, andgeTwoRoundness
let line = s.line(0, 0, 400, 400);
line.attr({
    stroke: '#F00'
});

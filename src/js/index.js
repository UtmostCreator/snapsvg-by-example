console.log('index is ready');

// NOTE: windos.onload is required if you put the snapsvg in the header;
// base snapsvg obj
let s = Snap(400, 200); // paper - working area
let circle = s.circle(100, 100, 100); // centerOfTheCircle - x, y, radius
let rect = s.rect(200, 0, 200, 200); // x, y point to the top left corner

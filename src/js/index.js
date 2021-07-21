console.log('index is ready');

// NOTE: windos.onload is required if you put the snapsvg in the header;
// base snapsvg obj
let s = Snap(200, 200);
let circle = s.circle(100, 100, 100); // centerOfTheCircle - x, y, radius
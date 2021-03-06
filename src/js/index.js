console.log('index is ready');

// NOTE: windos.onload is required if you put the snapsvg in the header;
// base snapsvg obj
let s = Snap(400, 400); // paper - working area
let base = s.rect(100, 200, 200, 200);
let roof = s.polygon(75, 200, 325, 200, 200, 50);
let house = s.group(base, roof);

house.attr({
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
});

let chimney = s.rect(135, 75, 20, 70);
house.add(chimney);

/*
to scale - s.5
to translate - t100,0 // sFrom,to
to rotate - r45 // sFrom,to
*/
// house.transform('s0.5,0,0'); // by default svg obj is scaled from the center
// chimney.transform('t100,100'); // by default svg obj is scaled from the center
// house.transform('r45,0,0'); // by default svg obj is scaled from the center
house.transform('t100,0r45s.5'); // by default svg obj is scaled from the center

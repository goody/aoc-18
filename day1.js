const freqChanges = [-10,-12,1,14,11,-19,-4,10,10,-12,-13,-10,-8,11,3,-10,8,5,-14,7,12,12,14,-1,17,-5,9,-15,8,-16,9,6,17,-11,19,11,-9,-1,-8,-16,-5,6,2,6,12,15,16,-6,-8,-5,11,-9,19,19,-5,-12,-17,-20,9,-6,-2,20,15,-8,15,19,-5,-17,-9,1,-9,-11,-19,-1,-15,18,-4,19,3,21,5,-1,8,9,9,-16,17,-15,18,14,8,-13,-2,-15,13,19,-13,5,16,16,7,8,-19,3,-12,18,-16,-19,8,-16,20,15,-5,-17,15,14,-2,18,-6,5,16,13,-8,-9,-1,13,18,-2,16,-4,19,6,14,-6,-16,-10,-5,-15,11,10,18,8,-2,15,-9,7,10,9,-6,1,-17,-12,19,14,-9,-18,20,12,10,14,6,9,-18,4,15,15,3,9,-4,-19,8,16,19,-12,-1,16,11,13,-8,4,18,10,-11,18,-8,19,-4,-5,-12,-3,-10,-11,-18,-7,3,14,18,2,-7,-12,14,12,13,-1,13,-1,15,13,-1,-17,-4,17,-3,13,5,-19,17,10,6,-15,11,16,11,20,19,5,-11,-2,-12,-6,-11,-14,5,10,-23,14,-11,22,-1,-14,-35,-23,11,4,10,-6,19,-5,4,-13,-7,11,-24,-17,9,-17,11,2,-4,-10,-24,14,15,19,7,-2,11,-13,-8,-8,-14,-17,6,8,-16,-18,1,-21,-14,8,-2,20,-19,9,-15,-6,-7,4,-3,-8,16,15,-26,18,-22,-16,-3,-17,-18,4,5,3,-1,3,2,3,7,-5,20,-11,15,-6,-19,-24,-6,-20,13,-4,-18,15,9,16,12,-5,16,9,-4,-14,-9,-19,-5,-16,-16,5,-4,12,-15,-15,-14,4,-18,-12,-4,6,9,-12,14,9,-6,3,8,4,7,-14,-15,-18,12,-19,-14,-15,-16,15,-8,14,-4,-21,7,-12,-2,-10,-6,14,14,-9,-14,-16,2,7,5,-15,-15,19,-16,-5,-16,-19,9,-27,-8,6,1,-14,-9,-50,-9,-21,5,-20,-19,6,-11,6,1,-17,-14,-2,8,-4,16,1,-3,-9,20,15,-22,-3,-13,-12,-25,5,-13,-2,-8,-11,17,3,-7,13,1,18,-13,1,7,-15,-43,-6,-10,-9,-20,-7,-8,-15,-9,13,-9,24,13,5,-8,-15,-4,-4,-4,-14,-21,16,15,-14,-20,-20,-15,-19,-41,16,3,8,-22,-30,8,40,15,24,-7,22,10,15,9,28,14,2,14,6,17,1,30,5,-2,46,24,46,-3,-7,35,16,13,-21,28,13,-25,180,25,5,-9,23,-5,-2,13,-12,2,-25,-5,18,-24,45,17,-7,22,-152,-11,4,50,129,-7,22,109,-56,80,29,-75060,-2,-14,7,-17,-5,6,-3,18,19,-14,-12,-6,9,-5,-13,-6,-3,-15,13,3,-18,-11,16,-2,10,-14,-7,19,-20,15,10,12,10,16,-11,14,-5,14,11,-5,1,-13,1,18,-10,25,13,-17,15,-18,1,-6,-12,5,-7,18,-6,-18,-17,-5,-15,-1,-15,1,-12,9,16,8,5,1,9,18,-13,-30,-27,-19,2,-16,-19,-10,-18,21,18,-5,14,9,-6,2,-16,-11,1,18,-4,19,7,6,-8,25,-50,6,-21,6,-2,14,-11,10,-9,16,25,-61,-17,-14,13,3,-14,-4,-1,9,-1,-4,-5,7,-15,7,16,6,-2,-11,-11,-13,11,-12,-13,-8,3,-13,16,-1,-14,19,4,10,12,26,6,4,24,-31,9,-10,-23,-13,3,-18,-9,-6,1,-2,15,-10,-17,-17,15,9,4,19,-4,12,11,-25,16,4,-2,39,49,9,96,4,19,3,11,25,14,11,-5,-26,-8,-16,11,2,2,-1,-10,-45,-160,-31,-3,-43,-18,19,3,4,11,-16,-19,-22,6,2,10,-11,-17,7,1,15,17,-19,6,-26,-7,-9,19,2,6,-22,2,-8,5,7,9,8,-16,2,-19,-19,-3,16,5,4,-18,-11,-19,16,-15,7,-1,-9,-19,11,-17,-5,7,-11,16,-19,5,21,-2,12,14,-7,18,-8,10,-11,-17,3,-13,19,-3,10,17,17,-18,7,-2,-2,12,-6,19,-20,-15,-11,-27,8,18,9,-1,-2,19,7,12,32,14,13,-9,-14,20,18,-4,-49,-6,-10,-7,-4,-9,-6,-37,-21,-2,5,12,4,-33,-4,-13,-4,13,-19,-7,-16,-1,-1,8,-14,-15,11,-10,-14,-22,-11,10,-3,7,9,-15,16,-7,-1,2,20,11,-1,6,-2,3,3,2,-20,-10,11,-10,13,-1,20,7,7,5,1,4,-13,15,-3,2,-4,-3,-1,13,-15,-14,-2,-6,3,13,-19,-11,8,-21,-2,-23,-18,20,7,6,-28,7,-33,13,-16,-18,-10,-18,13,8,-14,-13,-2,4,-14,-7,-18,-20,-4,-5,8,-4,16,21,20,-8,-14,-2,-14,-22,14,36,32,-28,1,-21,8,14,75784];


// const freqChanges = [+3, +3, +4, -2, -4];

// part 1

const getFreq = (accumulator, curr) => accumulator + curr;

const freq = freqChanges.reduce(getFreq);

console.log(freq);

// part 2

const freqs = [];
let currFreq = 0,
    foundDupe = false;

while(!foundDupe){
    freqChanges.forEach(change => {
        currFreq = currFreq + change;
        if(freqs.indexOf(currFreq) > -1) {
            console.log(`Found ${currFreq}`);
            foundDupe = true;
        } else {
            freqs.push(currFreq);
        }
    });
}

// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// test to see if walkEast works appropriately
// have the NPC start walking east immediately
// npc.walkEast(2000)
//     .then(function(stop){
//         console.log('Done walking')
//     })

// test to see if walkNorth works appropriately
// npc.walkNorth(800)
//     .then(function(stop){
//         console.log('Done walking')
//     })

// test to see if walkWest works appropriately
// npc.walkWest(100)
//     .then(function(stop){
//         console.log('Done walking')
//     })

// test to see if walkSouth works appropriately
// npc.walkSouth(800)
//     .then(function(stop){
//         console.log('Done walking')
//     })

// Implementation of Complex track for NPC
// Walk North for 1400 ms
npc.walkNorth(1400)
    // Walk East for 1200 ms
    .then(() => npc.walkEast(1200))
    // Walk South for 300 ms
    .then(() => npc.walkSouth(300))
    // Walk East for 1500 ms
    .then(() => npc.walkEast(1500))
    // Walk South for 1500 ms
    .then(() => npc.walkSouth(1500))
    // Walk West for 2700 ms
    .then(() => npc.walkWest(2700))
    // Walk North for 400 ms
    .then(() => npc.walkNorth(400))


// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
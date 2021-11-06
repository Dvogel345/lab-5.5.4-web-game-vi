function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

// duration = time npc moves in a specified direction
function walkEast(duration) {
    direction = 'east'
    element.src = `./assets/red-character/east.gif`
        // Making a promise to resolve
        return new Promise(function(resolve){  
            // setting timeout to resolve the promise by; 
            setTimeout(() => {
                //stopping the npc 
                resolve(stop()) 
                //after said duration
            }, duration) 
        })       
}

function walkNorth(duration) {
    direction = 'north'
    element.src = `./assets/red-character/north.gif`
    // Making a promise to resolve
    return new Promise(function(resolve){  
        // setting timeout to resolve the promise by; 
        setTimeout(() => {
            //stopping the npc 
            resolve(stop()) 
            //after said duration
        }, duration) 
    })       
}

function walkWest(duration) {
    direction = 'west'
    element.src = `./assets/red-character/west.gif`
    // Making a promise to resolve
    return new Promise(function(resolve){  
        // setting timeout to resolve the promise by; 
        setTimeout(() => {
            //stopping the npc 
            resolve(stop()) 
            //after said duration
        }, duration) 
    })       
}

function walkSouth(duration) {
    direction = 'south'
    element.src = `./assets/red-character/south.gif`
   // Making a promise to resolve
   return new Promise(function(resolve){  
    // setting timeout to resolve the promise by; 
    setTimeout(() => {
        //stopping the npc 
        resolve(stop()) 
        //after said duration
    }, duration) 
})       
}

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}
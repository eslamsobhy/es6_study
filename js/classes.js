// Basic object creation with javascript!
function Car(options){
    this.title = options.title;
}


// To add a method to the constructor object
Car.prototype.drive = function(){
    return 'VROOOM!';
}

// INHERITANCE using prototpye:

function Toyota(options){
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function(){
    return 'BEEEP!';
}


const toyota = new Toyota({color: 'red', title: 'Focus'});


// TURNING THIS WHOLE PROCESS INTO A CLASS:

class CarC {
    // destructuring
    constructor({ title }){
        this.title = title;
    }

    driveC(){
        return 'VROOOOM!';
    }
}

// Inheritance using classes
class ToyotaC extends CarC{
    constructor( options ){
        super(options);
        this.color = options.color;
    }

    honkC(){
        return 'BEEEP!';
    }
}

const car = new CarC( {title: 'Focus'} );
const toyotac = new ToyotaC( {color: 'red', title: 'Focus'} );





// TESTING

document.getElementById('target1').innerHTML = toyotac.title;
document.getElementById('target2').innerHTML = toyotac.driveC();
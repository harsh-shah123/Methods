// OOPS 
//  1. Encapsulation - Reduce complexity + increase reusability
//  2. Abstraction   - Reduce complexity + isolate impact of changes
//  3. Inheritance   - Eliminate redundant code [ types 1- Classical 2-Prototypical ]
//  4. Polymorphism   - Refactor ugly switch/case statements

//  A Prototype is just a regular object!
//  Object cretaed by a given constructor will have the same prototype.
//  Object prototype is the parent or root .


function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);
// circle.location = { x :1};
// circle['location'] = {x :1 };


//  exercise
function Stopwatch() {
    let startTime , endTime , running , duration = 0;

    this.start = function() {   
        if(running)
            throw new Error('Stopwatch has already started');

        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if(!running)
            throw new Error('StopWatch is not Started');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0; 
    };
    Object.defineProperty(this, 'duration' , {
        get : function() {
            return duration;
        }
    });
}
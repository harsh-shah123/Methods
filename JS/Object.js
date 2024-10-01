// objects

const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    isVisible : true,
    draw : function() {
        console.log('draw');
    }
};

circle.draw();
console.log(circle.radius);

// Factory function
function createCricle (radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCricle(1);
console.log(circle1);

const circle2 = createCricle(40);
console.log(circle2);

// Constructer function
function Circle(radius) {
    this.radius = radius ;
    this.draw = function() {
        console.log('draw');
    }
}

const crcle = new Circle(1);
console.log(crcle);

const crack= {
    color : 'red'
}

crack.color22 = 'yellow';
crack.draw1 = function() {};

delete crack.color22;

console.log(crack);
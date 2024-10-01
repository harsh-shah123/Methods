// Parent class
class Animal {
    // Method to be overridden by child classes
    sound() {
      console.log("Animal makes a sound");
    }
  }
  
  // Dog class (inherits from Animal)
  class Dog extends Animal {
    // Dog's version of the sound method
    sound() {
      console.log("Dog barks");
    }
  }
  
  // Cat class (inherits from Animal)
  class Cat extends Animal {
    // Cat's version of the sound method
    sound() {
      console.log("Cat meows");
    }
  }
  
  // Creating objects of Dog and Cat
  let myDog = new Dog();
  let myCat = new Cat();
  
  // Both objects call the same method 'sound', but do different things
  myDog.sound();  // Output: Dog barks
  myCat.sound();  // Output: Cat meows
  
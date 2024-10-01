// Parent class
class Animal {
    // Method in the parent class
    sound() {
      console.log("Animal makes a sound");
    }
  }
  
  // Child class (subclass) that extends the parent class
  class Dog extends Animal {
    // Overriding the 'sound' method in the child class
     sound(){

      console.log('Barks');
     }
  }
  
  // Creating an instance of the Dog class
  let myDog = new Dog();
  // Calls the overridden method from the Dog class, not the Animal class
  myDog.sound();  // Output: Dog barks
  

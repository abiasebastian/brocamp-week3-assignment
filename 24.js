class Area {
  circle(Radius) {
    return Math.PI * (Radius * Radius);
  }
  square(Side) {
    return Side * Side;
  }
  rectangle(Length, Breadth) {
    return Length * Breadth;
  }
  triangle(Height, Base) {
    return (Height * Base)/2
  }
}

class MyClass extends Area {
 prompt=require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

  main() {
    const choice = parseInt(
      this.prompt(`
    ENTER YOUR CHOICE TO CALCULATE AREA OF THE FOLLOWING :
    ENTER 1 FOR CIRCLE
    ENTER 2 FOR SQUARE
    ENTER 3 FOR RECTANGLE
    ENTER 4 FOR TRIANGLE
    `)
    );

    switch (choice) {
      case 1:
        this.circle();
        break;
      case 2:
        this.square();
        break;
      case 3:
        this.rectangle();
        break;
      case 4:
        this.triangle();
        break;

      default:
        break;
    }
  }
  circle() {
    const radius = parseFloat(this.prompt(`ENTER RADIUS OF THE CIRCLE : `));
    const area = super.circle(radius);
    console.log(area);
  }
  square() {
    const side = parseFloat(this.prompt(`ENTER SIDE OF THE SQUARE : `));
    const area = super.square(side);
    console.log(area);
  }
  rectangle() {
    const length = parseFloat(this.prompt("ENTER LENGTH OF THE RECTANGLE : "));
    const breadth = parseFloat(this.prompt(`ENTER BREADTH OF THE RECTANGLE : `));
    const area = super.rectangle(length, breadth);
    console.log(area);
  }
  triangle() {
    const height = parseFloat(this.prompt("ENTER HEIGHT OF THE TRIANGLE : "));
    const base = parseFloat(this.prompt(`ENTER BASE OF THE TRIANGLE : `));
    const area = super.triangle(height, base);
    console.log(area);
  }
}
const myClass= new MyClass()
myClass.main()

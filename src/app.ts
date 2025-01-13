console.log("First hello from LLD Design Course ---->>>> Aniket D Giri");

/*
 *  More about readonly modifier in TS
 */

class UserAccount {
  name: string;
  readonly accountType: string = "User";
  amount: number = 0;
  adddress: string | undefined;

  constructor(name: string) {
    this.name = name;
    this.accountType = "depoist";
  }

  /*
   * Note: Here we cannot assign readonly property outside of the constructor
   */
  //   modifyAccountType(accountType: string) {
  //     this.accountType = "Deposit";
  //   }
}

/*
 * implements clause
 */
interface Checkable {
  check(name: number): boolean;
}

// class NameChecker implements Checkable {
//   check(s:string) {
//     // Notice no error here
//     return s.toLowerCase() === "ok";
//   }
// }

/*
 * extends clause
 */

// class Base {
//   greet() {
//     console.log("Hello from the base class");
//   }
// }

// class Derived extends Base {
//   greet(str: string) {
//     console.log("Hello from the derived class");
//   }
// }

// class Base {
//   greet(): void {
//     console.log("Hello from the base class");
//   }
// }

// class Derived extends Base {
//   // Overloading signatures
//   greet(): void;
//   greet(str: string): void;

//   // Implementation of the method
//   greet(str?: string): void {
//     if (str) {
//       console.log(`Hello ${str}, from the derived class`);
//     } else {
//       console.log("Hello from the derived class");
//     }
//   }
// }

// const derived = new Derived();
// derived.greet(); // "Hello from the derived class"
// derived.greet("Aniket"); // "Hello Aniket, from the derived class"

class Base {
  greet() {
    console.log("Hello, world! from Base");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()} from Derived`);
    }
  }
}

const d = new Derived();
const b: Base = d;
b.greet();
d.greet();
d.greet("Aniket");

//   d.greet();
//   d.greet("reader");

class BaseProtected {
  protected m: string = "Aniket";
}

class DerivedProcted extends BaseProtected {
  m = "Giri";
}

const objA = new DerivedProcted();
console.log(objA.m);

/*
 * abstract construct signatures
 */

abstract class AbstractBase {
  abstract printName: () => void;
}

class AbstractDerived extends AbstractBase {
  printName = () => {
    console.log("This is from the derived abstract class");
  };
}

function greet(ctor: new () => AbstractBase) {
  const instance = new ctor();
}

greet(AbstractDerived);

function add(a: number, b: number) {
  return a + b;
}

const display = (
  a: number,
  b: number,
  add: (a: number, b: number) => number
) => {
  console.log(`Addition of number is: ${add(a, b)}`);
};

display(4, 5, add);

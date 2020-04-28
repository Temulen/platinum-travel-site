// import "../styles/styles.css";
import "../styles/styles.scss";
import MobileMenu from "./modules/MobileMenu";
// import Person from "./modules/Person";

if (module.hot) {
  module.hot.accept();
}

let mobileMenu = new MobileMenu();

// class Adult extends Person {
//   paytaxes() {
//     console.log(this.name + " no tax balance");
//   }
// }

// var john = new Person("John Doe", "green");
// john.greet();

// var jane = new Adult("Jane Doe", "pink");
// jane.greet();
// jane.paytaxes();

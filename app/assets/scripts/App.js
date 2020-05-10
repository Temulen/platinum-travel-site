// import "../styles/styles.css";
import "../styles/styles.scss";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import { type } from "os";
// import Modal from "./modules/Modal";
// import Person from "./modules/Person";

if (module.hot) {
  module.hot.accept();
}

// let revealOnScroll = new RevealOnScroll();
// new Modal();
// alert("testing!!!");
let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 70);

let mobileMenu = new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal")
        .then(x => {
          modal = new x.default();
          setTimeout(() => modal.openModal(), 20);
        })
        .catch(() => console.log("error"));
    } else {
      modal.openModal();
    }
  });
});

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

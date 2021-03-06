const classmates = ["Christian", "CJ", "Tammer"]; // dont want classmates to be reassigned so thats why its const

const wrapper = document.getElementById("wrapper");

for (let i = 0; i < classmates.length; i++) { //let bc it has to do with the scope
  const classmate = classmates[i];

const button = document.createElement("button");
  button.innerHTML = "How many tacos did " + classmate + " eat?";

  button.addEventListener("click", function() {
    const tacoCount = i * 2;

    alert(classmate + " ate " + tacoCount + " tacos.");

    if (tacoCount > 3) {
      alert("That's a lot of tacos, " + classmate + ".\nTaco 'Bout Hungry!");
    }
  });

  wrapper.appendChild(button);
}

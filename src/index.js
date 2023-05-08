const form = document.getElementById("someForm");
const { inputName } = form;
console.log(inputName.value);
console.log(form["inputName"].value);
console.log(form.elements.inputName.value);
console.log(form.elements["inputName"].value);

inputName.addEventListener("focus", () => {
  console.log("focus");
});

inputName.addEventListener("blur", () => {
  console.log("blur");
});

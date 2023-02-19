function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = `theme--${themeName}`;
}

const themePickers = document.querySelectorAll("#theme-picker .color");

const initialTheme = localStorage.getItem("theme") || "light";
setTheme(initialTheme);

let selectedButton;

themePickers.forEach((buttonTheme) => {
  if (buttonTheme.name === initialTheme) {
    buttonTheme.classList.add("color--selected");
    selectedButton = buttonTheme;
  }

  buttonTheme.addEventListener("click", (event) => {
    setTheme(buttonTheme.name);
    selectedButton.classList.remove("color--selected");
    buttonTheme.classList.add("color--selected");
    selectedButton = buttonTheme;
  });
});

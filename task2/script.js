const searchParams = new URLSearchParams(location.search);

for (let [key, param] of searchParams) {
  const fromElements = document.querySelector("form").elements;
  switch (key) {
    case "size":
    case "color":
      document.getElementById(key + param).checked = true;
      break;
    case "manufactura":
      for (const option of document.getElementById("manufactura")) {
        if (option.value === param) option.selected = true;
      }
      break;
    case "sale":
      document.getElementById(key).checked = param == "on" ? true : false;
      break;
    default:
      break;
  }
}

addEventListener("input", ({ target }) => {
  console.log(
    `${location.origin + location.pathname + "?"}${new URLSearchParams(
      new FormData(target.form)
    )}`
  );
});

const url1 = "simple1.json";
const url2 = "simple2.json";

function asyncXhr(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

Promise.all([asyncXhr(url1), asyncXhr(url2)])
  .then((values) => {
    console.log("оба ответа получены");
  })
  .catch(function (e) {
    console.log(e);
  });

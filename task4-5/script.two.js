window.addEventListener("message", function ({ data, source, targetOrigin }) {
  const { method, message, fn } = data;

  switch (method) {
    case "add":
      const { key, value } = message;
      localStorage.setItem(key, value);
      sendAnswer("written");
      break;
    case "read":
      const result = localStorage.getItem(message);
      sendAnswer(result);
      break;
    case "remove":
      localStorage.removeItem(message);
      sendAnswer("removed");
      break;
    default:
      break;
  }

  const callBack = eval(fn);
  if (callBack) {
    callBack();
  }

  function sendAnswer(message) {
    source.postMessage(JSON.stringify(message), targetOrigin);
  }
});

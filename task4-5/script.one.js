const { myFrame } = window.frames;

myFrame.addEventListener("load", function () {
  const iframeStorage = new IframeLocalStorage(myFrame);
  iframeStorage.add("FirsName", "Yauheni", callBack);
  iframeStorage.add("LastName", "Herasimenka");
  iframeStorage.read("FirsName");
  iframeStorage.remove("LastName", callBack);
});

const callBack = () => {
  console.warn("callback");
};

class IframeLocalStorage {
  constructor(iframe) {
    this.iframe = iframe;
    window.addEventListener("message", this.listener);
    this.targetOrigin = window.location.href;
  }

  sendMessage(method, message, fn) {
    this.iframe.postMessage(
      //   JSON.stringify({ method, message, fn }),
      { method, message, fn },
      this.targetOrigin
    );
  }

  add(key, value, fn) {
    if (key && value) {
      this.sendMessage("add", { key, value }, `${fn}`);
    }
  }

  read(key, fn) {
    if (key) {
      this.sendMessage("read", key, `${fn}`);
    }
  }

  remove(key, fn) {
    if (key) {
      this.sendMessage("remove", key, `${fn}`);
    }
  }

  listener = ({ data }) => {
    if (data) {
      console.log(JSON.parse(data));
    }
  };
}

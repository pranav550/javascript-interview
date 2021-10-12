// Lexical scope for this

// some time this ki value milna band ho jati hai to arrow function used karo

let userinfo = {
  name: "Code Improve",
  getInfo: function () {
    (() => {
      console.log("dummy fn", this.name);
    })();
    //console.log("yes called", this.name);
    function dummy() {
      console.log("dummy", this.name);
    }
    dummy.call(this);
    dummy.apply(this);
    let newfn = dummy.bind(this);
    newfn();
  },
};

userinfo.getInfo();

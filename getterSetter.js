let userInfo = {
  firstname: "Code",
  lastname: "improve",
  language: "",
  get fullname() {
    return this.firstname + " " + this.lastname;
  },
  set chooselang(lang) {
    this.language = lang;
  },
};

userInfo.chooselang = "en";
console.log(userInfo);
console.log(userInfo.fullname);

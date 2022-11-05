class common {
  msg = "";

  setMessage(p) {
    this.msg = p;
  }

  getMessage() {
    return this.msg;
  }
}

module.exports = new common();

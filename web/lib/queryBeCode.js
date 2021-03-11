export default {
  encode(string) {
    return `unicode=${window.btoa(string)}`;
  },
  decode(string) {
    return window.atob(string.split('unicode=')[1])
  }
}
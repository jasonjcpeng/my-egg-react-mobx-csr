export default {
  encode(string: string): string {
    return `unicode=${window.btoa(string)}`;
  },
  decode(string: string): string {
    console.log(string.split("unicode=")[1]);
    return window.atob(string.split("unicode=")[1]);
  },
};

import readlineSync from "readline-sync";

export const userName = () => {
  const name = readlineSync.question("May I have your name?");
  return `Hello, ${name}!`;
};

console.log(userName());

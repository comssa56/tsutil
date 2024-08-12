import World from "./test"; //webpack.config.jsのresolveに設定があるため、拡張子は不要

const root: HTMLElement | null = document.getElementById("root");
const world = new World("Hello World!!!!");
world.sayHello(root);

console.log("aiue ${world}");


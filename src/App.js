import { Lightning, Utils } from "@lightningjs/sdk";

export default class App extends Lightning.Component {
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        clearColor: 0x000000,
      },
    };
  }

  _init() {
    this.tag("Background").start();
  }
}

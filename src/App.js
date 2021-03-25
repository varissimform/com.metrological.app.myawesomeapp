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
        w: 2600,
        h: 1080,
        rect: true,
        color: 0xff000000,
      },
      MyFlexBox: {
        x: 20,
        y: 20,
        w: 1920,
        flex: { direction: "row", padding: 0, wrap: false },
        rect: false,
        MyFlexItem: {
          w: 450,
          h: 250,
          flexItem: { margin: 10 },
          rect: true,
          color: 0xff444444,
        },
        MyFlexItemTwo: {
          w: 450,
          h: 250,
          flexItem: { margin: 10 },
          rect: true,
          color: 0xff999999,
        },
        MyFlexItemThree: {
          w: 450,
          h: 250,
          flexItem: { margin: 10 },
          rect: true,
          color: 0xff999999,
        },
        MyFlexItemFour: {
          w: 450,
          h: 250,
          flexItem: { margin: 10 },
          rect: true,
          color: 0xff999999,
        },
        // MyFlexBoxItemWithFlexItemChildren: {
        //   flex: { direction: "row", padding: 20 },
        //   flexItem: { margin: 10 },
        //   rect: true,
        //   color: 0xff999999,
        //   children: [
        //     { text: { text: "line 1" } },
        //     { text: { text: "line 2" } },
        //     { text: { text: "line 3" } },
        //   ],
        // },
      },

      MyFlexBoxTwo: {
        x: 20,
        y: 320,
        w: 1920,
        flex: { direction: "row", padding: 0, wrap: false },
        rect: false,
        MyFlexItem: {
          w: 450,
          h: 250,
          // src: "../static/images/logo.png",
          // UsingShorthand: { x: 0, y: 0, src: "../static/images/logo.png" },
          UsingTexture: {
            x: 0,
            y: 0,
            w: 450,
            h: 250,
            texture: {
              type: lng.textures.ImageTexture,
              src: "../static/images/logo.png",
            },
          },
          flexItem: { margin: 10 },
          rect: true,
          color: 0xff444444,
        },
        MyFlexItemTwo: {
          w: 450,
          h: 250,
          flexItem: { margin: 10 },
          rect: true,
          color: 0xff999999,
        },
        MyFlexItemThree: {
          w: 450,
          h: 250,
          flexItem: { margin: 10 },
          rect: true,
          color: 0xff999999,
        },
        MyFlexItemFour: {
          w: 450,
          h: 250,
          flexItem: { margin: 10 },
          rect: true,
          color: 0xff999999,
        },
        // MyFlexBoxItemWithFlexItemChildren: {
        //   flex: { direction: "row", padding: 20 },
        //   flexItem: { margin: 10 },
        //   rect: true,
        //   color: 0xff999999,
        //   children: [
        //     { text: { text: "line 1" } },
        //     { text: { text: "line 2" } },
        //     { text: { text: "line 3" } },
        //   ],
        // },
      },
    };
  }
  _init() {
    this.tag("Background").animation({}).start();
  }
}

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

      Header: {
        rect: true,
        w: 1920,
        h: 90,
        color: 0xff000000,
        MyImage: {
          x: 40,
          y: 30,
          h: 51,
          w: 176,
          src: "../static/images/netflix.png",
        },
        Title: {
          x: (w) => w - 95,
          mountX: 1,
          mountY: 0.5,
          y: 40,
          // text: { text: "Header" },
          MyImage: {
            x: 0,
            y: 0,
            h: 26,
            w: 25,
            src: "../static/images/GridView.png",
          },
        },
        Title2: {
          x: (w) => w - 70,
          mountX: 1,
          mountY: 0.5,
          y: 40,
          // text: { text: "Header" },
          MyImage: {
            x: 0,
            y: 0,
            h: 26,
            w: 25,
            src: "../static/images/ListView.png",
          },
        },
      },
      MyFlexBoxTitle: {
        x: 30,
        y: 140,
        text: {
          text: "Featured List",
          fontSize: 26,
          fontStyle: "bold",
        },
      },

      MyFlexBoxOne: {
        x: 20,
        y: 170,
        w: 1920,
        flex: { direction: "row", padding: 0, wrap: false },
        rect: false,
        type: MyFlexBox,
      },

      MyFlexBoxTitleTwo: {
        x: 30,
        y: 470,
        text: {
          text: "Recently Added",
          fontSize: 26,
          fontStyle: "bold",
        },
      },

      MyFlexBoxTwo: {
        x: 20,
        y: 500,
        w: 1920,
        flex: { direction: "row", padding: 0, wrap: false },
        rect: false,
        type: MyFlexBox,
      },
    };
  }
  _init() {
    this.buttonIndex = 0;
    this.tag("Background").animation({}).start();
    this.tag("MyFlexBoxOne").items = [
      { image: "../static/images/image5.png" },
      { image: "../static/images/image6.png" },
      { image: "../static/images/image7.png" },
      { image: "../static/images/image1.png" },
    ].map((item) => ({ image: item.image }));
    this.tag("MyFlexBoxTwo").items = [
      { image: "../static/images/image1.png" },
      { image: "../static/images/image2.png" },
      { image: "../static/images/image3.png" },
      { image: "../static/images/image4.png" },
    ].map((item) => ({ image: item.image }));
    this._setState("MyFlexBoxOne");
  }
  static _states() {
    return [
      class MyFlexBoxOne extends this {
        _getFocused() {
          return this.tag("MyFlexBoxOne");
        }
      },
      class MyFlexBoxTwo extends this {
        _getFocused() {
          return this.tag("MyFlexBoxTwo");
        }
      },
    ];
  }
  _handleUp() {
    console.log("up");
    this._setState("MyFlexBoxOne");
  }
  _handleDown() {
    console.log("down");
    this._setState("MyFlexBoxTwo");
  }
}

class MyFlexBox extends Lightning.Component {
  static _template() {
    return {
      x: 20,
      y: 170,
      w: 1920,
      flex: { direction: "row", padding: 0, wrap: false },
      rect: false,
    };
  }
  _init() {
    this.index = 0;
  }
  set items(items) {
    this.children = items.map((item, index) => {
      return {
        ref: "ListItem-" + index, //optional, for debug purposes
        type: MyFlexBoxItem,
        x: index * 70, //item width + 20px margin
        item, //passing the item as an attribute
      };
    });
  }
  _getFocused() {
    return this.children[this.index];
  }
  reset() {
    this.index = 0;
    this._refocus(); // We need to force focus recalc.
  }
  _handleLeft() {
    console.log("left");
    if (this.index > 0) {
      this.index--;
    }
  }
  _handleRight() {
    console.log("right");
    // we don't know exactly how many items the list can have
    // so we test it based on this component's child list
    if (this.index < this.children.length - 1) {
      this.index++;
    }
  }
}

class MyFlexBoxItem extends Lightning.Component {
  static _template() {
    return {
      w: 450,
      h: 250,
      flexItem: { margin: 10 },
      rect: true,
      color: 0xff444444,
      UsingTexture: {
        x: 0,
        y: 0,
        w: 450,
        h: 250,
      },
    };
  }

  _init() {
    this.patch({
      x: 0,
      y: 0,
      rect: true,
      w: 450,
      h: 250,
      color: "none",
      UsingTexture: {
        texture: { type: lng.textures.ImageTexture, src: this.item.image },
      },
    });
  }
  _focus() {
    this.patch({
      MyFlexOverlyBlack: {
        x: 0,
        y: 0,
        rect: true,
        w: 450,
        h: 250,
        color: 0xff000000,
        alpha: 0.6,
      },

      MyFlexBoxTitle: {
        x: 30,
        y: 140,
        text: {
          text: "Monster Hunter",
          fontSize: 26,
          fontStyle: "bold",
        },
      },

      MyFlexBoxDesc: {
        x: 30,
        y: 180,
        w: 400,
        text: {
          text:
            "In a near-future world where an oppressive regime segregates...",
          fontSize: 18,
          lineHeight: 24,
        },
      },
    });
  }
  _unfocus() {
    this.patch({
      MyFlexOverlyBlack: undefined,
      MyFlexBoxTitle: undefined,
      MyFlexBoxDesc: undefined,
    });
  }
}

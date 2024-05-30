abstract class Component {
  constructor(protected selector: string) {}

  abstract render(): void;
}

class Header extends Component {
  constructor(selector: string) {
    super(selector);
  }

  render(): void {
    // const app = document.querySelector(this.selector) as HTMLElement;
    // app.innerHTML = "<div>Testing...</div>";
  }
}

const header = new Header("#app").render();

class CartContext {
  static instance: CartContext | null = null;

  state: {} = {};
  private constructor() {}

  static getInstance(): CartContext {
    if (!CartContext.instance) {
      CartContext.instance = new CartContext();
    }

    return CartContext.instance;
  }
}

const cart = CartContext.getInstance();
const cart1 = CartContext.getInstance();
const cart3 = CartContext.getInstance();

console.log(cart === cart1, cart1 === cart3);

// const func1 = <T>(any: T, cb: (arg: T) => T) => {
//   const result = any;

//   return cb(result);
// };

// const string = func1([12, 12], (arg) => arg.map((elem) => elem * 2));
// console.log(string);

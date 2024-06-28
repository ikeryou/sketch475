import { Func } from "../core/func";
import { MyDisplay } from "../core/myDisplay";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _items: Array<Item> = []

  constructor(opt:any) {
    super(opt)

    const num = Func.val(15, 20)
    for(let i = 0; i < num; i++) {
      const el = document.createElement('div')
      this.el.appendChild(el)

      const item = new Item({
        el: el,
        id: i,
      })
      this._items.push(item)
    }

  }

  protected _update():void {
    super._update()
  }
}
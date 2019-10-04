import Realm from 'realm'
import DayItem from './DayItem'

class Day {
  public static schema: Realm.ObjectSchema = {
    name: 'Day',
    primaryKey: 'id',
    properties: {
      userId: 'string',
      id: 'string',
      date: 'string',
      items: {
        type: 'list',
        objectType: 'DayItem',
      },
    },
  }

  public userId!: string
  public id!: string
  public date!: string
  public items!: Realm.List<DayItem>

  get points() {
    let points = this.items.reduce((a: number, b?: DayItem) => {
      return b ? a + b.points : a
    }, 0)

    points = Math.floor(points * 100) / 100
    return points
  }
  get a() {
    let aTotal = this.items.reduce((a: number, b?: DayItem) => {
      return b ? a + b.a : a
    }, 0)

    aTotal = Math.floor(aTotal * 100) / 100
    return aTotal
  }
  get b() {
    let bTotal = this.items.reduce((a: number, b?: DayItem) => {
      return b ? a + b.b : a
    }, 0)

    bTotal = Math.floor(bTotal * 100) / 100
    return bTotal
  }
  get sortedItems(): Realm.List<DayItem> | undefined {
    if (!this.items) {
      return undefined
    }
    this.items.sorted('created', true)
  }
}

export default Day

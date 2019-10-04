import Realm from 'realm'

class DayItem {
  public static schema: Realm.ObjectSchema = {
    name: 'DayItem',
    primaryKey: 'id',
    properties: {
      id: 'string', // primary key
      description: 'string',
      points: {
        type: 'double',
        default: 0,
      },
      a: {
        type: 'double',
        default: 0,
      },
      b: {
        type: 'double',
        default: 0,
      },
      created: {
        type: 'date',
        default: new Date(),
      },
      deleted: {
        type: 'bool',
        default: false,
      },
      deletesId: 'string',
    },
  }

  public id!: string
  public description!: string
  public points: number = 0
  public a: number = 0
  public b: number = 0
  public created: Date = new Date()
  public deleted: boolean = false
  public deletesId?: string

  get pointsRounded() {
    return Math.floor(this.points * 100) / 100
  }
  get aRounded() {
    return Math.floor(this.a * 100) / 100
  }
  get bRounded() {
    return Math.floor(this.b * 100) / 100
  }
}

export default DayItem

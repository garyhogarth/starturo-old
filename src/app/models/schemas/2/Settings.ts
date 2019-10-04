import Realm from 'realm'

class Settings {
  public static schema: Realm.ObjectSchema = {
    name: 'Settings',
    primaryKey: 'id',
    properties: {
      id: 'string', // primary key
      userId: 'string',
      labelPoints: 'string',
      labelA: 'string',
      labelB: 'string',
      maxPoints: { type: 'double', default: 0 },
      maxA: { type: 'double', default: 0 },
      maxB: { type: 'double', default: 0 },
      startDay: { type: 'int', default: 0 },
      hideAds: { type: 'bool', default: false },
      created: { type: 'date', default: new Date() },
      deleted: { type: 'bool', default: false },
    },
  }

  public id!: string
  public userId!: string
  public labelPoints!: string
  public labelA!: string
  public labelB!: string
  public maxPoints: number = 0
  public maxA: number = 0
  public maxB: number = 0
  public startDay: number = 0
  public hideAds: boolean = false
  public created: Date = new Date()
  public deleted: boolean = false
}

export default Settings

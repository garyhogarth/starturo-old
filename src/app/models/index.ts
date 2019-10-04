import Realm from 'realm'

import schema1 from './schemas/1'
import schema2 from './schemas/2'

const schemas = [
  {
    schema: schema1,
    schemaVersion: 1,
  },
  {
    schema: schema2,
    schemaVersion: 2,
  },
]

let nextSchemaIndex =
  Realm.schemaVersion(Realm.defaultPath) < 0
    ? 0
    : Realm.schemaVersion(Realm.defaultPath)

while (nextSchemaIndex < schemas.length) {
  const migratedRealm = new Realm(schemas[nextSchemaIndex++])
  migratedRealm.close()
}

const realm = new Realm(schemas[schemas.length - 1])

export default realm

import DatabaseObj from './DatabaseObj';

abstract class DatabaseSchema  {
  abstract createEntry(client: String, object: DatabaseObj)
  abstract deleteEntry(client: String, id: String)
  abstract getEntry(client: String, id: String)
}

export default DatabaseSchema;

import DatabaseSchema from './Models/DatabaseSchema';
import DatabaseObj from './Models/DatabaseObj';

class DatabaseImpl implements DatabaseSchema  {

  getEntry(clientId: string, object: DatabaseObj) {
    console.log( `Entry for client id ${clientId} from database`)
  }

  createEntry(clientId: string, object: DatabaseObj) {
    console.log( `Entry for client id ${clientId} created in database`)
  }

  deleteEntry(clientId: string, objectId: string) {
    console.log( `Entry for client id ${clientId} deleted from database`)
  }

}

export default DatabaseImpl;
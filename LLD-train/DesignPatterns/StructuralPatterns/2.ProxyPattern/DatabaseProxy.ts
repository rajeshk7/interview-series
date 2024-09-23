import DatabaseSchema from './Models/DatabaseSchema';
import DatabaseObj from './Models/DatabaseObj';
import DatabaseImpl  from './DatabaseImpl';

class DatabaseProxy implements DatabaseSchema {
    dbImpl: DatabaseImpl = new DatabaseImpl();

    getEntry(clientId: string, object: DatabaseObj) {
        if(clientId === 'admin') 
            this.dbImpl.getEntry(clientId, object);
        else
            console.log('Access denied');
    }

    createEntry(clientId: string, object: DatabaseObj) {
        if(clientId === 'admin') 
            this.dbImpl.createEntry(clientId, object);
        else
            console.log('Access denied');
    }

    deleteEntry(clientId: string, objectId: string) {
        if(clientId === 'admin') 
            this.dbImpl.deleteEntry(clientId, objectId);
        else
            console.log('Access denied');
    }
}

export default DatabaseProxy;
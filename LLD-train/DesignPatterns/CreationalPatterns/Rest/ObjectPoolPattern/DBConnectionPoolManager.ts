import DBConnection from "./DBConnection";
import Color from "../../../../ConsoleColors"

class DBConnectionPoolManager   {
    static freeConnections: DBConnection[];
    static usedConnections: DBConnection[];
    static INITIAL_POOL_SIZE: number = 2;
    static MAX_POOL_SIZE: number = 4;
    static instance: DBConnectionPoolManager;

    private constructor() {
        DBConnectionPoolManager.freeConnections = [];
        DBConnectionPoolManager.usedConnections = [];
        for (let i = 0; i < DBConnectionPoolManager.INITIAL_POOL_SIZE; i++) {
            DBConnectionPoolManager.freeConnections.push(new DBConnection());
        }
    }

    static getInstance(): DBConnectionPoolManager {
        if (!DBConnectionPoolManager.instance) {
            console.log("\n" + Color.fgRed + "Creating DBConnectionPoolManager instance" + Color.reset + "\n");
            DBConnectionPoolManager.instance = new DBConnectionPoolManager();
        }
        return DBConnectionPoolManager.instance;
    }

    // In Java this method is synchronized to make it thread safe
    getConnection(): DBConnection {
        if (DBConnectionPoolManager.freeConnections.length === 0) {
            if (DBConnectionPoolManager.usedConnections.length < DBConnectionPoolManager.MAX_POOL_SIZE) {
                console.log("Creating new DB Connection");
                DBConnectionPoolManager.freeConnections.push(new DBConnection());
            } else {
                throw new Error("\n" + Color.fgBrightMagenta + "Maximum pool size reached, no free connections available" + Color.reset + "\n");
            }
        }
        const connection = DBConnectionPoolManager.freeConnections.pop();
        DBConnectionPoolManager.usedConnections.push(connection as DBConnection);
        console.log(Color.fgBrightBlue + "DB Connection acquired" + Color.reset);
        return connection as DBConnection;
    }

    releaseConnection(connection: DBConnection): void {
        const index = DBConnectionPoolManager.usedConnections.indexOf(connection);
        if (index > -1) {
            console.log(Color.fgBrightGreen + "DB Connection released" + Color.reset);
            DBConnectionPoolManager.usedConnections.splice(index, 1);
            DBConnectionPoolManager.freeConnections.push(connection);
        }
    }
}

export default DBConnectionPoolManager;
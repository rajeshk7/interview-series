import DBConnectionPoolManager from "./DBConnectionPoolManager";

const dbConnectionPoolManager = DBConnectionPoolManager.getInstance();
const connection1 = dbConnectionPoolManager.getConnection();
const connection2 = dbConnectionPoolManager.getConnection();
dbConnectionPoolManager.releaseConnection(connection1);
const connection3 = dbConnectionPoolManager.getConnection();
const connection4 = dbConnectionPoolManager.getConnection();
const connection5 = dbConnectionPoolManager.getConnection();
try {
    const connection6 = dbConnectionPoolManager.getConnection();
}
catch (e) {
    console.log(e.message);
}
dbConnectionPoolManager.releaseConnection(connection2);
dbConnectionPoolManager.releaseConnection(connection3);
dbConnectionPoolManager.releaseConnection(connection4);
dbConnectionPoolManager.releaseConnection(connection5);


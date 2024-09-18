class DBConnectionEager {
    private static instance: DBConnectionEager = new DBConnectionEager();

    private constructor() {
        console.log("DB Connection created");
    }

    public static getInstance(): DBConnectionEager {
        return DBConnectionEager.instance;
    }
}

const dbConnectionEager_1 = DBConnectionEager.getInstance();
const dbConnectionEager_2 = DBConnectionEager.getInstance();
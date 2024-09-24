class DBConnectionLazy {
    private static instance: DBConnectionLazy;

    private constructor() {
        console.log("DB Connection created");
    }

    public static getInstance(): DBConnectionLazy {
        if (!DBConnectionLazy.instance) {
            DBConnectionLazy.instance = new DBConnectionLazy();
        }
        return DBConnectionLazy.instance;
    }
}

const dbConnectionLazy_1 = DBConnectionLazy.getInstance();
const dbConnectionLazy_2 = DBConnectionLazy.getInstance();
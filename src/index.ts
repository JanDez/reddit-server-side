import { MikroORM } from "@mikro-orm/core";

const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'reddit-db',
        user: 'postgres',
        password: 'admin',
        type: 'postgresql',
        debug: process.env.NODE_ENV
    });

    console.log("hello");
}

main();


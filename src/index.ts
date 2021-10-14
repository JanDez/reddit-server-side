import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";


const main = async () => {
    const orm = await MikroORM.init(microConfig);

    const post = orm.em.create(Post, { title: "My first post baby", body: "Look mamma, I'm a content writer >:-)" });
    await orm.em.persistAndFlush(post);
    console.log("-------------------- sql 2 ----------------------");
    await orm.em.nativeInsert(Post, { title: "My second post", body: "Some shit here" });
}

main();


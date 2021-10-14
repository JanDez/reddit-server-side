import { Post } from "./entities/Post";
import { __prod__ } from "./constants";

export default {
    entities: [Post],
    dbName: 'reddit-db',
    user: 'postgres',
    password: 'admin',
    type: 'postgresql',
    debug: !__prod__,
} as const;
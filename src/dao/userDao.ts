import {getConnection} from "typeorm";
import {User} from "../models";

export class UserDao {

    public static async getUsers() {
        return await getConnection(process.env.NODE_ENV).getRepository(User).find();
    }

    public static async saveUsers(user: User) {
        return await getConnection(process.env.NODE_ENV).getRepository(User).save(user);
    }
}

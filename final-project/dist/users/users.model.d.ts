import { Model } from "sequelize-typescript";
export declare class User extends Model<User> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
}

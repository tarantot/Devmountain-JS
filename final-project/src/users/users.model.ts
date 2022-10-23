import { ApiProperty } from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript"
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { BanUserDto } from "./dto/ban-user.dto";
import { UsersController } from "./users.controller";


interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'Unique Identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@nosend.net', description: 'Electronic maid address'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345', description: 'passing word'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    // @ApiProperty({example: true, description: 'Banned or not'})
    // @Column({type: DataType.BOOLEAN, defaultValue: false})
    // banned: boolean;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Post)
    posts: Post[];
}

@Table({tableName: 'userActivated'})
export class Activated extends Model<User> {
    @ApiProperty({example: '1', description: 'Unique Identifier'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @ApiProperty({example: true, description: 'Activated or not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isActivated: boolean;

    @ApiProperty({example: 'You were a bad boy', description: 'Reason of ban'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;
}

@Table({tableName: 'banned_reason'})
export class Banned extends Model<User> {
    @ApiProperty({example: '1', description: 'Unique Identifier'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @ApiProperty({example: true, description: 'Banned or not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'You were a bad boy', description: 'Reason of ban'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;
}
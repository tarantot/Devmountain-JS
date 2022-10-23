import { ApiProperty } from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript"
import { User } from "src/users/users.model";
import { Role } from "./roles.model";


@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({example: '1', description: 'Unique Identifier of the string'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Unique role value'})
    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    roleId: number;

    @ApiProperty({example: '1', description: 'Unique Identifier of a user'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number;
}
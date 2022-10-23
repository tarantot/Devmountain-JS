import { ApiProperty } from "@nestjs/swagger";
import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript"
import { STRING, INTEGER } from "sequelize/types/data-types";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/users.model";


interface TokenSchema {
    userId: number;
    refreshToken: string;
}

@Table({tableName: 'tokens'})
export class tokenModel extends Model<User, CreateUserDto> {

    @ApiProperty({example: '1', description: 'Unique Identifier'})
    @ForeignKey(() => User.user_id)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    refreshToken: string;

}

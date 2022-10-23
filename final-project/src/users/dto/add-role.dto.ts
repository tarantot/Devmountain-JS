import { IsString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class AddRoleDto {
    @ApiProperty({example: 'ManagerUSER', description: 'Add user role'})
    @IsString({message: 'Must be a string'})
    readonly value: string;

    @ApiProperty({example: '1', description: 'Unique identifier'})
    @IsNumber({}, {message: 'Must be a number'})
    readonly userId: number;
}
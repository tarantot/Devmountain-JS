import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength, MaxLength, Matches, IsEmail, IsNotEmpty } from "class-validator"
//import { IsEmail } from "sequelize-typescript";

export class CreateUserDto {
    
    @ApiProperty({example: 'user@nosend.net', description: 'Electronic maid address'})
    @IsString({message: 'Must be a string!'})
    @IsEmail({}, {message: 'Please enter a valid email!'})
    @IsNotEmpty()
    readonly email: string;
    
    @ApiProperty({example: '12345', description: 'passing word'})
    @IsString({message: 'Must be a string!'})
    @MinLength(8, {message: 'Password should be not less than 8 !'})
    @MaxLength(100, {message: 'Password should be not longer than 100 characters !'})
    @Matches('/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/')
    @IsNotEmpty()
    readonly password: string;
}

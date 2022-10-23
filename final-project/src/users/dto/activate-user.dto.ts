import { IsString, IsNumber, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class ActivateUserDto {
    
    @ApiProperty({example: '1', description: 'Unique user identifyer'})
    @IsNumber({}, {message: 'Must be a number'})
    readonly user_id: number;
    
    @ApiProperty({example: true, description: 'Activated or not'})
    @IsBoolean({message: 'Must be TRUE or FALSE'})
    readonly isActivated: boolean;

    @ApiProperty({example: 'link', description: 'Activation link'})
    @IsString({message: 'Must be a string'})
    readonly activationLink: string;
}
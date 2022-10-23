import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsBoolean } from "class-validator";


export class BanUserDto {
    
    @ApiProperty({example: '1', description: 'Unique user identifyer'})
    @IsNumber({}, {message: 'Must be a number'})
    readonly user_id: number;
    
    @ApiProperty({example: true, description: 'Banned or not'})
    @IsBoolean({message: 'Must be a string'})
    readonly banned: boolean;
    
    @ApiProperty({example: 'You were a bad boy', description: 'Reason to ban'})
    @IsString({message: 'Must be a string'})
    readonly banReason: string;
} 
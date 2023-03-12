import { IsString, IsNumber } from "class-validator";

export class CreateUserDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly age: number;

    @IsString()
    readonly email: string;

    @IsString()
    readonly phone: string;
    
    @IsString({each: true})
    readonly skills: string[];
}

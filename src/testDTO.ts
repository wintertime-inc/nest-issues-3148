import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class TestDTO {
    @ApiModelProperty({
        required : true,
        description : 'You need to provide email for authentication.'
    })
    @IsEmail()
    @IsNotEmpty()
    mail: string;

    @ApiModelProperty({
        required : true,
        description : 'You need to provide password for authentication.'
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreatethemeconfigDto {
    @ApiProperty({default : '#fff'}) 
    bg_color : string
    @ApiProperty({default : 'https://t4.ftcdn.net/jpg/03/92/55/79/360_F_392557923_FCHEloSJcOq9FzElO6mIIGEW8p1aCiII.jpg'}) 
    logo:  string
    @ApiProperty() 
    userSettingId : string
}
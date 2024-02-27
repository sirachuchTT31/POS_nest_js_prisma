import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @ApiProperty()
    first_name: string
    @ApiProperty()
    last_name: string
    @ApiProperty()
    email: string
    @ApiProperty()
    address: string
    @ApiProperty()
    username: string
    @ApiProperty()
    password: string
    @ApiProperty({ default: "DEMO" })
    role_active: Role
    @ApiProperty({ default: false })
    first_login: boolean
}
export class CreateUserSettingDto {
    @ApiProperty()
    setting_code: string
    @ApiProperty({ default: 'DEFAULT' })
    is_default: Setting
}
enum Setting {
    DEFAULT,
    USERCUSTOM
}

export enum Role {
    DEMO = "DEMO",
    USER = "USER",
    ADMIN = "ADMIN"
}

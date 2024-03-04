import { ApiProperty } from '@nestjs/swagger';
export class CreateUserSettingDto {
    @ApiProperty()
    setting_code: string
    @ApiProperty({ default: true })
    is_default?: boolean
}

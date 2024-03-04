import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { UserSettingService } from './user-setting.service';
import { CreateUserSettingDto } from './dto/create-user-setting.dto';
import { UpdateUserSettingDto } from './dto/update-user-setting.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-setting')
@ApiTags('user-setting')
export class UserSettingController {
  constructor(private readonly userSettingService: UserSettingService) { }

  @Post('create')
  async create(@Body() createUserSettingDto: CreateUserSettingDto, res: Response) {
    const genarateSettingCode = 'setting-' + Date.now().toString(32) + '-' + Math.random().toString(10).replaceAll('.', '')
    const payload = {
      setting_code: genarateSettingCode,
    }
    let responseService = await this.userSettingService.create(payload);
    if (responseService == true) {

    }
    else {
      // return res.status(HttpStatus.BAD_REQUEST)
    }
  }

  @Get()
  findAll() {
    return this.userSettingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSettingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserSettingDto: UpdateUserSettingDto) {
    return this.userSettingService.update(+id, updateUserSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSettingService.remove(+id);
  }
}

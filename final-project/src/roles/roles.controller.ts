import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateRoleDto } from "./dto/create-role.dto"

@Controller('roles')
export class RolesController {
    constructor (private RolesService) {}

    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.RolesService.createRole(dto);
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.RolesService.getRoleByValue(value);
    }
}

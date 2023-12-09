import { Controller, Post, Patch, Delete, UnauthorizedException } from '@nestjs/common'
import { ModelController } from 'src/_controller/_database/_model.controller'
import { Status } from '../_entity/status/status.entity'
import { StatusService } from './status.service'
import * as path from 'path'

@Controller(__dirname.split(path.sep).pop())
export class StatusController extends ModelController<Status> {
    constructor(
        public readonly service: StatusService,
    ) {
        super(service)
    }

    @Post() async removeCreate() { throw new UnauthorizedException() }
    @Patch(':id') async removeUpdate() { throw new UnauthorizedException() }
    @Delete(':id') async removeDelete() { throw new UnauthorizedException() }
}


import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { ExecutionTime } from 'src/ExecutionTime.interceptor';
import { MahasiswaDto } from './mahasiswa.dto';

@Controller('mahasiswa')
export class MahasiswaController {
    constructor (private mahasiswaService: MahasiswaService){

    }

    @Post()
    @UseInterceptors(ExecutionTime)
    create(@Body(new ValidationPipe()) createMahasiswaDto : MahasiswaDto){
        return this.mahasiswaService.create(createMahasiswaDto);
    }

    @Get()
    findAll(){
        return this.mahasiswaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : number){
        return this.mahasiswaService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() createMahasiswaDto : MahasiswaDto ){
        return this.mahasiswaService.updateOne(id,createMahasiswaDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.mahasiswaService.delete(id);
    }
}

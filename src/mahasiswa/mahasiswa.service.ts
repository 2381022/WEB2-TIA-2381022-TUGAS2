import { Injectable } from '@nestjs/common';
import { Mahasiswa } from './mahasiswa.entity';
import { MahasiswaDto } from './mahasiswa.dto';

@Injectable()
export class MahasiswaService {

    private currentId : number = 0;
    private mahasiswa: Mahasiswa[] = [];

    create(CreatMahassiwaDto : MahasiswaDto){
        const newMahasiswa: Mahasiswa = {
            id : this.currentId,
            email : CreatMahassiwaDto.email,
            nama : CreatMahassiwaDto.nama,
            jurusan: CreatMahassiwaDto.jurusan,
            fakultas: CreatMahassiwaDto.fakultas

        }
        ++this.currentId;
        this.mahasiswa.push(newMahasiswa);
    }

    findAll() : Mahasiswa[]{
        return this.mahasiswa
    }

    findOne(id :number) : Mahasiswa[]{
        return this.mahasiswa.filter((newMahasiswa) => newMahasiswa.id == id)
    }

    delete(id: number){
        this.mahasiswa = this.mahasiswa.filter((newMahasiswa) => newMahasiswa.id != id);
    }

    updateOne(id: number, CreatMahasiswaDto : MahasiswaDto){
        this.mahasiswa.forEach((newMahasiswa) =>{
            if(newMahasiswa.id == id){
                newMahasiswa.nama = CreatMahasiswaDto.nama;
                newMahasiswa.email = CreatMahasiswaDto.email;
                newMahasiswa.jurusan = CreatMahasiswaDto.jurusan;
                newMahasiswa.fakultas = CreatMahasiswaDto.fakultas;
            }
        });
    }
}

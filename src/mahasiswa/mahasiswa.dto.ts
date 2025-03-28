import { IsEmail, IsString } from "class-validator";


export class MahasiswaDto {
    @IsString()
    nama: string;
    @IsEmail()
    email: string;
    @IsString()
    jurusan: string;
    @IsString()
    fakultas: string;
}

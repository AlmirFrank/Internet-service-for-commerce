import { IsString, MinLength, MaxLength } from "class-validator";
  
  export class CustomerDto {

    @IsString({ message: 'O nome inserido é inválido!' })
    @MinLength(4, { message: 'O campo nome deve ter no mínimo 4 caracteres' })
    @MaxLength(30, { message: 'O campo nome deve ter no máximo 30 caracteres' })
    name: string;

    @IsString({ message: 'O CPF inserido é inválido!' })
    @MinLength(11, { message: 'O campo cpf deve ter no mínimo 11 caracteres' })
    @MaxLength(12, { message: 'O campo cpf deve ter no máximo 12 caracteres' })
    cpf: string;

    @IsString({ message: 'O endereço inserido é inválido!' })
    address: string;

    @IsString({ message: 'O nome do bairro inserido está incorreto!' })
    bairro: string;

    @IsString({ message: 'O nome da cidade inserido está incorreto!' })
    city: string;

    @IsString({ message: 'O número de CEP inserido está incorreto!' })
    @MinLength(8, { message: 'O campo CEP deve ter no mínimo 8 dígitos' })
    @MaxLength(10, { message: 'O campo CEP deve ter no máximo 10 dígitos' })
    cep: string;

  }
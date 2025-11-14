import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatedPostDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  author: string;
}

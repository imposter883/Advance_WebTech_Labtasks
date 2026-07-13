import { Type } from 'class-transformer';
import {IsInt,IsNotEmpty,IsString,Min,Max,} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(6)
  credit: number;

  @IsString()
  @IsNotEmpty()
  course_teacher: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
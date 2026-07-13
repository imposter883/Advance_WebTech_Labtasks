import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class UpdateCourseDto {
    @IsNotEmpty()
    @IsString()
    name?: string;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(6)
    credit?: number;

    @IsNotEmpty()
    @IsString()
    course_teacher?: string;

    @IsNotEmpty()
    @IsString()
    description?: string;
}
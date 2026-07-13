import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    getAllCourse(): {
        id: number;
        name: string;
        credit: number;
        course_teacher: string;
        description: string;
    }[];
    getCourseById(id: string): {
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: {
            id: number;
            name: string;
            credit: number;
            course_teacher: string;
            description: string;
        };
    };
    createCourse(course: CreateCourseDto): {
        message: string;
        data: {
            name: string;
            credit: number;
            course_teacher: string;
            description: string;
            id: number;
        };
    };
    uploadFile(file: Express.Multer.File): {
        message: string;
        path: string;
    };
    updateCourse(id: string, course: UpdateCourseDto): {
        message: string;
        course?: undefined;
    } | {
        message: string;
        course: UpdateCourseDto;
    };
    patchedCourse(id: string, course: UpdateCourseDto): {
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: UpdateCourseDto;
    };
    deleteCourse(id: string): {
        message: string;
        deleteCourse?: undefined;
    } | {
        message: string;
        deleteCourse: {
            id: number;
            name: string;
            credit: number;
            course_teacher: string;
            description: string;
        };
    };
}

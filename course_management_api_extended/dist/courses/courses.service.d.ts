import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
export declare class CoursesService {
    private courses;
    getAllCourse(): {
        id: number;
        name: string;
        credit: number;
        course_teacher: string;
        description: string;
    }[];
    getCourseById(id: number): {
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
    updateCourse(id: number, course: UpdateCourseDto): {
        message: string;
        course?: undefined;
    } | {
        message: string;
        course: UpdateCourseDto;
    };
    patchedCourse(id: number, course: UpdateCourseDto): {
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: UpdateCourseDto;
    };
    deleteCourse(id: number): {
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

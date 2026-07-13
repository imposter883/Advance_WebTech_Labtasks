import { CourseService } from './course.service';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(): {
        id: number;
        name: string;
        credit: string;
    }[];
    getCourseById(id: string): {
        id: number;
        name: string;
        credit: string;
    } | undefined;
    createCourse(course: {
        name: string;
        credit: string;
    }): {
        id: number;
        name: string;
        credit: string;
    };
    updateCourse(id: string, course: {
        name: string;
        credit: string;
    }): "Course not found" | {
        id: number;
        name: string;
        credit: string;
    };
    patchCourse(id: string, course: {
        name?: string;
        credit?: string;
    }): "Course not found" | {
        id: number;
        name: string;
        credit: string;
    };
    deleteCourse(id: string): "Course not found" | "Course deleted successfully";
}

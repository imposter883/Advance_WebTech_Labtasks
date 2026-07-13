export declare class CourseService {
    private courses;
    getAllCourses(): {
        id: number;
        name: string;
        credit: string;
    }[];
    getCourseById(id: number): {
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
    updateCourse(id: number, course: {
        name: string;
        credit: string;
    }): {
        id: number;
        name: string;
        credit: string;
    } | "Course not found";
    patchCourse(id: number, courses: {
        name?: string;
        credit?: string;
    }): {
        id: number;
        name: string;
        credit: string;
    } | "Course not found";
    deleteCourse(id: number): "Course not found" | "Course deleted successfully";
}

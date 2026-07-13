"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
let CoursesService = class CoursesService {
    courses = [
        {
            "id": 1,
            "name": "Introduction to Programming",
            "credit": 3,
            "course_teacher": "Nazia Alfaz",
            "description": "Learn about Basic concepts of c++ "
        },
        {
            "id": 2,
            "name": "Introduction to Programming Lab",
            "credit": 1,
            "course_teacher": "Nazia Alfaz",
            "description": "Implementation of c++ concepts "
        },
        {
            "id": 3,
            "name": "Object Oriented Programming",
            "credit": 3,
            "course_teacher": "Argha Das",
            "description": "Learn about Basic concepts of object oriented programming in java and implementation."
        },
        {
            "id": 4,
            "name": "Data Structure",
            "credit": 3,
            "course_teacher": "Sazzad Hossain",
            "description": "Learn About Data Structure"
        },
        {
            "id": 5,
            "name": "Data Structur Lab",
            "credit": 1,
            "course_teacher": "Mazed Ul Haque",
            "description": "Implement the Data Structure"
        },
        {
            "id": 6,
            "name": "Algorithms",
            "credit": 3,
            "course_teacher": "Pritom Khan Boni",
            "description": "Learn and implement Algorithms"
        },
    ];
    getAllCourse() {
        const course = this.courses;
        return course;
    }
    getCourseById(id) {
        const course = this.courses.find(cour => cour.id === id);
        if (!course) {
            return { message: "Course not Found" };
        }
        return {
            message: "Course Found Successfully!",
            data: course
        };
    }
    createCourse(course) {
        const newCourse = {
            id: this.courses.length + 1,
            ...course
        };
        this.courses.push(newCourse);
        return {
            message: "Course Created Successfully!",
            data: newCourse
        };
    }
    updateCourse(id, course) {
        const update = this.courses.find(cour => cour.id === id);
        if (!update) {
            return {
                message: "Course not Found!"
            };
        }
        Object.assign(update, course);
        return {
            message: "Course Updated Successfully",
            course
        };
    }
    patchedCourse(id, course) {
        const patch = this.courses.find(cour => cour.id === id);
        if (!patch) {
            return {
                message: "Course not Found!"
            };
        }
        Object.assign(patch, course);
        return {
            message: "Course Patched Successfully",
            data: course
        };
    }
    deleteCourse(id) {
        const index = this.courses.findIndex(cour => cour.id === id);
        if (index === -1) {
            return {
                message: "Course not Found"
            };
        }
        const deleteCourse = this.courses[index];
        this.courses.splice(index, 1);
        return {
            message: "Course Deleted Successfully",
            deleteCourse
        };
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map
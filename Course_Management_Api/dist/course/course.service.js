"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
let CourseService = class CourseService {
    courses = [
        {
            "id": 1,
            "name": "Introduction to Programming",
            "credit": "3"
        },
        {
            "id": 2,
            "name": "Object-Oriented Programming",
            "credit": "3"
        },
        {
            "id": 3,
            "name": "Data Structures and Algorithms",
            "credit": "3"
        },
        {
            "id": 4,
            "name": "Web Technologies",
            "credit": "3"
        },
        {
            "id": 5,
            "name": "Database Management Systems",
            "credit": "3"
        },
        {
            "id": 6,
            "name": "Software Engineering",
            "credit": "3"
        },
        {
            "id": 7,
            "name": "Mobile Application Development",
            "credit": "3"
        },
        {
            "id": 8,
            "name": "Advance Programming in Web Technologies",
            "credit": "3"
        }
    ];
    getAllCourses() {
        const cousesList = this.courses;
        return cousesList;
    }
    getCourseById(id) {
        const course = this.courses.find(course => course.id === id);
        return course;
    }
    createCourse(course) {
        const newCourse = {
            id: this.courses.length + 1,
            name: course.name,
            credit: course.credit
        };
        this.courses.push(newCourse);
        return newCourse;
    }
    updateCourse(id, course) {
        const courseIndex = this.courses.find(courses => courses.id === id);
        if (!courseIndex) {
            return "Course not found";
        }
        courseIndex.name = course.name;
        courseIndex.credit = course.credit;
        return courseIndex;
    }
    patchCourse(id, courses) {
        const courseIndex = this.courses.find(courses => courses.id === id);
        if (!courseIndex) {
            return "Course not found";
        }
        if (courses.name) {
            courseIndex.name = courses.name;
        }
        if (courses.credit) {
            courseIndex.credit = courses.credit;
        }
        return courseIndex;
    }
    deleteCourse(id) {
        const courses = this.courses.find(courses => courses.id === id);
        if (!courses) {
            return "Course not found";
        }
        this.courses = this.courses.filter(course => course.id !== id);
        return "Course deleted successfully";
    }
};
exports.CourseService = CourseService;
exports.CourseService = CourseService = __decorate([
    (0, common_1.Injectable)()
], CourseService);
//# sourceMappingURL=course.service.js.map
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    private courses = [
        {
            "id":1,
            "name":"Introduction to Programming",
            "credit":"3"
        },
        {
            "id":2,
            "name":"Object-Oriented Programming",
            "credit":"3"  
        },
        {
            "id":3,
            "name":"Data Structures and Algorithms",
            "credit":"3"
        },
        {
            "id":4,
            "name":"Web Technologies",
            "credit":"3"
        },
        {
            "id":5,
            "name":"Database Management Systems",
            "credit":"3"
        },
        {
            "id":6,
            "name":"Software Engineering",
            "credit":"3"
        },
        {
            "id":7,
            "name":"Mobile Application Development",
            "credit":"3"
        },
        {
            "id":8,
            "name":"Advance Programming in Web Technologies",
            "credit":"3"
        }
    ];

    getAllCourses() {
        const cousesList = this.courses;
        return cousesList;
    }

    getCourseById(id: number) {
        const course = this.courses.find(course => course.id === id);
        return course;
    }

    createCourse(course: {name: string, credit: string}) {
        const newCourse = {
            id: this.courses.length + 1,
            name: course.name,
            credit: course.credit
        };
        this.courses.push(newCourse);
        return newCourse;
    }

    updateCourse(id: number, course: {name: string, credit: string}) {
        const courseIndex = this.courses.find(courses => courses.id === id);
        if(!courseIndex) {
            return "Course not found";
        }
        courseIndex.name = course.name;
        courseIndex.credit = course.credit;
        return courseIndex;
    }

    patchCourse(id: number, courses: {name?: string, credit?: string}) {
        const courseIndex = this.courses.find(courses => courses.id === id);
        if(!courseIndex) {
            return "Course not found";
        }
        if(courses.name) {
            courseIndex.name = courses.name;
        }
        if(courses.credit) {
            courseIndex.credit = courses.credit;
        }
        return courseIndex;
    }

    deleteCourse(id: number) {
        const courses = this.courses.find(courses => courses.id === id);
        if(!courses) {
            return "Course not found";
        }
        this.courses = this.courses.filter(course=> course.id !== id);
        return "Course deleted successfully";
    }
}

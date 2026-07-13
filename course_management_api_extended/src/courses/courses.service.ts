import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';

@Injectable()
export class CoursesService {
    private courses = [
        {
            "id" : 1,
            "name" : "Introduction to Programming",
            "credit":3,
            "course_teacher":"Nazia Alfaz",
            "description":"Learn about Basic concepts of c++ "
        },
        {
            "id" : 2,
            "name" : "Introduction to Programming Lab",
            "credit":1,
            "course_teacher":"Nazia Alfaz",
            "description":"Implementation of c++ concepts "
        },
        {
            "id" : 3,
            "name" : "Object Oriented Programming",
            "credit":3,
            "course_teacher":"Argha Das",
            "description":"Learn about Basic concepts of object oriented programming in java and implementation."
        },
        {
            "id" : 4,
            "name" : "Data Structure",
            "credit":3,
            "course_teacher":"Sazzad Hossain",
            "description":"Learn About Data Structure"
        },
        {
            "id" : 5,
            "name" : "Data Structur Lab",
            "credit":1,
            "course_teacher":"Mazed Ul Haque",
            "description":"Implement the Data Structure"
        },
        {
            "id" : 6,
            "name" : "Algorithms",
            "credit":3,
            "course_teacher":"Pritom Khan Boni",
            "description":"Learn and implement Algorithms"
        },
    ]

    getAllCourse(){
        const course = this.courses;
        return course;
    }

    getCourseById(id:number){
        const course = this.courses.find(cour=> cour.id===id);
        if(!course){
            return {message:"Course not Found"}
        }
        return {
            message:"Course Found Successfully!",
            data:course
        }
    }

    createCourse(course: CreateCourseDto){
        const newCourse={
            id: this.courses.length+1,
            ...course
        }
        this.courses.push(newCourse);
        return{
            message:"Course Created Successfully!",
            data:newCourse
        }

    }

    updateCourse(id:number,course:UpdateCourseDto){
        const update = this.courses.find(cour=>cour.id===id);
        if(!update){
            return{
                message:"Course not Found!"
            };
        }
        Object.assign(update,course)
        return{
            message:"Course Updated Successfully",
            course
        }
    }

    patchedCourse(id:number,course:UpdateCourseDto){
        const patch = this.courses.find(cour=>cour.id===id);
        if(!patch){
            return{
                message:"Course not Found!"
            };
        }
        Object.assign(patch,course)
        return{
            message:"Course Patched Successfully",
            data:course
        }
    }

    deleteCourse(id:number){
        const index = this.courses.findIndex(cour=>cour.id===id);
        if(index===-1){
            return{
                message:"Course not Found"
            };
        }
        const deleteCourse = this.courses[index];
        this.courses.splice(index,1);
        return{
            message:"Course Deleted Successfully",
            deleteCourse
        }
    }
}

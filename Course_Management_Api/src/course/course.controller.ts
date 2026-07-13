import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

  constructor(private readonly courseService: CourseService){}

  @Get()
  getAllCourses() {
    const all = this.courseService.getAllCourses();
    return all;
  }

  @Get(':id')
  getCourseById(@Param('id') id: string) {
    const allById = this.courseService.getCourseById(+id);
    return allById;
  }

  @Post()
  createCourse(@Body() course: {name: string, credit: string}) {
    const createdCourse = this.courseService.createCourse(course);
    return createdCourse;
  }

  @Put(':id')
  updateCourse(@Param('id') id: string, @Body() course: {name: string, credit: string}) {
    const updatedCourse = this.courseService.updateCourse(+id, course);
    return updatedCourse;
  }

  @Patch(':id')
  patchCourse(@Param('id') id: string,@Body() course: {name?: string, credit?: string}) {
    const patchedCourse = this.courseService.patchCourse(+id, course);
    return patchedCourse;
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    const deletedCourse = this.courseService.deleteCourse(+id);
    return deletedCourse;
  }

}

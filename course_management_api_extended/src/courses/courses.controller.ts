import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getAllCourse(){
    return this.coursesService.getAllCourse();
  }

  @Get(':id')
  getCourseById(@Param('id')id:string){
    return this.coursesService.getCourseById(+id);
  }

  @Post()
  createCourse(@Body() course:CreateCourseDto){
    return this.coursesService.createCourse(course);
  }

  @Post("file")
  @UseInterceptors(FileInterceptor('file',
    {
      storage:diskStorage({
        destination:'./uploads',
        filename:(req,file,cb)=>{
          const filename = Date.now()+'_'+file.originalname;
          cb(null,filename)
        }
      }),

      fileFilter:(req,file,cb)=>{
        if(file.originalname.match(/^.*\.(jpg|jpeg|pdf)$/)){
          cb(null,true)
        }else{
          cb(
            new BadRequestException("File not satisfied the Type"),false
          )
        }
      },

      limits:{
        fileSize:5*1024*1024
      }
    }
  ))
  uploadFile(@UploadedFile()file:Express.Multer.File){
    return{
      message:"File Uploaded Successfully",
      path: file.path
    }
  }

  @Put(':id')
  updateCourse(@Param('id')id:string,@Body() course:UpdateCourseDto){
    return this.coursesService.updateCourse(+id,course);
  }

  @Patch(':id')
  patchedCourse(@Param('id')id:string,@Body() course:UpdateCourseDto){
    return this.coursesService.patchedCourse(+id,course);
  }

  @Delete(':id')
  deleteCourse(@Param('id')id:string){
    return this.coursesService.deleteCourse(+id);
  }
}

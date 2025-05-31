import { Router } from 'express';
import {getLecturesByCourseId, getAllCourses} from '../controllers/course.controller.js';
import { isLoggedIn} from '../middlewares/auth.middleware.js';


const router =  Router();

router.route('/')  
   .get(getAllCourses);


router.route('/:id') 
    .get(isLoggedIn, getLecturesByCourseId);



export default router;


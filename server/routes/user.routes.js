import express from 'express';
import { register, login, logout, getProfile,forgotPassword,resetPassword,changePassword,updateUser } from '../controllers/user.controller.js';
import { isLoggedIn } from '../middlewares/auth.middleware.js';
import upload from '../middlewares/multer.middleware.js';

const router = express.Router();
// import { Router} from "express";

// import {register,login , logout, getProfile} from "../controllers/user.controller.js";


router.post ('/register',upload.single("avatar"), register);
router.post ('/login', login);
router.get ('/logout', logout);
router.get ('/me',isLoggedIn, getProfile);
router.post('/reset',forgotPassword);
router.post('/reset/:resetToken',resetPassword);
router.post('/change-password',isLoggedIn,changePassword);
router.put ('/update', isLoggedIn, upload.single ( "avatar"), updateUser)

export default router;



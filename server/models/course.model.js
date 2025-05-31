import { model, Schema } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minLength: [8, 'Title must be at least 8 characters'],
    maxLength: [59, 'Title must be less than 59 characters'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minLength: [8, 'Description must be at least 8 characters'],
    maxLength: [200, 'Description must be less than 200 characters'],
  },
  category: {
    type: String,
    required: true
  },
  thumbnail: {
    public_id: {
      type: String,
      required: true
    },
    secure_url: {
      type: String,
      required: true
    }
  },
  lectures: [
    {
      title: {
        type: String,
        required: [true, 'Lecture title is required'],
      },
      description: {
        type: String,
        required: [true, 'Lecture description is required'],
      },
      lecture: {
        public_id: {
          type: String,
          required: true
        },
        secure_url: {
          type: String,
          required: true
        }
      }
    }
  ],
  numbersOfLectures: {
    type: Number,
    default: 0,
  },
  createdBy: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// export default model('Course', courseSchema);


// import { model ,Schema} from "mongoose";
// const courseSchema = new Schema({
//     title:{
//         type:String,
//         required:[true, 'Title is required'],
//         minLength:[8, 'Title must be greater than 8 words'],
//         maxLength:[59,'Title must be less than 59 length'],
//         trim:true
//     },
//     description:{
//         type:String,
//         required:[true, 'Description is required'],
//         minLength:[8, 'Description must be greater than 8 words'],
//         maxLength:[200,'Description must be less than 200 length'],
//     },
//     category : {
//         type: String,
//         required:true
//     },
//     thumbnail:{
//         public_id: {
//             type:String,
//             required:true
//         },
//         secure_url:{
//             type:String,
//             required:true
//         }

//     },
//     lectures: [
//         {
        
//         title :String ,
//         description: String,
//         required:true,
//         lecture :{
//             public_id: {
//                 type:String,
//                 required:true
//             },
//             secure_url:{
//                 type:String,
//                 required:true
//             }
//           }
//         }

//  ],
//  numbersOfLectures:{
//     type:Number,
//     default:0,
//  },
//  createdBy:{
//     type: String,
//     required:true
//  }
// },{   timestamps:true
    
// });

 export  default courseSchema;
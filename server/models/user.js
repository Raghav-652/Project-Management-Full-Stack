import bcrypt from 'bcryptjs';
import mongoose, { Schema } from 'mongoose';


// import User from '../models/user.js'; // For ESM
// import User from '../models/user';
const userSchema = new Schema(
    
    {
name: {type: String, required: true},
title: {type: String, required: true},
role: {type: String, required: true},
email: {type: String, required: true, unique: true},
password: {type: String, required: true},
isAdmin: { type: Boolean, required: true, default: false},
tasks: [{type: Schema.Types.ObjectId, ref: "Task" }],
isActive: { type: Boolean, required: true, default: true },

},
{ timestamps: true}

);

userSchema.pre("save", async function (next){
    if (!this.isModified("password")) 
        return next();
    

const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);

next();

});


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.models?.User || mongoose.model('User', userSchema);


export default User;

















// import bcrypt from 'bcryptjs';
// import mongoose, { Schema } from 'mongoose';

// if (mongoose.models.User) {
//   delete mongoose.models.User;
// }

// const userSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     title: { type: String, required: true },
//     role: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     isAdmin: { type: Boolean, required: true, default: false },
//     tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
//     isActive: { type: Boolean, required: true, default: true },
//   },
//   { timestamps: true }
// );

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);

//   next();
// });

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// export default User;

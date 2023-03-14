import mongoose from "mongoose";


import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    status: String,
    Reponame: String,
    type: String,
    ruleid: String,
    path: String,
    line: String,
    description: String,
    security: String,
},
{timestamps: true}
)

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'scan' );


const scan = mongoose.model('scan', userSchema);

export default scan;
import mongoose from 'mongoose';

const checkinSchema = new mongoose.Schema({
    employee_id: {
        type : mongoose.Schema.ObjectId,
        ref : "employees"
    },
    checkIn: {
        type : Date
    },
    checkOut: {
        type: Date
    },
    comment: {
        type : String
    },
    duration : {
        type: Number
    }
}, { collection: 'checkins', versionKey: false });

const CheckIn = mongoose.model("CheckIn", checkinSchema);

export default CheckIn;


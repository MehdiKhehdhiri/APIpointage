import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {
        type : String,
    },
    firstName: {
        type : String
    },
    dateCreated: {
        type: Date
    },
    department: {
        type : String
    }
}, { collection: 'employees', versionKey: false });

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;


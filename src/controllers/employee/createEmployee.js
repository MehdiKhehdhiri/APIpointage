import Employee from "../../models/employee.model.js";
import mongoose from "mongoose";
import moment from "moment";

export async function createEmployee(req, res) {
    try {
        const newEmployee = new Employee({
            _id: new mongoose.Types.ObjectId(),
            name : req.body.name,
            firstName : req.body.firstName,
            dateCreated : moment().format("YYYY-MM-DD"),
            department : req.body.department
        });

        await newEmployee.save();

        return res.status(200).json({success : true});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "unknown_error"})
    }
}
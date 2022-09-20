import Employee from "../../models/employee.model.js";
import CheckIn from "../../models/checkin.model.js"
import mongoose from "mongoose";


export async function checkIn(req, res) {
    
    try {
        const employee = await Employee.findOne({ _id: new mongoose.Types.ObjectId(req.body.employee_id)});
    
        if (!employee) {
            return res.status(404).json({ message: "employee_not_found" })
        }

            

        const today = new Date()
        const yesterday = new Date(today)
        yesterday.setDate(yesterday.getDate() - 1)
        const check = await CheckIn.findOne({
            $expr: {
                $and: [
                    { $eq: [{ $toString: "$employee_id" }, req.body.employee_id] },
                    { $gt: ["$checkIn", yesterday] },
                    { $lte: ["$checkIn", new Date(req.body.checkIn)] },
                    { $eq: ["$checkOut", null] },
                ]
            }
        })

        if (check) {
            return res.status(500).json({ message: "employee hasnt checked out yet" });
        }

        const checkin = new CheckIn({
            employee_id: new mongoose.Types.ObjectId(req.body.employee_id),
            checkIn: new Date(req.body.checkIn),
            checkOut: null,
            comment: req.body.comment,
            duration: null
        })

        await checkin.save();

        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ message: "unknown_error" })
    }
}
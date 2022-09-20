import Employee from "../../models/employee.model.js";
import CheckIn from "../../models/checkin.model.js"
import mongoose from "mongoose";


export async function checkOut(req, res) {
    try {
        const employee = await Employee.findOne({ _id: new mongoose.Types.ObjectId(req.body.employee_id) });

        if (!employee)
            return res.status(404).json({ message: "employee_not_found" })

        const today = new Date()
        const yesterday = new Date(today)

        yesterday.setDate(yesterday.getDate() - 1)

        const checkout = await CheckIn.findOneAndUpdate({
            $expr: {
                $and : [
                    {$eq : [{$toString: "$employee_id"}, req.body.employee_id]},
                    {$lte : ["$checkIn", today]},
                    {$gt: ["$checkIn", yesterday]},
                    {$lt: ["$checkIn", new Date(req.body.checkOut)]},
                    {$eq : ["$checkOut", null]}
                ]
            }
        }, { $set: { checkOut: new Date(req.body.checkOut) } })

        if (!checkout)
            return res.status(500).json({ message: "employee hasnt checked in yet" })
        const duration = new Date(req.body.checkOut) - new Date(checkout.checkIn);
        
        checkout.duration = duration / (1000 * 60 * 60);
        await checkout.save();

        return res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "unknown_error" })
    }
}
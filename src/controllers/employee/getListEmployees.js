import Employee from "../../models/employee.model.js";
import moment from "moment";

export async function getListEmployees(req, res) {
    try {
        const query = req.body.creationDate ? { $eq: moment(req.body.creationDate).format("YYYY-MM-DD") } : { $exists: true }

        const employees = await Employee.find({ dateCreated: query });

        return res.status(200).json({ list: employees });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "unknown_error" })
    }
}
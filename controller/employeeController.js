const employees = require('../models/employeeSchema')

exports.addEmployee = async(req,res) => {
    
    console.log(req.body);
    const{name,email,contact,address} = req.body

    try {
        const preuser = await employees.findOne({email})
        console.log(preuser);

        if(preuser){
            res.status(406).json("User Already exists")
        }
        else{
            const newuser = new employees({
                name,
                email,
                contact,
                address
            })
            await newuser.save()
            res.status(200).json(newuser)
        }

    } catch (error) {
        res.status(401).json(error)
    }
}


exports.getEmployees = async(req,res) => {
    try {
        const allEmployees = await employees.find()
        res.status(200).json(allEmployees)
    } catch (error) {
        res.status(401).json(error)
    }
}
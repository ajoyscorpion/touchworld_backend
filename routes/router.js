// import express
const express = require('express')

const employeeController = require("../controller/employeeController")

// to create route using express
const router = new express.Router

// route for get all employees
router.get("/allemployees",employeeController.getEmployees)

// route to add employee
router.post('/addEmployee',employeeController.addEmployee)

module.exports = router 
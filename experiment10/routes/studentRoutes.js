const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// CREATE - Add a new student
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create student",
      error: error.message
    });
  }
});

// READ ALL - Fetch all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      data: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch students",
      error: error.message
    });
  }
});

// READ SINGLE - Fetch one student by ID
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch student",
      error: error.message
    });
  }
});

// UPDATE - Update student by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: updatedStudent
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update student",
      error: error.message
    });
  }
});

// DELETE - Delete student by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete student",
      error: error.message
    });
  }
});

module.exports = router;

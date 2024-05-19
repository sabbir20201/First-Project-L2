import { Request, Response } from 'express';
import { Student } from './student.interface';
import { StudentServices } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'student are retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudents = async (req: Request, res: Response) => {
  try {
    // const studentId = req.params.studentId;
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'student is retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};

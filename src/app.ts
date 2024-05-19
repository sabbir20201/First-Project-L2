import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/students/student.route';
const app: Application = express();

// perser
app.use(express.json());
app.use(cors());
// appplicatopn routes
app.use('/api/v1/student', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  // const a = 20;
  const statusCode = 200;
  // res.send(a);
  res.sendStatus(statusCode);
};
app.get('/', getAController);
export default app;
console.log(process.cwd());

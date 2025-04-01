import express from 'express'
import myMiddleWare from './middlewares/testtingMid.js'
import HomeController from './controller/homecontroller.js'
import articleRoutes from "./routes/articleRoutes.js";

const app = express();

const port = 3000;

app.use(myMiddleWare);

app.get('/', HomeController.myHome);
app.use('/articles', articleRoutes);




app.listen(port, () => console.log(`server running at port ${port}`));


 
 const myMiddleWare =(req, res, next) =>{
    console.log('i am middleware');
    next();
}

export default myMiddleWare;
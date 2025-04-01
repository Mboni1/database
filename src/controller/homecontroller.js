
class HomeController  {

    static async myHome (req,res) {
        console.log('home page');
        return  res.json({
            message: 'home page'
        });
    };
}

export default HomeController;
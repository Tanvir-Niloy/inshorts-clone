const News = require('../model/news.js');


const getNews = async (req, res) => {

    try {
       
        const data = await News.find({})

        return res.status(200).json(data)

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports ={getNews}
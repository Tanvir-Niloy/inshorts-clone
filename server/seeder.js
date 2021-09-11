const News = require( './model/news');
const  data  = require ('./constant/data');

const DefaultData = async () => {
    try {
        await News.deleteMany({});
        await News.insertMany(data);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

module.exports = DefaultData;
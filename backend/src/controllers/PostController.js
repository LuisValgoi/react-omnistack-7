const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt'); // order by ASC
        return res.json(posts);
    },

    async store(req, res) {
        // creating variables to be used down there   
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        // effectively creating an object 
        const post = await Post.create({
            author,
            place,
            description,
            hashtags, 
            image
        });

        // returning the info of the posted content
        return res.json(post);
    }
};
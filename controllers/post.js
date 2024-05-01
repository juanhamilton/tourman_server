const Post = require("../models/post");
const image = require("../utils/image");

function createPost(req, res) {
    const post = new Post(req.body);
    post.created_at = new Date();
    const imagePath = image.getFilePath(req.files.miniature);
    post.miniature = imagePath;

    post.save((error, postStored) =>{
        if(error){
            res.status(400).send({msg: "Error al crear el post"});
        } else {
            res.status(201).send(postStored);
        }
    })

}

function getPosts(req, res){
    const { page = 1, limit = 10} = req.query;
    
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: { created_at: "desc"}
    }

    Post.paginate({}, options, (error, postsStored) =>{
        if(error){
            res.status(400).send({msg: "Error al obtener lo Posts"})
        } else {
            res.status(200).send(postsStored);
        }
    })
}

function updatePost(req, res){
    const { id } = req.params;
    const postData = req.body;

    if(req.files.miniature){
        const imagePath = image.getFilePath(req.files.miniature);
        postData.miniature = imagePath;
    }

    Post.findByIdAndUpdate({ _id: id}, postData, (error) =>{
        if(error){
            res.status(400).send({msg: "Error al actualizar Post"});
        } else {
            res.status(200).send({msg: "Post Actualizado"});
        }
    })
}

function deletePost(req, res){
    const { id } = req.params;
    
    Post.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg: "Error al intentar eliminar Post"});
        } else {
            res.status(200).send({msg: "Post Eliminado"});
        }
    })
}

function getPost(req, res) {
    const { path } = req.params;
    Post.findOne({path}, (error, postStored) =>{
        if(error){
            res.status(500).send({msg: "Error en el Servidor"});
        } else if(!postStored){
            res.status(400).send({msg: "El post no existe"});
        } else {
            res.status(200).send(postStored);
        }
    }) 
}

module.exports = {
    createPost,
    getPosts,
    updatePost,
    deletePost,
    getPost
}
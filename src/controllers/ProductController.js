const { response } = require('express');
const Product = require('../models/Product');
const Store = require('../models/Store');

const create = async(req,res) => {

    try {
        const product = await Product.create(req.body);
        return res.status(201).json({message: "Produto cadastrado com sucesso!", product : product});
    }catch(err){
        res.status(500).json({error: err});
    }
};

const index = async(req,res)=>{

    try{
        const product = await Product.findAll();
        return res.status(200).json({product});
    }catch (err){
        return res.status(500).json({err});
    }
};

const show = async(req,res)=> {
    const {id} = req.params;
    try {
        const product = await Product.findByPk(id);
        return res.status(200).json({product});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async (req,res)=>{
    const {id} = req.params;
    try{
        const [update] = await Product.update(req.body, {where: {id:id}});
        if (update){
            const product = await Product.findByPk(id);
            return res.status(200).json('Alterado com sucesso.');
        }
        throw new Error();
    }catch(err){
        return res.status(500).json ('Produto não encontrado');
    }
};

const destroy = async (req,res)=>{
    const {id} = req.params;
    try {
        const  deleted = await Product.destroy ({where: {id:id}});
        if (deleted){
            return res.status(200).json('Produto excluído com sucesso.');

        }
        throw new Error();
    }catch(err){
        return res.status(500).json('Produto não encontrado');
    }

};

const addToStorage = async (req,res)=>{
    const {id} = req.params;
    try{
        const store = await Store.findByPk(id);
        const product = await Product.findByPk(req.body.ProductId);
        await product.setStore(store);
        return res.status (200).json(product);
    }catch(err){
        return res.status(500).json({err});
    }
};

const removeToStorage =async (req,res) =>{
    const {id} = req.params;
    try{
        const product = await Product.findByPk(id);
        await product.setStore(null)
        return res.status(200).json(product);

    }catch(err){
        return res.status(500).json({err});
    }
}

module.exports ={
    create,
    index,
    show,
    update,
    destroy,
    addToStorage,
    removeToStorage
};
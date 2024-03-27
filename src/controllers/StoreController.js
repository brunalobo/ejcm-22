const { response } = require('sequelize');
const Product = require('../models/Product');
const Store = require('../models/Store')

const create = async (req,res)=>{

    try{
        const store = await Store.create(req.body);
        return res.status(201).json({message: 'Loja cadastrada!', store: store});

    }catch(err){
        return res.status(500).json({error: err});
    }
};

const index = async (req,res) =>{

    try{
        const store = await Store.findAll();
        return res.status(200).json({store});

    }catch(err){
        return res.status(500).json({err});
    }
};
const show = async(req,res) =>{
    const{id} = req.params;
    try{
        const store = await Store.findByPk(id);
        return res.status(200).json({store});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async (req,res) =>{
    const {id} = req.params;
    try{
        const [update] = await Store.update(req.body, {where: {id:id}})
        if (update){
            const store = await Product.findByPk(id);
            return res.status(200).json('Alterado com sucesso.');
        } 
        throw new Error();

    }catch(err){
        return res.status(500).json('Loja não encontrada');
    }
};

const destroy = async (req,res) =>{

    const {id} = req.params;
    try{
        const deleted = await Store.destroy({where: {id:id}});
        if (deleted){
            return res.status(200).json('Loja excluída com sucesso');
        }
        throw new Error();
    }catch(err){
        return res.status(500).json('Loja não encontrada')
    }
};

module.exports={
    create,
    index,
    show,
    update,
    destroy
}
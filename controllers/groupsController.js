const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');

const groupsModel = jsonTable('groups');

module.exports = {
    index: (req, res) => {

        let groups = groupsModel.all()

        res.render('groups/index',  { groups });
    },
    create: (req, res) => {
        res.render('groups/create');
    },
    store: (req, res) => {

        let group = req.body;

        groupId = groupsModel.create(group);

        res.redirect('/groups/' + groupId);
    },
    edit: (req, res) => {
        let group = groupsModel.find(req.params.id)
        let categories = categoriesModel.all();

        res.render('groups/edit', { group, categories });
    },
    update: (req, res) => {
        let group = req.body;

        group.id = req.params.id;

        groupId = groupsModel.update(group);

        res.redirect('/groups/' + groupId)
    },
    show: (req, res) => {
        let group = groupsModel.find(req.params.id);

        res.render('groups/detail', { group });
    },
    destroy: (req, res) => {

        let group = groupsModel.find(req.params.id);
        let imagePath = path.join(__dirname, '../public/img/groups/' + group.image);
        
        groupsModel.delete(req.params.id);

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }

        res.redirect('/groups')
    },
    search: (req, res) => {
        
        // Traigo todos los grupos

        // Filtro los grupos

        // Envío los grupos y lo que busco el usuario a la vista

        res.render('groups/search', {});
    },
}
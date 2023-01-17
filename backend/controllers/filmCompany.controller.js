const {FilmCompany} = require('../models/models')

class FilmCompanyController {
    async create(req, res) {
        if(req.user.isAdmin) {
            try {
                const {name} = req.body;
                const company = await FilmCompany.create({name})
                await company.save();
                return res.json(company)
            }catch (e) {
                return res.json({message: "Error", e})
            }
        } else {
            return res.status(400).json({message: "You are not authorized"})
        }
    }

    async getAll(req, res) {
        const companies = await FilmCompany.findAll()
        return res.json(companies)
    }

    async getOne(req, res) {
        let id = req.params.id
        let company = await FilmCompany.findOne({ where: { id: id }})
        res.status(200).send(company)
    };
}

module.exports = new FilmCompanyController();
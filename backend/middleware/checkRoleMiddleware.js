const jwt = require("jsonwebtoken");

module.exports = function(role) {
    return function(req, res, next) {
        if (req.method === 'OPTIONS') {
            return next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: 'Нет авторизации'})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if(decoded.role !== role) {
                return res.status(403).json({message: 'No access'})
            }
            req.user = decoded //Создаем любое поле, куда сохраняем токен.
            next()
        } catch (e) {
            res.status(400).json('token is not valid')
        }
    }
}


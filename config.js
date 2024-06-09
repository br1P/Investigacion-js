//aqui irian las configuraciones del servidor
exports.config = {
    port: process.env.PORT || 5000,
    db_url: process.env.DB_URL || 'mongodb://127.0.0.1:27017/db_investigacion'
}
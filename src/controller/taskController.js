const connection = require('../config/db');

async function storeTask(request, response) {
    const params = Array(
        request.body.nome,
        request.body.email
    );

    const query = "INSERT INTO notificacao_ofertas(nome,email) VALUE(?,?)";

    connection.query(query, params, (err, results) =>{
        console.log(err)
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops! Não deu...",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                })
        }
    })
}

module.exports = {
    storeTask
}
var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : '***',
    password : '***',
    port: '3306',
    database: '***',
});

export default function users(req) {
    connection.connect();

    var  userGetSql = 'SELECT * FROM users';
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //查 query
            connection.query(userGetSql,function (err, result) {
                if(err){
                    reject(errors);
                    console.log('[SELECT ERROR] - ',err.message);
                }

                console.log('---------------SELECT----------------');
                console.log(result);
                resolve(result);
                console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
            });

            connection.end();
        }, 1000);
    });
}


'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = users;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: '***',
    password: '***',
    port: '3306',
    database: '***'
});

function users(req) {
    connection.connect();

    var userGetSql = 'SELECT * FROM users';
    return new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
            //查 query
            connection.query(userGetSql, function (err, result) {
                if (err) {
                    reject(errors);
                    console.log('[SELECT ERROR] - ', err.message);
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

//# sourceMappingURL=users-compiled.js.map
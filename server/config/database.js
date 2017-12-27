var objection = require('objection');
var Model = objection.Model;
var Knex = require('knex');

var knex = Knex({
    client: 'pg',
    connection: {
        user: 'marossmrek',
        password: '12345',
        database: 'wawd'
    }
});

Model.knex(knex);

class Base extends Model {

    static get tableName() {
        return this.name.toLowerCase();
    }
};

module.export = knex;
module.exports.Base = Base;
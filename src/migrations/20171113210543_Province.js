exports.up = function (knex, Promise) {
    return knex.schema.createTable('provinces', (provinceTable) => {
        provinceTable.integer('id').notNullable();
        provinceTable.string('name').notNullable();
        provinceTable.string('name_eng').notNullable();
    }).then(() => {
        console.log('province migrate success.');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('provinces');
};
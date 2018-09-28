exports.up = function (knex, Promise) {
    return knex.schema.createTable('amphurs', (amphurTable) => {
        amphurTable.integer('id').notNullable();
        amphurTable.integer('province_id').notNullable();
        amphurTable.string('name').notNullable();
        amphurTable.string('name_eng').notNullable();
    }).then(() => {
        console.log('amphur migrate success.');        
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('amphurs');
};
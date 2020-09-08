
exports.up = function(knex) {
    return knex.schema
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('item', 255)
                .notNullable()
                .unique();
        }) //ingredients table
        .createTable('steps', tbl => {
            tbl.increments()
            tbl.string('step', 255)
                .notNullable()
                .unique();
    })//steps table
        .createTable('recipes', tbl => {
            tbl.increments()
            tbl.string('recipe') //column for recipe name
                .notNullable()
                .unique()
            tbl.float('qty')

            
            
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')

};

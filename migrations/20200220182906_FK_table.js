
exports.up = function (knex) {
    return knex.schema
        .createTable('recipe_ingredients', tbl => {
        tbl.increments();
  
        tbl.text('recipe_ingredients');
  
        // we need FK that references the PK on recipes/ingredients
        tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
  
        tbl
          .integer('ingredients_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
  
        tbl.unique(['recipe_id', 'ingredients_id']);
      });
  
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
   
};

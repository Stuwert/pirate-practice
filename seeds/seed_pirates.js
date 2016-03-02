
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({name: 'Anne Bonney', poison: 'Rum', accessory: 'hot temper', image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'}),
    knex('pirates').insert({name: 'Edward Teach', poison: 'Wives', accessory: '300 pirates', image_url: 'http://historylists.org/images/edward-teach.jpg'}),
    knex('pirates').insert({name: 'William Kidd', poison: 'Tar', accessory: 'accidentally attacking british ships', image_url: 'http://historylists.org/images/william-kidd.jpg'})
  );
};

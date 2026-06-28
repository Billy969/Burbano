module.exports = {
  // Specify the database type: here we use SQLite
  type: 'sqlite',

  // Name of the SQLite database file
  database: 'notes.sqlite',

  // Automatically synchronize the database schema with the entity definitions
  // NOTE: This is useful in development but should be false in production
  synchronize: true,

  // Disable logging of SQL queries (set to true to debug)
  logging: false,

  // Path to the entity definition files (used by TypeORM)
  entities: [__dirname + '/src/entities/*.js']
};
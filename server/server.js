const { app } = require('./app');

const { db } = require('./utils/dataBase.util');

db.authenticate()
  .then(() => console.log('Db aunthenticate'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Db synced'))
  .catch(err => console.log(err));

//se crea el servidor
const PORT = 3520;
app.listen(PORT, () => {
  console.log('Express app runnimg!!', PORT);
});

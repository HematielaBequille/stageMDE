// Simulons une base de données en mémoire
let users = [
    { id: 1, name: 'Alice', firstName: 'bla', rank: 'ble' },
    { id: 2, name: 'Bob', firstName: 'bla', rank: 'ble' }
  ];
  
  // GET - Récupérer tous les utilisateurs
  exports.getAllUsers = (req, res) => {
    res.json(users);
  };
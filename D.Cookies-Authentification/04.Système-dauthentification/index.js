const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: 'votre_cle_secrete', resave: true, saveUninitialized: true }));


app.use(passport.initialize());
app.use(passport.session());

const usersDB = {
  'utilisateur1': { id: 'utilisateur1', username: 'utilisateur1', password: 'mot_de_passe1' },
  'utilisateur2': { id: 'utilisateur2', username: 'utilisateur2', password: 'mot_de_passe2' }
};


passport.use(new LocalStrategy(
  (username, password, done) => {
    const user = usersDB[username];
    if (user && user.password === password) {
      return done(null, user);
    }
    return done(null, false, { message: 'Nom d\'utilisateur ou mot de passe incorrect' });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = usersDB[id];
  done(null, user);
});


app.get('/', (req, res) => {
  res.send('Page d\'accueil - Contenu public');
});


app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  })
);

app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send(`Bienvenue ${req.user.username} sur le tableau de bord - Contenu sécurisé`);
});

app.get('/login', (req, res) => {
  res.send(`
    <h2>Login</h2>
    <form method="post" action="/login">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required><br>
      <input type="submit" value="Login">
    </form>
  `);
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}


app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});


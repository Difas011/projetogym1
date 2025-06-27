// Backend completo para academia/cyberfitness

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuração do banco (ajuste para seu ambiente)
const sequelize = new Sequelize('academia', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres', // ou 'mysql'
});

// MODELOS
const Usuario = sequelize.define('Usuario', {
  nome: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  senha_hash: DataTypes.STRING,
  avatar_url: DataTypes.STRING,
  papel: { type: DataTypes.STRING, defaultValue: 'usuario' },
});

const Plano = sequelize.define('Plano', {
  nome: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  preco: DataTypes.DECIMAL,
  destaque: DataTypes.BOOLEAN,
});

const Assinatura = sequelize.define('Assinatura', {
  inicio: DataTypes.DATEONLY,
  fim: DataTypes.DATEONLY,
  status: { type: DataTypes.STRING, defaultValue: 'ativo' },
});

const Exercicio = sequelize.define('Exercicio', {
  nome: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  imagem_url: DataTypes.STRING,
  video_url: DataTypes.STRING,
});

const Treino = sequelize.define('Treino', {
  titulo: DataTypes.STRING,
  descricao: DataTypes.TEXT,
});

const TreinoExercicio = sequelize.define('TreinoExercicio', {
  series: DataTypes.INTEGER,
  repeticoes: DataTypes.INTEGER,
  carga: DataTypes.DECIMAL,
  duracao: DataTypes.INTEGER,
});

const Caloria = sequelize.define('Caloria', {
  data: DataTypes.DATEONLY,
  calorias_consumidas: DataTypes.INTEGER,
  calorias_gastas: DataTypes.INTEGER,
});

const Post = sequelize.define('Post', {
  titulo: DataTypes.STRING,
  conteudo: DataTypes.TEXT,
  publicado: DataTypes.BOOLEAN,
});

const Contato = sequelize.define('Contato', {
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  mensagem: DataTypes.TEXT,
});

// RELACIONAMENTOS
Usuario.hasMany(Treino);
Treino.belongsTo(Usuario);

Usuario.hasMany(Caloria);
Caloria.belongsTo(Usuario);

Usuario.hasMany(Post);
Post.belongsTo(Usuario);

Usuario.hasMany(Assinatura);
Assinatura.belongsTo(Usuario);

Plano.hasMany(Assinatura);
Assinatura.belongsTo(Plano);

Treino.belongsToMany(Exercicio, { through: TreinoExercicio });
Exercicio.belongsToMany(Treino, { through: TreinoExercicio });

// AUTENTICAÇÃO
const SECRET = 'seusegredoaqui';

function gerarToken(usuario) {
  return jwt.sign({ id: usuario.id, papel: usuario.papel }, SECRET, { expiresIn: '7d' });
}

async function autenticar(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ erro: 'Token não fornecido' });
  try {
    const [, token] = auth.split(' ');
    req.usuario = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ erro: 'Token inválido' });
  }
}

// ROTAS DE AUTENTICAÇÃO
app.post('/api/registro', async (req, res) => {
  const { nome, email, senha } = req.body;
  const senha_hash = await bcrypt.hash(senha, 10);
  try {
    const usuario = await Usuario.create({ nome, email, senha_hash });
    res.json({ usuario, token: gerarToken(usuario) });
  } catch (e) {
    res.status(400).json({ erro: 'Email já cadastrado' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario || !(await bcrypt.compare(senha, usuario.senha_hash))) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }
  res.json({ usuario, token: gerarToken(usuario) });
});

// ROTAS PROTEGIDAS (exemplo para treinos)
app.get('/api/treinos', autenticar, async (req, res) => {
  const treinos = await Treino.findAll({ where: { UsuarioId: req.usuario.id }, include: Exercicio });
  res.json(treinos);
});

app.post('/api/treinos', autenticar, async (req, res) => {
  const treino = await Treino.create({ ...req.body, UsuarioId: req.usuario.id });
  res.json(treino);
});

// Outras rotas: planos, assinaturas, exercícios, calorias, posts, contatos...
// Exemplo: listar exercícios
app.get('/api/exercicios', autenticar, async (req, res) => {
  const exercicios = await Exercicio.findAll();
  res.json(exercicios);
});

// Sincronizar banco e iniciar servidor
sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
  });
});
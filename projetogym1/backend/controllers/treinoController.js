const { Treino, Exercicio, TreinoExercicio } = require('../models');

// Listar todos os treinos de um usuário
exports.listarTreinos = async (req, res) => {
    try {
        const treinos = await Treino.findAll({
            where: { UsuarioId: req.usuario.id },
            include: [{ model: Exercicio }]
        });
        res.json(treinos);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar treinos.' });
    }
};

// Criar um novo treino
exports.criarTreino = async (req, res) => {
    try {
        const { titulo, descricao, exercicios } = req.body;
        const treino = await Treino.create({
            titulo,
            descricao,
            UsuarioId: req.usuario.id
        });

        // Adiciona exercícios ao treino, se enviados
        if (Array.isArray(exercicios)) {
            for (const ex of exercicios) {
                await TreinoExercicio.create({
                    TreinoId: treino.id,
                    ExercicioId: ex.id,
                    series: ex.series,
                    repeticoes: ex.repeticoes,
                    carga: ex.carga,
                    duracao: ex.duracao
                });
            }
        }

        res.status(201).json(treino);
    } catch (err) {
        res.status(400).json({ erro: 'Erro ao criar treino.' });
    }
};

// Buscar um treino específico
exports.buscarTreino = async (req, res) => {
    try {
        const treino = await Treino.findOne({
            where: { id: req.params.id, UsuarioId: req.usuario.id },
            include: [{ model: Exercicio }]
        });
        if (!treino) return res.status(404).json({ erro: 'Treino não encontrado.' });
        res.json(treino);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar treino.' });
    }
};

// Atualizar um treino
exports.atualizarTreino = async (req, res) => {
    try {
        const treino = await Treino.findOne({
            where: { id: req.params.id, UsuarioId: req.usuario.id }
        });
        if (!treino) return res.status(404).json({ erro: 'Treino não encontrado.' });

        await treino.update(req.body);
        res.json(treino);
    } catch (err) {
        res.status(400).json({ erro: 'Erro ao atualizar treino.' });
    }
};

// Deletar um treino
exports.deletarTreino = async (req, res) => {
    try {
        const treino = await Treino.findOne({
            where: { id: req.params.id, UsuarioId: req.usuario.id }
        });
        if (!treino) return res.status(404).json({ erro: 'Treino não encontrado.' });

        await treino.destroy();
        res.json({ mensagem: 'Treino deletado com sucesso.' });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao deletar treino.' });
    }
};

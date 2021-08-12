const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const elastacloud = require('./elastacloud')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/api', tipos)
router.use('/', elastacloud)


module.exports = router;

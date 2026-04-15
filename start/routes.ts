//rutas 
import router from '@adonisjs/core/services/router'
import UsuariosController from '#controllers/usuarios_controller'

router.get('/usuarios', [UsuariosController,'index'])

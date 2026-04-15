import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'


export default class UsuariosController {
    //consultar todos los usuarios
    index ({ response }: HttpContext) {
        const usuarios = db.rawQuery(
            'SELECT * FROM usuarios'
        )
        return response.json(usuarios)
    }
}
import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'usuarios.index': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'usuarios.index': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'usuarios.index': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}
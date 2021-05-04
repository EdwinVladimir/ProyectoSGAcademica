/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import vuetify from './vuetify'
// import GeneralGeneral from './components/General/General.vue'
// import CalificacionesCalificaciones from './components/Calificaciones/Calificaciones.vue'
//  import AnasisdatosAnasisdatos from './components/Anasisdatos/Anasisdatos.vue'
// import App from './components/App.vue'
import AlumnosAlumnos from './components/Alumnos/Alumnos.vue'
import AulasAulas from './components/Aulas/Aulas.vue'
// import DocentesDocentes from './components/Docentes/Docentes.vue'
//import MatriculacionMatriculacion from './components/Matriculacion/Matriculacion.vue'
//import ActividadesActividades from './components/Actividades/Actividades.vue'
//import EvaluacionesEvaluaciones from './components/Evaluaciones/Evaluaciones.vue'
import CursosCursos from './components/Cursos/Cursos.vue'
//import ModulosModulos from './components/Modulos/Modulos.vue'
//import SeccionSeccion from './components/Seccion/Seccion.vue'
//import MateriasMaterias from './components/Materias/Materias.vue'
//import PeriodosPeriodos from './components/Periodos/Periodos.vue'
//import PlanesPlanes from './components/Planes/Planes.vue'
//import HorariosHorarios from './components/Horarios/Horarios.vue'
//import ModalidadModalidad from './components/Modalidad/Modalidad.vue'
//import RepartoReparto from './components/Reparto/Reparto.vue'
//import EspecialidadEspecialidad from './components/Especialidad/Especialidad.vue'
//import TipogradoTipogrado from './components/Tipogrado/Tipogrado.vue'
//import TipocursoTipocurso from './components/Tipocurso/Tipocurso.vue'
//import TiposangreTiposangre from './components/Tiposangre/Tiposangre.vue'
//import PerfilPerfil from './components/Perfil/Perfil.vue'
//import RolesRoles from './components/Roles/Roles.vue'


    
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


 
 const app = new Vue({
   el: '#app',
   components: { 
       AlumnosAlumnos,
       AulasAulas,
       CursosCursos
    }

});
  //     Matriculacion,
  //     Actividades,
  //     Evaluaciones,  
  //     Modulos,
  //     Materias,
  //     Periodos,
  //     Planes,
  //     Horarios,
  //     Modalidad,
 //      Aula,
 //      Seccion,
 //      Reparto,
 //      Especialidad,
 //      Tipogrado,
 //      Tipocurso,
 //      tiposangre,
 //      Perfil,
  //     Roles
//       General,
//       Calificaciones,
//       Anasisdatos,
// DocentesDocentes,
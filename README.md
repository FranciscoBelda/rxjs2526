

# RxJS Mastery - Ejercicios de Programación Reactiva

Este repositorio contiene una serie de ejercicios prácticos para aprender y dominar **RxJS** (Reactive Extensions for JavaScript). El proyecto está estructurado de forma progresiva, desde conceptos básicos de Observables hasta el uso de operadores complejos de transformación y combinación.

## 📋 Requisitos Previos

Para ejecutar los ejercicios, necesitarás:

* **Node.js** (Versión LTS recomendada).
* **NPM**  para la gestión de paquetes.

## 🚀 Instalación y Uso

1. **Clonar el repositorio**:
```bash
git clone https://github.com/FranciscoBelda/rxjs2526.git
cd rxjs2526

```


2. **Instalar dependencias**:
```bash
npm install

```


3. **Ejecutar el proyecto**:
Este proyecto utiliza un servidor de desarrollo (probablemente Vite o Webpack Dev Server) para visualizar los resultados de los observables en la consola del navegador:
```bash
npm start

```


Luego, abre tu navegador en `http://localhost:xxxx` y revisa la **Consola de Desarrollador (F12)**.

## 🏗️ Estructura del Proyecto

El código está organizado en carpetas numeradas que representan diferentes etapas del aprendizaje de RxJS:

* **01-Observables**: Creación de observables básicos, `subscribe`, `unsubscribe` y el uso de `Observer`.
* **02-Operators**: Uso de operadores de filtrado y transformación comunes (`map`, `filter`, `tap`).
* **03-Combination**: Operadores para combinar múltiples flujos de datos (`merge`, `concat`, `forkJoin`, `combineLatest`).
* **04-Ajax**: Gestión de peticiones HTTP de forma reactiva con el operador `ajax`.
* **05-Transformación**: Operadores de aplanamiento como `mergeMap`, `switchMap` y `concatMap`.

## 🛠️ Conceptos Clave Implementados

* **Observables & Observers**: El núcleo de la librería.
* **Subjects**: Uso de `Subject` para multicasting y envío de datos a múltiples suscriptores.
* **Marble Diagrams**: Los ejercicios están diseñados para entender visualmente cómo fluye la información a través del tiempo.
* **Manejo de Memoria**: Implementación de patrones para evitar memory leaks mediante la limpieza de suscripciones.

## 📚 Operadores Destacados en el Proyecto

| Tipo | Operadores |
| --- | --- |
| **Creación** | `of`, `from`, `interval`, `timer`, `fromEvent` |
| **Transformación** | `map`, `pluck`, `mapTo`, `scan` |
| **Filtrado** | `filter`, `take`, `first`, `debounceTime`, `distinctUntilChanged` |
| **Combinación** | `startWith`, `endWith`, `concat`, `merge` |

## 👤 Autor

* **Francisco Belda** - [GitHub](https://github.com/FranciscoBelda)

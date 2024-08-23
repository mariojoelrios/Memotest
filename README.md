# Memotest

¡Bienvenido a Memotest! Un juego de memoria hecho con **React** y **Vite**.

## Cómo Jugar

1. **Selecciona una carta**: Haz clic en una carta para voltearla.
2. **Encuentra la pareja**: Haz clic en otra carta para encontrar su pareja.
3. **Memoriza las posiciones**: Intenta recordar las posiciones de las cartas.
4. **Gana el juego**: Encuentra todas las parejas para ganar.

## Reglas

- Puedes voltear solo dos cartas a la vez.
- Si las cartas no coinciden, se voltearán nuevamente.
- El objetivo es encontrar todas las parejas en el menor tiempo posible.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera para proyectos modernos.

## Codigos 

#### Lo que mas me costo en este proyecto hasta ahora 

```javacript
export function shuffle(arr) {
    let arr2 = []
    while (arr.length > 0) {
        const positionRamdon = Math.round(Math.random() * arr.length)
        const elemen = arr.splice(positionRamdon, 1)
        arr2 = arr2.concat(elemen)
    }
    return arr2
}

```

## Cómo Ejecutar el Proyecto

1. Clona este repositorio.
2. Instala las dependencias con `npm install` o `yarn install`.
3. Ejecuta el proyecto con `npm run dev` o `yarn dev`.

¡Diviértete jugando y entrenando tu memoria!

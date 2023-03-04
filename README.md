
# React Native Pokémons

Se debe crear una aplicación móvil que funcione como un catálogo de pokémon (Pokédex). 
En este pokédex deben poderse ver los pokemones del usuario, poder agregar nuevos 
pokémon, eliminar, ver el detalle/características de un pokémon de listado; y su vez tener un 
contador que indique el número de pokémons existentes en el pokédex. También debe de 
contener un pequeño perfl donde el usuario pueda editar sus datos personales.
Esta aplicación web deberá consumir el API abierta de pokémon (https://pokeapi.co/


## Módulos


#### 1. Navegación
a. Elementos

i. Menú estilo tabs en la parte inferior. Debe de contar con tres tabs:
- 1. Perfl
- 2. Catálogo de pokémons
- 3. Contador
ii. Header en la parte superior con un botón de navegación hacia atrás, 
en la pantalla que lo requiera.

![](https://github.com/OmarEspinosaCastro/AppMovilPokedex/blob/master/tres.jpeg)

#### 2. Tab Lista de pokémons
a. Elementos

i. Listado de pokémons en el pokédex. Cada pokémon debe de ir en un 
elemento tipo card.

ii. En cada card debe de haber un botón para poder eliminar el pokémon 
del listado y otro para ver su detalle.

iii. Infnite Scroll. El usuario deberá poder hacer scroll down para que 
sigan apareciendo pokemons del listado
iv. Botón de agregar pokémon en el header en la parte superior derecha
(+). Este botón te llevará a una nueva pantalla para agregar un nuevo 
pokémon al listado.

b. Criterios de aceptación

i. El listado de pokemons debe de ser de 2 en 2. Es decir. Si hay 20 
pokémons guardados en el listado, deberá haber 10 páginas entre las 
cuales el usuario puede navegar mediante el scroll down.

ii. Para el listado, los cards deberán contener el "name", el primer 
"types" de pokémon al que pertenece, el primer y el último "moves"

iii. Para ver el detalle de un pokémon seleccionado del listado, 
se deberá mostrar un modal o nueva vista que contenga
los siguientes datos del pokémon: "name", todos los "types", los 
últimos 5 "moves",

iv. El listado comenzará con cero elementos y se irá poblando cada que 
el usuario agregue un pokémon

![](https://github.com/OmarEspinosaCastro/AppMovilPokedex/blob/master/cuatro.jpeg)

![](https://github.com/OmarEspinosaCastro/AppMovilPokedex/blob/master/siete.jpeg)

#### 3. Agregar pokémon
a. Descripción

i. En esta pantalla se deberá consumir el api (https://pokeapi.co/.). Se 
deberán mostrar los primeros 20 pokémon que el api regresa 
consumiendo el endpoint (https://pokeapi.co/api/v2/pokemon). El 
pokémon que haya seleccionado del listado del servicio, se deberá de 
poder ver su detalle y deberá de haber un botón para agregarlo al 
pokédex.

b. Elementos

i. Listado de los primeros 20 pokémons que regresa el servicio.
ii. Modal o nueva vista para ver el detalle del pokémon

 1. Botón para agregarlo al pokédex

c. Criterios de aceptación

i. Para ver el detalle de un pokémon seleccionado del listado, se deberá 
mostrar un modal que contenga los siguientes datos del pokémon: 
"name", todos los "types", los últimos 5 "moves".

ii. El pokémon se debe agregar al listado, el cual debe guardarse en el 
storage local de la aplicación.

![](https://github.com/OmarEspinosaCastro/AppMovilPokedex/blob/master/seis.jpeg)

#### 4. Tab Perfl
a. Elementos

i. Avatar/imagen de perfl

ii. Nombre completo del usuario

iii. Fecha de nacimiento

iv. Botón de editar perfl

b. Criterios de aceptación

i. El botón de editar perfl deberá llevar al usuario a una pantalla donde 
se encuentre la información del perfl en elementos tipo inputs para 
que pueda editarlos.

![](https://github.com/OmarEspinosaCastro/AppMovilPokedex/blob/master/dos.jpeg)

#### 5. Editar perfl
a. Elementos

i. Avatar/imagen de perfl

ii. Nombre completo del usuar
io

iii. Fecha de nacimiento

iv. Botón de guardar cambios.

b. Criterios de aceptación

i. El usuario podrá editar su imagen de perfl al hacer clic en dicha 
imagen. Deberá abrirse la cámara y poder capturar una fotografía. La 
imagen se debe reducir de tamaño y calidad para que no pese tanto. 
La reducción se hará a un tamaño de 350x350 px.

ii. La información debe guardarse en el storage local de la 
aplicación.

![](https://github.com/OmarEspinosaCastro/AppMovilPokedex/blob/master/uno.jpeg)

#### 6. Tab Contador de pokémons
a. Elementos

i. Contador del total de pokémons en el pokédex en un elemento tipo 
header. Este debe de aumentar o disminuir cuando agrega o elimina 
un pokemon. Este contador deberá de ser un componente aislado a 
los demás.

b. Criterios de aceptación

i. Este contador deberá de ser un componente aislado a los demás el cual 
debe utilizar un manejador de estados como zustand, redux, storeon.

![](https://github.com/OmarEspinosaCastro/AppMovilPokedex/blob/master/cinco.jpeg)


### Criterios de aceptación generales

- Framework de programación: React Native (No expo)

- Base de datos: Storage local del dispositivo

- Utilizar una librería de estilos de componentes
- Uso de eventos async
- Se deberá compartir el código fuente en un repositorio público de: Github, Gitlab o Bitbucket.
- Utilizar manejador de estados que afecte a la tercera tab del contador
- Para la navegación utilizar React Navigation


## Authors

- [@OmarEspinosa](https://www.github.com/)

## 🛠 Skills
Javascript, HTML, CSS, Components React Native, React Navigation, Local Storage, Zustand, Camera ...



<!-- 
Titulo: Realidad virtual en matematicas de 2º de ESO 
Autor: Blas Llavero Ruiz
Fecha: 2022
Version de codigo: 1.0
Licencia: Licencia MIT

Copyright (c) 2022 Blas Llavero Ruiz

Por la presente se concede permiso, sin cargo, a cualquier persona que obtenga una copia
de este software y los archivos de documentacion asociados (el "Software"), para manejar
el Software sin restricciones, incluidos, entre otros, los derechos
usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender
copias del Software, y para permitir a las personas a quienes se les ha
provisto para hacerlo, sujeto a las siguientes condiciones:

El aviso de derechos de autor anterior y este aviso de permiso se incluiran en todos
copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTiA DE NINGuN TIPO, EXPRESA O
IMPLiCITA, INCLUYENDO PERO NO LIMITADO A LAS GARANTiAS DE COMERCIABILIDAD,
IDONEIDAD PARA UN PROPoSITO PARTICULAR Y NO INFRACCIoN. EN NINGuN CASO LOS 
AUTORES O TITULARES DE LOS DERECHOS DE AUTOR SERaN RESPONSABLES DE CUALQUIER RECLAMACIoN, DAÑOS U OTRAS
RESPONSABILIDADES, YA SEA EN UNA ACCIoN DE CONTRATO, AGRAVIO O DE OTRA FORMA, DERIVADA DE,
FUERA DE O EN CONEXIoN CON EL SOFTWARE O EL USO U OTROS TRATOS CON EL
SOFTWARE. 
-->

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="origin-trial" data-feature="WebVR (For Chrome M59+)" data-expires="2017-07-28" content="ArFv1ZeTwzkhjNE00uAE+XtiQB41fwqG/TqlFMLrepd9sforQSvQE/tgfIbUMYNuNre4QR1k4/z8xp2mV3dbhwwAAABeeyJvcmlnaW4iOiJodHRwczovL2FmcmFtZS5pbzo0NDMiLCJmZWF0dXJlIjoiV2ViVlIxLjEiLCJleHBpcnkiOjE1MDEyMTcwMDIsImlzU3ViZG9tYWluIjp0cnVlfQ==">
<meta charset="utf-8">
<title>Sistemas de Ecuaciones Lineales</title>
<meta name="description" content="Sistemas de ecuaciones lineales – A-Frame">
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
<script src="components/play-on-click.js"></script>
<script src="components/hide-on-play.js"></script>
<script src="components/aabb-collider.js"></script>
<script src="components/grab.js"></script>
<script src="components/ground.js"></script>
<script src="https://unpkg.com/aframe-event-set-component@4.0.1/dist/aframe-event-set-component.min.js"></script>
<script src="https://unpkg.com/aframe-environment-component/dist/aframe-environment-component.min.js"></script>
<script src="https://cdn.rawgit.com/donmccurdy/aframe-extras/v4.1.2/dist/aframe-extras.min.js"></script>
</head>

<body>
<a-scene renderer="colorManagement: true;" cursor="rayOrigin: mouse" raycaster="objects: [cube]" fog="color: #bc483e; near: 0; far: 65;">
<a-scene renderer="colorManagement: true;" cursor="rayOrigin: mouse" raycaster="objects: [cube]" fog="color: #bc483e; near: 0; far: 65;">
    <a-assets>

    <!-- "Arrow" (https://skfb.ly/6BYMS) de Jakob Henerey esta licenciado bajo la Atribucion Creative Commons (http://creativecommons.org/licenses/by/4.0/).-->
    <a-asset-item id="arrow"  src="/test/assets/3d-models/arrow/scene.gltf"></a-asset-item>

    <!-- "Medical Tent (Low Poly Style)" (https://skfb.ly/6RstW) de Tiko esta licenciado bajo la Atribucion Creative Commons (http://creativecommons.org/licenses/by/4.0/).-->
    <a-asset-item id="medical-tent"  src="/test/assets/3d-models/medical-tent/scene.gltf"></a-asset-item>

    <!-- "Warehouse" (https://skfb.ly/6SxYp) de MRowa esta licenciado bajo la Atribucion Creative Commons-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/). --->
    <a-asset-item id="warehouse"  src="/test/assets/3d-models/warehouse/scene.gltf"></a-asset-item>
 
    <!-- Forest spring" (https://freesound.org/people/dobroide/sounds/157807/) de Dobroide esta licenciado con atribucion de Creative Commons BY 3.0
https://creativecommons.org/licenses/by/3.0/ -->
     <audio loop
        id="background"
        src="/test/assets/audio/mediterranean-spring/mediterranean-spring.mp3">
      </audio>

    <!-- Ajustes del color de los cubos, cuando se cogen cambian de color -->
    <a-mixin id="cube" event-set__grab="material.color: #FFEF4F" event-set__grabend="material.color: #F2E646" event-set__hit="material.color: #F2E646" event-set__hitend="material.color: #EF2D5E" event-set__mousedown="material.color: #FFEF4F" event-set__mouseenter="material.color: #F2E646" event-set__mouseleave="material.color: #EF2D5E" event-set__mouseup="material.color: #F2E646" geometry="primitive: box; height: 0.30; width: 0.30; depth: 0.30" material="color: #EF2D5E;"></a-mixin>
    </a-assets>

    <!-- Inicio del sonido de fondo en una posicion concreta del escenario al cargar la pagina web -->
    <a-sound 
    src="#background" 
    autoplay="true" position="-3 1 -4">
    </a-sound>

    <image
      id="ejerciciosdeclase"
      src="/test/assets/images/earth/earth.jpg">
    </image>

<!-- Carga del entorno ambiental de bosque con 500 arboles -->
<a-entity environment="preset: forest; dressingAmount: 500"></a-entity>

<!-- Portada de la Aplicacion de Realidad Virtual en Matematicas de 2º de ESO -->

<a-entity id="color" position="0 6.5 15.4252"
text="color: green; align: center; value: UNIVERSIDAD INTERNACIONAL DE; width: 7"></a-entity>

<a-entity id="color" position="0 5.9 15.4252"
text="color: green; align: center; value: VALENCIA (VIU); width: 7"></a-entity>

<a-entity id="color" position="-0.00688 5.9 15.4252" text="color: green; align: center; value: VALENCIA (VIU); width: 7"></a-entity>

<a-entity id="color" position="-3.2 5.2 15.4252"
animation="property: components.text.material.uniforms.color.value; type: color; to: green; dir: alternate; loop: true"
text="color: green; align: center; value: REALIDAD VIRTUAL EN; width: 7"></a-entity>

<a-entity id="color" position="-3.2 4.8 15.4252"
animation="property: components.text.material.uniforms.color.value; type: color; to: green; dir: alternate; loop: true"
text="color: green; align: center; value: MATEMATICAS DE 2o DE ESO; width: 7"></a-entity>

<a-entity id="color" position="2.8 5.2 15.4252"
animation="property: components.text.material.uniforms.color.value; type: color; to: green; dir: alternate; loop: true"
text="color: green; align: center; value: ACTIVIDADES PRACTICAS DE ; width: 5.5"></a-entity>

<a-entity id="color" position="2.8 4.8 0"
animation="property: components.text.material.uniforms.color.value; type: color; to: green; dir: alternate; loop: true"
text="color: green; align: center; va15.4252ue: NUMEROS RACIONALES; width: 5.5"></a-entity>

<a-entity id="color" position="2.8 4.4 15.4252"
animation="property: components.text.material.uniforms.color.value; type: color; to: green; dir: alternate; loop: true"
text="color: green; align: center; value: Y CUERPOS GEOMETRICOS; width: 5.5"></a-entity>

<a-entity id="color" position="-3.2 3.8 15.4252"
text="color: green; align: center; value: TITULACION:; width: 4.5"></a-entity>

<a-entity id="color" position="-3.2 3.4 15.4252"
text="color: green; align: center; value: FORMACION DE PROFESORADO DE; width: 4.5"></a-entity>

<a-entity id="color" position="-3.2 3 15.4252"
text="color: green; align: center; value: MATEMATICAS E INFORMATICA; width: 4.5"></a-entity>

<a-entity id="color" position="-3.2 2.2 15.4252"
text="color: green; align: center; value: CURSO ACADEMICO: 2021 - 2022; width: 4.5"></a-entity>

<a-entity id="color" position="0 3.8 15.4252"
text="color: green; align: center; value: ALUMNO:; width: 4.5"></a-entity>

<a-entity id="color" position="0 3.4 15.4252"
text="color: green; align: center; value: BLAS LLAVERO RUIZ; width: 4.5"></a-entity>

<a-entity id="color" position="0 2.8 15.4252"
text="color: green; align: center; value: DIRECTOR DE TFM:; width: 4.5"></a-entity>

<a-entity id="color" position="0 2.4 15.4252"
text="color: green; align: center; value: ARES FABREGAT HERNANDEZ; width: 4.5"></a-entity>

<a-entity id="color" position="2.8 3.4 15.4252"
text="color: green; align: center; value: CONVOCATORIA:; width: 4.5"></a-entity>

<a-entity id="color" position="2.8 2.8 15.4252"
text="color: green; align: center; value: PRIMERA (ADELANTADA); width: 4.5"></a-entity>

<a-entity id="color" position="-3.2 1.4 15.4252" animation="property: components.text.material.uniforms.color.value; type: color; to: green; dir: alternate; loop: true"
 text="color: green; align: center; value: Desplazate hacia la actividad 1 de la izquierda o bien la 2 hacia la derecha en el escenario virtual mediante pulsacion en el boton lateral de los mandos del dispositivo de realidad virtual.; width: 4"></a-entity>

<a-entity id="color" position="-3.2 0.6 15.4252" animation="property: components.text.material.uniforms.color.value; type: color; to: green; dir: alternate; loop: true"
text="color: green; align: center; value: En el caso de utilizar un ordenador pulsa las teclas del cursor.; width: 4"></a-entity>

<a-entity id="color" position="2.8 1.2 15.42520" animation="property: components.text.material.uniforms.color.value; type: color; to: green; dir: alternate; loop: true"
text="color: green; align: center; value: Si dispones solo de un dispositivo movil debes de pulsar sobre la pantalla tactil y te permitira avanzar sobre el escenario virtual. Para retroceder debes cerrar los dos dedos haciendo el gesto de pinza.; width: 4"></a-entity>

<!-- Panel de fondo de la portada de la aplicacion -->

<a-plane material="color: #FFFFFF;"
rotation = " 0 0"
scale="14 16 1"
position="0 0 14.75357 ">
</a-plane>

<!-- Esfera de la Tierra giratoria para ambientar el escenario de las actividades -->
<a-sphere position="0 3 10" animation="property: rotation; to: 0 360 0; loop: true; dur: 100000" src="/test/assets/images/earth/earth.jpg" radius="1.5" segments-height="53">
</a-sphere>

<!-- Indicaciones para acceder a las actividades -->
<a-entity position="-5.78647 1.2 15.4252" rotation="0 -90.00995074166694 100.33522316771952" gltf-model="/test/assets/3d-models/arrow/scene.gltf" scale="0.1 0.1 0.1"></a-entity>

<a-entity position="-10.7 1.2 15.4252" rotation="0 0 0" geometry="primitive: plane; width: 7; height: 1" material="" 
text="align: center; width: 7; color: blue; value: ACTIVIDAD 1: REALIDAD VIRTUAL Y NUMEROS RACIONALES">
</a-entity>

<a-entity position="5.78647 1.2 15.4252" rotation="-1.0977871354706572 88.64401935807504 -82.65890223013847" gltf-model="/test/assets/3d-models/arrow/scene.gltf" scale="0.1 0.1 0.1"></a-entity>

<a-entity position="10.7 1.2 15.4252" rotation="0 0 0" geometry="primitive: plane; width: 7; height: 1" material="" 
text="align: center; width: 7; color: yellow; value: ACTIVIDAD 2: REALIDAD VIRTUAL Y CUERPOS GEOMETRICOS">
</a-entity>

<!-- Instrucciones para la actividad 1 -->

<!-- 1a columna -->
<a-entity position="-13.24576 4 10.98846" rotation="0 41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Instrucciones para la Actividad 1">
</a-entity>

<a-entity position="-13.24576 3.5 10.98846" rotation="0 41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Numeros racionales - Fracciones">
</a-entity>

<a-entity position="-13.24576 3 10.98846" rotation="0 41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: La actividad consiste en 5 retos para cada grupo del alumnado.">
</a-entity>

<a-entity position="-13.24576 2.5 10.98846" rotation="0 41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: El alumnado debe de mover unos palets que contienen ayuda humanitaria y ponerla en un area habilitada que deben de encontrar en el suelo en frente de estas instrucciones.">
</a-entity>

<a-entity position="-13.24576 2 10.98846" rotation="0 41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Cada grupo tiene un area asignada donde llevar los palets, la actividad esta pensada para 5 grupos.">
</a-entity>

<!-- 2a columna -->
<a-entity position="-10.88987 4 10.02894" rotation="0 0 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: El objetivo es conseguir ubicar los diferentes palets dentro de un area cuadrada cuadriculada de forma que se cumpla la proporcion de las fracciones que se proponen como reto.">
</a-entity>

<a-entity position="-10.88987 3.2 10.02894" rotation="0 0 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Los retos se encuentran en frente del area asignada a cada grupo. Una vez realizado el primer reto el alumnado debera de realizar una captura de pantalla de la distribucion de sus palets en el area de su grupo.">
</a-entity>

<!-- 3a columna -->
<a-entity position="-8.3068 4 10.82894" rotation="0 -41.81110" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: En la captura de pantalla debe de aparecer la fraccion que han representado junto a la distribucion de palets en el area del grupo realizada a partir de uno de los retos.">
</a-entity>

<a-entity position="-8.3068 3.5 10.82894" rotation="0 -41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Para hacer la captura de pantalla el alumno debera de pulsar la opcion de compartir pulsando en el boton del menu del mando de realidad virtual.">
</a-entity>

<a-entity position="-8.3068 3 10.82894" rotation="0 -41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Ademas el alumnado debera de subir su captura de pantalla a la actividad 1 de la clase virtual de Google Classroom, abriendo el siguiente enlace en el navegador de realidad virtual:">
</a-entity>

<a-link position="-2.21302 1.2 10" rotation="0 -87.1485995127836 0" geometry="primitive: circle; segments: 64" material="shader: portal; side: double" text="align: center; width: 2.5; color: green" peekMode="on" href="https://classroom.google.com/c/NDU2NDQ2MDQ5NDc4" title="Google Classroom para subir las capturas de pantalla con los resultados" image="#ejerciciosdeclase"></a-link>

<a-entity position="-8.3068 2 10.82894" rotation="0 -41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: y poniendo su usuario y clave cada uno debe de subir su captura de pantalla.">
</a-entity>

<a-entity position="-8.3068 1.5 10.82894" rotation="0 -41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Para completar la actividad los alumnos pueden consultar el siguiente material de apoyo:">
</a-entity>

<a-entity position="-8.3068 1 10.82894" rotation="0 -41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Me encantan las matematicas. (2020, 2 noviembre). Matematicas 2o ESO U2 Fracciones y decimales - 2 Operaciones con fracciones 2 [Video]. YouTube. ">
</a-entity>

<a-entity position="-8.3068 0.5 10.82894" rotation="0 -41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: https://www.youtube.com/watch?v=HFIaqHZrykU - Licencia CC BY 3.0: https://creativecommons.org/licenses/by/3.0/">
</a-entity>

<a-sky position="0 0 9.138" radius="200" theta-length="110" class="environment" material="shader: gradientshader; topColor: #24b59f; bottomColor: #eff9b7" visible="" geometry=""></a-sky>

<!-- Instrucciones para la actividad 2 -->

<!-- 1a columna -->
<a-entity position="8.3068 4 10.98846" rotation="0 41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Instrucciones para la Actividad 2">
</a-entity>

<a-entity position="8.3068 3.5 10.98846" rotation="0 41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Cuerpos geometricos.">
</a-entity>
<a-entity position="8.3068 3 10.98846" rotation="0 41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: La actividad consiste en 5 retos para cada grupo del alumnado.">
</a-entity>

<a-entity position="8.3068 2.5 10.98846" rotation="0 41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: El alumnado debe de mover las figuras geometricas que contienen agua y llevar algunas a un area habilitada que deben de encontrar en el suelo en frente de estas instrucciones.">
</a-entity>

<a-entity position="8.3068 2 10.98846" rotation="0 41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Cada grupo tiene un area asignada donde llevar el agua, la actividad esta pensada para 5 grupos.">
</a-entity>

<!-- 2a columna -->
<a-entity position="10.88987 4 10.02894" rotation="0 0 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: El objetivo es conseguir ubicar las diferentes figuras geometricas dentro del area del grupo llevando solo los litros de agua que se piden, cada cantidad de agua es un reto.">
</a-entity>

<a-entity position="10.88987 3.2 10.02894" rotation="0 0 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Los retos se encuentran en frente del area asignada a cada grupo. Una vez realizado el primer reto el alumnado debera de realizar una captura de pantalla de las figuras geometricas escogidas y ubicadas en el area de su grupo.">
</a-entity>

<a-entity position="10.88987 2.4 10.02894" rotation="0 0 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Para completar cada reto debemos de calcular el volumen de las figuras que hay en el almacen hasta encontrar la que hay en el reto. ">
</a-entity>

<!-- 3a columna -->
<a-entity position="13.24576 4 10.98846" rotation="0 -41.81110 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Solo hay un reto en el que debemos de sumar dos cuerpos geometricos para conseguir el volumen. En este caso se sumara el volumen de 2 cuerpos geometricos que son individuales.">
</a-entity>

<a-entity position="13.24576 3.5 10.98846" rotation="0 -41.81110 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: En la captura de pantalla debe de aparecer el reto de la cantidad de litros de agua junto a las figuras geometricas que hay encima de su area.">
</a-entity>

<a-entity position="13.24576 3 10.98846" rotation="0 -41.81110 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Para hacer la captura de pantalla el alumno debera de pulsar la opcion de compartir pulsando en el boton del menu del mando de realidad virtual.">
</a-entity>

<a-entity position="13.24576 2.5 10.98846" rotation="0 -41.81110 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Ademas el alumnado debera de subir su captura de pantalla a la actividad 2 de la clase virtual de Google Classroom, abriendo el siguiente enlace en el navegador de realidad virtual:">
</a-entity>

<a-entity position="13.24576 2 10.98846" rotation="0 -41.81110 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: https://classroom.google.com/c/NDU2NDQ2MDQ5NDc4 y poniendo su usuario y clave cada uno debe de subir su captura de pantalla.">
</a-entity>

<a-entity position="13.24576 1.8 10.82894" rotation="0 -41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: Para completar la actividad los alumnos pueden consultar el siguiente material de apoyo:">
</a-entity>

<a-entity position="13.24576 1.4 10.82894" rotation="0 -41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: 2ESO Cuerpos Geometricos. Poliedros regulares. (2020, 1 septiembre). [Video]. YouTube.">
</a-entity>

<a-entity position="13.24576 0.9 10.82894" rotation="0 -41.8111 0" geometry="primitive: plane; width: 2.5; height: 0.577" material="" 
text="align: center; width: 2.5; color: green; value: https://www.youtube.com/watch?v=U9y1LqhTZ7s - Licencia CC BY 3.0: https://creativecommons.org/licenses/by/3.0/">
</a-entity>


<!-- Tienda con el material de la ayuda humanitaria -->
<a-entity position="-2.91086 0.3 -5.88546" rotation="0 0 0" gltf-model="/test/assets/3d-models/medical-tent/scene.gltf" scale="0.010 0.009 0.020"></a-entity>

<!-- Almacen con los recipientes de agua para regar el terreno de cultivo -->
<a-entity position="4.91086 0.3 -5.88546" rotation="0 0 0" gltf-model="/test/assets/3d-models/warehouse/scene.gltf" scale="0.0005 0.0015 0.0020"></a-entity>

<!-- Area de trabajo de la actividad 1 para el grupo 1 -->
<a-entity position="-10.06032 0.199 6.21998" geometry="primitive: plane; width: 3; height: 3" material="color: #f4a460" 
text="align: center; width: 3; color: green" rotation="-90 90 0">
</a-entity>

<!-- Identificacion area actividad 1 grupo 1 --> 
<a-entity position="-12.00032 0.199 6.21998" geometry="primitive: plane; width: 3;" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: Actividad 1 - Grupo 1" rotation="-90 90 0">
</a-entity>

<!-- Cuadricula de la actividad 1 para el grupo 1 -->

<!-- Lineas verticales -->

<!-- linea vertical 1 actividad 1 area 1 -->
<a-entity line="start: -11.56 0.2 4.71; end: -11.56 0.2 7.71; color: yellow"></a-entity>

<!-- linea vertical 2 actividad 1 area 1 -->
<a-entity line="start: -10.81 0.2 4.71; end: -10.81 0.2 7.71; color: yellow"></a-entity>

<!-- linea vertical 3 actividad 1 area 1 -->
<a-entity line="start: -10.06 0.2 4.71; end: -10.06 0.2 7.71; color: yellow"></a-entity>

<!-- linea vertical 4 actividad 1 area 1 -->
<a-entity line="start: -9.31 0.2 4.71; end: -9.31 0.2 7.71; color: yellow"></a-entity>

<!-- linea vertical 5 actividad 1 area 1 -->
<a-entity line="start: -8.56 0.2 4.71; end: -8.56 0.2 7.71; color: yellow"></a-entity>

<!-- Lineas horizontales -->

<!-- linea horizontal 1 actividad 1 area 1 -->
<a-entity line="start: -11.56 0.2 4.71; end: -8.56 0.2 4.71; color: yellow"></a-entity>

<!-- linea horizontal 2 actividad 1 area 1 -->
<a-entity line="start: -11.56 0.2 5.46; end: -8.56 0.2 5.46; color: yellow"></a-entity>

<!-- linea horizontal 3 actividad 1 area 1 -->
<a-entity line="start: -11.56 0.2 6.21; end: -8.56 0.2 6.21; color: yellow"></a-entity>

<!-- linea horizontal 4 actividad 1 area 1 -->
<a-entity line="start: -11.56 0.2 6.96; end: -8.56 0.2 6.96; color: yellow"></a-entity>

<!-- linea horizontal 5 actividad 1 area 1 -->
<a-entity line="start: -11.56 0.2 7.71; end: -8.56 0.2 7.71; color: yellow"></a-entity>

<!-- Area de trabajo de la actividad 1 para el grupo 2 -->
<a-entity position="-10.06032 0.199 0.48701" geometry="primitive: plane; width: 3; height: 3" material="color: #f4a460" 
text="align: center; width: 3; color: green" rotation="-90 90 0">
</a-entity>

<!-- Identificacion area actividad 1 grupo 2 --> 
<a-entity position="-12.00032 0.199 0.48701" geometry="primitive: plane; width: 3;" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: Actividad 1 - Grupo 2" rotation="-90 90 0">
</a-entity>

<!-- Lineas verticales -->

<!-- linea vertical 1 actividad 1 area 2 -->
<a-entity line="start: -11.56 0.2 -1.02; end: -11.56 0.2 1.98; color: yellow"></a-entity>

<!-- linea vertical 2 actividad 1 area 2 -->
<a-entity line="start: -10.81 0.2 -1.02; end: -10.81 0.2 1.98; color: yellow"></a-entity>

<!-- linea vertical 3 actividad 1 area 2 -->
<a-entity line="start: -10.06 0.2 -1.02; end: -10.06 0.2 1.98; color: yellow"></a-entity>

<!-- linea vertical 4 actividad 1 area 2 -->
<a-entity line="start: -9.31 0.2 -1.02; end: -9.31 0.2 1.98; color: yellow"></a-entity>

<!-- linea vertical 5 actividad 1 area 2 -->
<a-entity line="start: -8.56 0.2 -1.02; end: -8.56 0.2 1.98; color: yellow"></a-entity>

<!-- Lineas horizontales -->

<!-- linea horizontal 1 actividad 1 area 2 -->
<a-entity line="start: -11.56 0.2 -1.02; end: -8.56 0.2 -1.02; color: yellow"></a-entity>

<!-- linea horizontal 2 actividad 1 area 2 -->
<a-entity line="start: -11.56 0.2 -0.27; end: -8.56 0.2 -0.27; color: yellow"></a-entity>

<!-- linea horizontal 3 actividad 1 area 2 -->
<a-entity line="start: -11.56 0.2 0.48; end: -8.56 0.2 0.48; color: yellow"></a-entity>

<!-- linea horizontal 4 actividad 1 area 2 -->
<a-entity line="start: -11.56 0.2 1.23; end: -8.56 0.2 1.23; color: yellow"></a-entity>

<!-- linea horizontal 5 actividad 1 area 2 -->
<a-entity line="start: -11.56 0.2 1.98; end: -8.56 0.2 1.98; color: yellow"></a-entity>

<!-- Area de trabajo de la actividad 1 para el grupo 3 -->
<a-entity position="-10.06032 0.199 -5.24144" geometry="primitive: plane; width: 3; height: 3" material="color: #f4a460" 
text="align: center; width: 3; color: green; value:" rotation="-90 90 0">
</a-entity>

<!-- Identificacion area actividad 1 grupo 3 --> 
<a-entity position="-12.00032 0.199 -5.24144" geometry="primitive: plane; width: 3;" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: Actividad 1 - Grupo 3" rotation="-90 90 0">
</a-entity>

<!-- Lineas verticales -->

<!-- linea vertical 1 actividad 1 area 3 -->
<a-entity line="start: -11.56 0.2 -6.74; end: -11.56 0.2 -3.74; color: yellow"></a-entity>

<!-- linea vertical 2 actividad 1 area 3 -->
<a-entity line="start: -10.81 0.2 -6.74; end: -10.81 0.2 -3.74; color: yellow"></a-entity>

<!-- linea vertical 3 actividad 1 area 3 -->
<a-entity line="start: -10.06 0.2 -6.74; end: -10.06 0.2 -3.74; color: yellow"></a-entity>

<!-- linea vertical 4 actividad 1 area 3 -->
<a-entity line="start: -9.31 0.2 -6.74; end: -9.31 0.2 -3.74; color: yellow"></a-entity>

<!-- linea vertical 5 actividad 1 area 3 -->
<a-entity line="start: -8.56 0.2 -6.74; end: -8.56 0.2 -3.74; color: yellow"></a-entity>

<!-- Lineas horizontales -->

<!-- linea horizontal 1 actividad 1 area 3 -->
<a-entity line="start: -11.56 0.2 -6.74; end: -8.56 0.2 -6.74; color: yellow"></a-entity>

<!-- linea horizontal 2 actividad 1 area 3 -->
<a-entity line="start: -11.56 0.2 -5.99; end: -8.56 0.2 -5.99; color: yellow"></a-entity>

<!-- linea horizontal 3 actividad 1 area 3 -->
<a-entity line="start: -11.56 0.2 -5.24; end: -8.56 0.2 -5.24; color: yellow"></a-entity>

<!-- linea horizontal 4 actividad 1 area 3 -->
<a-entity line="start: -11.56 0.2 -4.49; end: -8.56 0.2 -4.49; color: yellow"></a-entity>

<!-- linea horizontal 5 actividad 1 area 3 -->
<a-entity line="start: -11.56 0.2 -3.74; end: -8.56 0.2 -3.74; color: yellow"></a-entity>

<!-- Area de trabajo de la actividad 1 para el grupo 4 -->
<a-entity position="-10.06032 0.199 -11.1269" geometry="primitive: plane; width: 3; height: 3" material="color: #f4a460" 
text="align: center; width: 3; color: green; value:" rotation="-90 90 0">
</a-entity>

<!-- Identificacion area actividad 1 grupo 4 --> 
<a-entity position="-12.00032 0.199 -11.1269" geometry="primitive: plane; width: 3;" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: Actividad 1 - Grupo 4" rotation="-90 90 0">
</a-entity>

<!-- linea vertical 1 actividad 1 area 4 -->
<a-entity line="start: -11.56 0.2 -12.62; end: -11.56 0.2 -9.62; color: yellow"></a-entity>

<!-- linea vertical 2 actividad 1 area 4 -->
<a-entity line="start: -10.81 0.2 -12.62; end: -10.81 0.2 -9.62; color: yellow"></a-entity>

<!-- linea vertical 3 actividad 1 area 4 -->
<a-entity line="start: -10.06 0.2 -12.62; end: -10.06 0.2 -9.62; color: yellow"></a-entity>

<!-- linea vertical 4 actividad 1 area 4 -->
<a-entity line="start: -9.31 0.2 -12.62; end: -9.31 0.2 -9.62; color: yellow"></a-entity>

<!-- linea vertical 5 actividad 1 area 4 -->
<a-entity line="start: -8.56 0.2 -12.62; end: -8.56 0.2 -9.62; color: yellow"></a-entity>

<!-- Lineas horizontales -->

<!-- linea horizontal 1 actividad 1 area 4 -->
<a-entity line="start: -11.56 0.2 -12.62; end: -8.56 0.2 -12.62; color: yellow"></a-entity>

<!-- linea horizontal 2 actividad 1 area 4 -->
<a-entity line="start: -11.56 0.2 -11.87; end: -8.56 0.2 -11.87; color: yellow"></a-entity>

<!-- linea horizontal 3 actividad 1 area 4 -->
<a-entity line="start: -11.56 0.2 -11.12; end: -8.56 0.2 -11.12; color: yellow"></a-entity>

<!-- linea horizontal 4 actividad 1 area 4 -->
<a-entity line="start: -11.56 0.2 -10.37; end: -8.56 0.2 -10.37; color: yellow"></a-entity>

<!-- linea horizontal 5 actividad 1 area 4 -->
<a-entity line="start: -11.56 0.2 -9.62; end: -8.56 0.2 -9.62; color: yellow"></a-entity>

<!-- Area de trabajo de la actividad 1 para el grupo 5 -->
<a-entity position="-10.06032 0.199 -17.06799" geometry="primitive: plane; width: 3; height: 3" material="color: #f4a460" 
text="align: center; width: 3; color: green; value:" rotation="-90 90 0">
</a-entity>

<!-- Identificacion area actividad 1 grupo 5 --> 
<a-entity position="-12.00032 0.199 -17.06799" geometry="primitive: plane; width: 3;" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: Actividad 1 - Grupo 5" rotation="-90 90 0">
</a-entity>

<!-- linea vertical 1 actividad 1 area 5 -->
<a-entity line="start: -11.56 0.2 -18.56; end: -11.56 0.2 -15.56; color: yellow"></a-entity>

<!-- linea vertical 2 actividad 1 area 5 -->
<a-entity line="start: -10.81 0.2 -18.56; end: -10.81 0.2 -15.56; color: yellow"></a-entity>

<!-- linea vertical 3 actividad 1 area 5 -->
<a-entity line="start: -10.06 0.2 -18.56; end: -10.06 0.2 -15.56; color: yellow"></a-entity>

<!-- linea vertical 4 actividad 1 area 5 -->
<a-entity line="start: -9.31 0.2 -18.56; end: -9.31 0.2 -15.56; color: yellow"></a-entity>

<!-- linea vertical 5 actividad 1 area 5 -->
<a-entity line="start: -8.56 0.2 -18.56; end: -8.56 0.2 -15.56; color: yellow"></a-entity>

<!-- Lineas horizontales -->

<!-- linea horizontal 1 actividad 1 area 5 -->
<a-entity line="start: -11.56 0.2 -18.56; end: -8.56 0.2 -18.56; color: yellow"></a-entity>

<!-- linea horizontal 2 actividad 1 area 5 -->
<a-entity line="start: -11.56 0.2 -17.81; end: -8.56 0.2 -17.81; color: yellow"></a-entity>

<!-- linea horizontal 3 actividad 1 area 5 -->
<a-entity line="start: -11.56 0.2 -17.06; end: -8.56 0.2 -17.06; color: yellow"></a-entity>

<!-- linea horizontal 4 actividad 1 area 5 -->
<a-entity line="start: -11.56 0.2 -16.31; end: -8.56 0.2 -16.31; color: yellow"></a-entity>

<!-- linea horizontal 5 actividad 1 area 5 -->
<a-entity line="start: -11.56 0.2 -15.56; end: -8.56 0.2 -15.56; color: yellow"></a-entity>

<!-- Indicaciones de la actividad 1 para el grupo 1 -->
<a-entity position="-12.4537  2.3 6.28931" geometry="primitive: plane; width: 3; height: 1" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: Retos Actividad 1 - Grupo 1" rotation="0 90 0"></a-entity>

<a-entity position="-12.4537  1.8 6.28931" geometry="primitive: plane; width: 3; height: 1" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: a) 1/16  b) 15/16  c) 25/100  d) 4/16  e) 9/16" rotation="0 90 0"></a-entity>

<!-- Indicaciones de la actividad 1 para el grupo 2 -->
<a-entity position="-12.4537  2.3 0.59002" geometry="primitive: plane; width: 3; height: 1" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: Retos Actividad 1 - Grupo 2" rotation="0 90 0"></a-entity>

<a-entity position="-12.4537  1.8 0.59002" geometry="primitive: plane; width: 3; height: 1" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: a) 1/8  b) 3/6  c) 10/16  d) 10/10  e) 75/100" rotation="0 90 0"></a-entity>

<!-- Indicaciones de la actividad 1 para el grupo 3 -->

<a-entity position="-12.4537  2.3 -5.29463" geometry="primitive: plane; width: 3; height: 1" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: Retos Actividad 1 - Grupo 3" rotation="0 90 0"></a-entity>

<a-entity position="-12.4537  1.8 -5.29463" geometry="primitive: plane; width: 3; height: 1" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: a) 7/16  b) 0/10  c) 11/16  d) 7/8  e) 1/4" rotation="0 90 0"></a-entity>

<!-- Indicaciones de la actividad 1 para el grupo 4 -->
<a-entity position="-12.4537  2.3 -10.99329" geometry="primitive: plane; width: 3; height: 1" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: Retos Actividad 1 - Grupo 4" rotation="0 90 0"></a-entity>

<a-entity position="-12.4537  1.8 -10.99329" geometry="primitive: plane; width: 3; height: 1" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: a) 14/16  b) 12/16  c) 1/2  d) 50/100  e) 15/60" rotation="0 90 0"></a-entity>

<!-- Indicaciones de la actividad 1 para el grupo 5 -->
<a-entity position="-12.4537  2.3 -16.86716" geometry="primitive: plane; width: 3; height: 1" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: Retos Actividad 1 - Grupo 5" rotation="0 90 0"></a-entity>

<a-entity position="-12.4537  1.8 -16.86716" geometry="primitive: plane; width: 3; height: 1" material="color: #f4a460" 
text="align: center; width: 3; color: green; value: a) 2/4  b) 5/10  c) 5/8  d) 6/8  e) 5/16" rotation="0 90 0"></a-entity>

<!-- Cubos dentro de la tienda medica -->

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 0" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Agua; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Agua; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Agua; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Agua; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Agua; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -0.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Lentejas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Lentejas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Lentejas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Lentejas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Lentejas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -1.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Harina de maiz; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Harina de maiz; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Harina de maiz; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Harina de maiz; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Harina de maiz; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -2.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Arroz; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Arroz; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Arroz; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Arroz; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Arroz; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -3" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Frijol; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Frijol; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Frijol; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Frijol; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Frijol; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -3.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Pimienta negra; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Pimienta negra; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Pimienta negra; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Pimienta negra; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Pimienta negra; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -4.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Cafe; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Cafe; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Cafe; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Cafe; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Cafe; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -5.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Chocolate; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Chocolate; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Chocolate; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Chocolate; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Chocolate; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -6" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Aceite; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Aceite; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Aceite; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Aceite; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Aceite; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -6.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Leche en polvo; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Leche en polvo; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Leche en polvo; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Leche en polvo; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Leche en polvo; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -7.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Bocadillo; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Bocadillo; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Bocadillo; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Bocadillo; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Bocadillo; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -8.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Pasta; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Pasta; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Pasta; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Pasta; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Pasta; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -9" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Atun; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Atun; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Atun; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Atun; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Atun; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -9.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Sopa instantanea; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Sopa instantanea; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Sopa instantanea; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Sopa instantanea; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Sopa instantanea; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -10.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Conservas en Lata; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Conservas en Lata; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Conservas en Lata; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Conservas en Lata; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Conservas en Lata; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -11.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Frutos secos; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Frutos secos; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Frutos secos; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Frutos secos; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Frutos secos; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -12" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Barritas energeticas ; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Barritas energeticas ; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Barritas energeticas ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Barritas energeticas ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Barritas energeticas ; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-5.31433 0.585 -12.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Galletas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Galletas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Galletas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Galletas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Galletas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 0" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Cinta adhesiva medica; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Cinta adhesiva medica; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Cinta adhesiva medica; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Cinta adhesiva medica; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Cinta adhesiva medica; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -0.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Vendas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Vendas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Vendas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Vendas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Vendas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -1.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Crema antibiotica; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Crema antibiotica; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Crema antibiotica; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Crema antibiotica; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Crema antibiotica; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -2.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Alcohol medicinal; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Alcohol medicinal; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Alcohol medicinal; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Alcohol medicinal; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Alcohol medicinal; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -3" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Crema de hidrocortisona; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Crema de hidrocortisona; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Crema de hidrocortisona; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Crema de hidrocortisona; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Crema de hidrocortisona; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -3.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Paracetamol; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Paracetamol; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Paracetamol; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Paracetamol; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Paracetamol; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -4.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Pinzas medicas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Pinzas medicas ; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Pinzas medicas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Pinzas medicas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Pinzas medicas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -5.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Tijeras medicas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Tijeras medicas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Tijeras medicas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Tijeras medicas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Tijeras medicas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -6" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Guantes de plastico; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Guantes de plastico; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Guantes de plastico; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Guantes de plastico; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Guantes de plastico; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -6.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Termometro; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Termometro; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Termometro; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Termometro; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Termometro; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -7.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Mascarilla de reanimacion; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Mascarilla de reanimacion; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Mascarilla de reanimacion; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Mascarilla de reanimacion; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Mascarilla de reanimacion; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -8.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Antihistaminicos; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Antihistaminicos; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Antihistaminicos; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Antihistaminicos; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Antihistaminicos; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -9" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Termometro; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Termometro; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Termometro; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Termometro; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Termometro; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -9.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Sedantes; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Sedantes; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Sedantes; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Sedantes; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Sedantes; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -10.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Parches antiquemaduras; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Parches antiquemaduras; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Parches antiquemaduras; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Parches antiquemaduras; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Parches antiquemaduras; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -11.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Botiquines medicos; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Botiquines medicos; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Botiquines medicos; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Botiquines medicos; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Botiquines medicos; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -12" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Antibioticos; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Antibioticos; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Antibioticos; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Antibioticos; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Antibioticos; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" position="-4.56433 0.585 -12.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Toallitas antisepticas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Toallitas antisepticas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Toallitas antisepticas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Toallitas antisepticas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Toallitas antisepticas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<!-- Area de trabajo de la actividad 2 para el grupo 1 -->
<a-entity position="10.16612 0.3 6.0174" geometry="primitive: plane; width: 3; height: 3" material="color: blue" 
text="align: center; width: 3; color: yellow;" rotation="-90 -90 0">
</a-entity>

<!-- Identificacion area actividad 2 grupo 1 --> 
<a-entity position="12.186 0.3 6.0174" geometry="primitive: plane; width: 3;" material="color: blue" 
text="align: center; width: 3; color: yellow; value: Actividad 2 - Grupo 1" rotation="-90 -90 0">
</a-entity>

<!-- Area de trabajo de la actividad 2 para el grupo 2 -->
<a-entity position="10.16612 0.3 0.48701" geometry="primitive: plane; width: 3; height: 3" material="color: blue" 
text="align: center; width: 3; color: yellow;" rotation="-90 -90 0">
</a-entity>

<!-- Identificacion area actividad 2 grupo 2 --> 
<a-entity position="12.186 0.3 0.48701" geometry="primitive: plane; width: 3;" material="color: blue" 
text="align: center; width: 3; color: yellow; value: Actividad 2 - Grupo 2" rotation="-90 -90 0">
</a-entity>

<!-- Area de trabajo de la actividad 2 para el grupo 3 -->
<a-entity position="10.16612 0.3 -5.41774" geometry="primitive: plane; width: 3; height: 3" material="color: blue" 
text="align: center; width: 3; color: yellow;" rotation="-90 -90 0">
</a-entity>

<!-- Identificacion area actividad 2 grupo 3 --> 
<a-entity position="12.186 0.3 -5.41774" geometry="primitive: plane; width: 3;" material="color: blue" 
text="align: center; width: 3; color: yellow; value: Actividad 2 - Grupo 3" rotation="-90 -90 0">
</a-entity>

<!-- Area de trabajo de la actividad 2 para el grupo 4 -->
<a-entity position="10.16612 0.3 -11.18272" geometry="primitive: plane; width: 3; height: 3" material="color: blue" 
text="align: center; width: 3; color: yellow;" rotation="-90 -90 0">
</a-entity>

<!-- Identificacion area actividad 2 grupo 4 --> 
<a-entity position="12.186 0.3 -11.18272" geometry="primitive: plane; width: 3;" material="color: blue" 
text="align: center; width: 3; color: yellow; value: Actividad 2 - Grupo 4" rotation="-90 -90 0">
</a-entity>

<!-- Area de trabajo de la actividad 2 para el grupo 5 -->
<a-entity position="10.16612 0.3 -17.39214" geometry="primitive: plane; width: 3; height: 3" material="color: blue" 
text="align: center; width: 3; color: yellow;" rotation="-90 -90 0">
</a-entity>

<!-- Identificacion area actividad 2 grupo 5 --> 
<a-entity position="12.186 0.3 -17.39214" geometry="primitive: plane; width: 3;" material="color: blue" 
text="align: center; width: 3; color: yellow; value: Actividad 2 - Grupo 5" rotation="-90 -90 0">
</a-entity>

<!-- Indicaciones de la actividad 2 para el grupo 1 -->
<a-entity position="12.59415 2.3 6.0174" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: Retos Actividad 2 - Grupo 1" rotation="0 -90 0"></a-entity>

<a-entity position="12.59415 1.8 6.0174" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: a) 306,31 l.  b) 111,9 l.  c) 206,33 l." rotation="0 -90 0"></a-entity>

<a-entity position="12.59415 1.4 6.0174" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: d) 15,71 l.  e) 106,75 l." rotation="0 -90 0"></a-entity>


<!-- Indicaciones de la actividad 2 para el grupo 2 -->
<a-entity position="12.59415  2.3 0.48701" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: Retos Actividad 2 - Grupo 2" rotation="0 -90 0"></a-entity>

<a-entity position="12.59415  1.8 0.48701" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: a) 47,39 l.  b) 584,75 l.  c) 31,63 l." rotation="0 -90 0"></a-entity>

<a-entity position="12.59415  1.4 0.48701" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: d) 24,74 l.  e) 141,67 l. " rotation="0 -90 0"></a-entity>

<!-- Indicaciones de la actividad 2 para el grupo 3 -->
<a-entity position="12.59415  2.3 -5.43243" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: Retos Actividad 2 - Grupo 3" rotation="0 -90 0"></a-entity>

<a-entity position="12.59415  1.8 -5.43243" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: a) 76,53 l.  b) 284,84 l.  c) 37,89 l." rotation="0 -90 0"></a-entity>

<a-entity position="12.59415  1.4 -5.43243" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: d) 76,14 l.  e) 35,02 l. " rotation="0 -90 0"></a-entity>

<!-- Indicaciones de la actividad 2 para el grupo 4 -->
<a-entity position="12.59415  2.3 -11.17193" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: Retos Actividad 2 - Grupo 4" rotation="0 -90 0"></a-entity>

<a-entity position="12.59415  1.8 -11.17193" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: a) 51,94 l.  b) 323,58 l.  c) 37,81 l." rotation="0 -90 0"></a-entity>

<a-entity position="12.59415  1.4 -11.17193" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: d) 79,29 l.  e) 18,52 l." rotation="0 -90 0"></a-entity>

<!-- Indicaciones de la actividad 2 para el grupo 5 -->
<a-entity position="12.59415  2.3 -17.36889" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: Retos Actividad 2 - Grupo 5" rotation="0 -90 0"></a-entity>

<a-entity position="12.59415  1.8 -17.36889" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: a) 933,89 l.  b) 434,53 l.  c) 376,99 l." rotation="0 -90 0"></a-entity>

<a-entity position="12.59415  1.4 -17.36889" geometry="primitive: plane; width: 3; height: 1" material="color: blue" 
text="align: center; width: 3; color: yellow; value: d) 329,87 l.  e) 491,07 l." rotation="0 -90 0"></a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 0" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Ollas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Ollas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Ollas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Ollas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Ollas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -0.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Paellas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Paellas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Paellas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Paellas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Paellas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -1.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Platos; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Platos; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Platos; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Platos; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Platos; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -2.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Chocolateras; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Chocolateras; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Chocolateras; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Chocolateras; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Chocolateras; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -3" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Plato hondo plast.; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Plato hondo plast.; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Plato hondo plast.; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Plato hondo plast.; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Plato hondo plast.; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -3.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Cucharas de plastico; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Cucharas de plastico; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Cucharas de plastico; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Cucharas de plastico; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Cucharas de plastico; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -4.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Vajilla de metal; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Vajilla de metal; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Vajilla de metal; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Vajilla de metal; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Vajilla de metal; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -5.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Vajilla desechable; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Vajilla desechable; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Vajilla desechable; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Vajilla desechable; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Vajilla desechable; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -6" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Papel de cocina; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Papel de cocina; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Papel de cocina; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Papel de cocina; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Papel de cocina; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -6.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Vasos de plastico; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Vasos de plastico; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Vasos de plastico; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Vasos de plastico; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Vasos de plastico; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -7.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Tenedores de plastico; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Tenedores de plastico; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Tenedores de plastico; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Tenedores de plastico; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Tenedores de plastico; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -8.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Tazones; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Tazones; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Tazones; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Tazones; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Tazones; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -9" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Cuchillos; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Cuchillos; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Cuchillos; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Cuchillos; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Cuchillos; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -9.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Cacerolas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Cacerolas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Cacerolas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Cacerolas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Cacerolas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -10.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Espatulas de cocina; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Espatulas de cocina; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Espatulas de cocina; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Espatulas de cocina; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Espatulas de cocina; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -11.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Cajas de cerillas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Cajas de cerillas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Cajas de cerillas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Cajas de cerillas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Cajas de cerillas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -12" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Coladores; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Coladores; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Coladores; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Coladores; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Coladores; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-1.48 0.58 -12.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Bandejas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Bandejas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Bandejas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Bandejas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Bandejas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 0" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Generadores solares; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Generadores solares; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Generadores solares; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Generadores solares; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Generadores solares; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -0.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Filtros de agua; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Filtros de agua; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Filtros de agua; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Filtros de agua; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Filtros de agua; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -1.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Baterias recargables; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Baterias recargables; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Baterias recargables; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Baterias recargables; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Baterias recargables; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -2.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Paneles solares; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Paneles solares; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Paneles solares; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Paneles solares; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Paneles solares; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -3" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Calentadores de agua; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Calentadores de agua; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Calentadores de agua; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Calentadores de agua; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Calentadores de agua; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -3.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Depositos de agua; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Depositos de agua; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Depositos de agua; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Depositos de agua; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Depositos de agua; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -4.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Linternas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Linternas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Linternas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Linternas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Linternas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -5.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Anzuelos de pesca; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Anzuelos de pesca; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Anzuelos de pesca; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Anzuelos de pesca; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Anzuelos de pesca; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -6" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Sedales de pescar; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Sedales de pescar; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Sedales de pescar; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Sedales de pescar; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Sedales de pescar; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -6.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Agujas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Agujas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Agujas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Agujas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Agujas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -7.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Iniciadores de fuego; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Iniciadores de fuego; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Iniciadores de fuego; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Iniciadores de fuego; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Iniciadores de fuego; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -8.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Silvatos; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Silvatos; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Silvatos; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Silvatos; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Silvatos; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -9" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Palos luminosos; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Palos luminosos; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Palos luminosos; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Palos luminosos; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Palos luminosos; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -9.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Abrelatas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Abrelatas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Abrelatas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Abrelatas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Abrelatas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -10.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Imperdibles; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Imperdibles; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Imperdibles; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Imperdibles; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Imperdibles; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -11.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Sierras de hilo; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Sierras de hilo; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Sierras de hilo; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Sierras de hilo; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Sierras de hilo; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -12" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Brujulas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Brujulas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Brujulas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Brujulas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Brujulas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-0.78 0.58 -12.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Clips; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Clips; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Clips; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Clips; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Clips; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -12.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Gel antibacterial; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Gel antibacterial; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Gel antibacterial; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Gel antibacterial; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Gel antibacterial; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -12" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Dentrificos; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Dentrificos; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Dentrificos; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Dentrificos; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Dentrificos; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -11.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Cepillos dentales; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Cepillos dentales; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Cepillos dentales; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Cepillos dentales; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Cepillos dentales; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -10.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Jabon ducha en sobre; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Jabon ducha en sobre; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Jabon ducha en sobre; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Jabon ducha en sobre; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Jabon ducha en sobre; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -9.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Paquetes toallas higienicas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Paquetes toallas higienicas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Paquetes toallas higienicas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Paquetes toallas higienicas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Paquetes toallas higienicas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -9" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Maquinas de afeitar; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Maquinas de afeitar; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Maquinas de afeitar; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Maquinas de afeitar; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Maquinas de afeitar; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -8.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Toallas de algodon; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Toallas de algodon; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Toallas de algodon; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Toallas de algodon; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Toallas de algodon; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -7.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Peines de plastico; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Peines de plastico; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Peines de plastico; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Peines de plastico; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Peines de plastico; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -6.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Toallas sanitarias; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Toallas sanitarias; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Toallas sanitarias; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Toallas sanitarias; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Toallas sanitarias; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -6" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Servilletas humedas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Servilletas humedas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Servilletas humedas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Servilletas humedas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Servilletas humedas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -5.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Mascarillas; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Mascarillas; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Mascarillas; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Mascarillas; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Mascarillas; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -4.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Kits de higiene; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Kits de higiene; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Kits de higiene; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Kits de higiene; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Kits de higiene; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -3.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -3" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Gel hidroalcoholico; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Gel hidroalcoholico; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Gel hidroalcoholico; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Gel hidroalcoholico; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Gel hidroalcoholico; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -2.25" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -1.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Papel higienico; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 -0.75" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Jabon de manos; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Jabon de manos; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Jabon de manos; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Jabon de manos; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Jabon de manos; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<a-entity class="cube" mixin="cube" rotation="0 180 0" position="-2.23 0.58 0" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  <!-- central -->
  <a-entity scale="1 1 1" text="value: Cepillos de pelo; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- lateral derecho -->
  <a-entity scale="1 1 1" text="value: Cepillos de pelo; color: black" rotation="0 90 0" position="0.4 0 -0.4"></a-entity>    

  <!-- parte superior -->
  <a-entity scale="1 1 1" text="value: Cepillos de pelo; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo -->
  <a-entity scale="1 1 1" text="value: Cepillos de pelo; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

  <!-- parte posterior  -->
  <a-entity scale="1 1 1" text="value: Cepillos de pelo; color: black" rotation="0 180 0" position="-0.4 0 -0.4"></a-entity> 
</a-entity>

<!-- Conjuntos de cuerpos geometricos necesarios para que todos los grupos puedan realizar la actividad 2 -->

<!-- Cono + Cilindro 1 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.225 0.825 0" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  
  <!-- Cilindro -->
  <a-cone color="yellow" rotation="0 0 0" position="0 0.9 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- Cono -->
  <a-cone color="yellow" rotation="0 0 0" position="0 0.7 0" scale="0.2 0.2 0.2" radius-bottom="0" radius-top="1"></a-cone>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=30 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=100 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Cono:; color: black" rotation="0 180 0" position="-0.35 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: r=30 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=50 cm; color: black" rotation="0 180 0" position="-0.40 -0.2 -0.4"></a-entity>

  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Cilindro + Cono; color: black" rotation="0 90 0" position="0.4 0 -0.35"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Cono + Cilindro 2 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.225 0.825 -0.7" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  
  <!-- Cilindro -->
  <a-cone color="green" rotation="0 0 0" position="0 0.9 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- Cono -->
  <a-cone color="green" rotation="0 0 0" position="0 0.7 0" scale="0.2 0.2 0.2" radius-bottom="0" radius-top="1"></a-cone>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=10 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=42 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Cono:; color: black" rotation="0 180 0" position="-0.35 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: r=10 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=24 cm; color: black" rotation="0 180 0" position="-0.40 -0.2 -0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Cilindro + Cono; color: black" rotation="0 90 0" position="0.4 0 -0.35"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Cono + Cilindro 3 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.225 0.825 -1.4" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  
  <!-- Cilindro -->
  <a-cone color="cyan" rotation="0 0 0" position="0 0.9 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- Cono -->
  <a-cone color="cyan" rotation="0 0 0" position="0 0.7 0" scale="0.2 0.2 0.2" radius-bottom="0" radius-top="1"></a-cone>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=15 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=31 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Cono:; color: black" rotation="0 180 0" position="-0.35 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: r=15 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=12 cm; color: black" rotation="0 180 0" position="-0.40 -0.2 -0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Cilindro + Cono; color: black" rotation="0 90 0" position="0.4 0 -0.35"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Cono + Cilindro 4 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.225 0.825 -2.1" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  
  <!-- Cilindro -->
  <a-cone color="white" rotation="0 0 0" position="0 0.9 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- Cono -->
  <a-cone color="white" rotation="0 0 0" position="0 0.7 0" scale="0.2 0.2 0.2" radius-bottom="0" radius-top="1"></a-cone>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=16 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=64 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Cono:; color: black" rotation="0 180 0" position="-0.35 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: r=16 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=92 cm; color: black" rotation="0 180 0" position="-0.40 -0.2 -0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Cilindro + Cono; color: black" rotation="0 90 0" position="0.4 0 -0.35"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Cono + Cilindro 5 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.225 0.825 -2.8" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  
  <!-- Cilindro -->
  <a-cone color="orange" rotation="0 0 0" position="0 0.9 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- Cono -->
  <a-cone color="orange" rotation="0 0 0" position="0 0.7 0" scale="0.2 0.2 0.2" radius-bottom="0" radius-top="1"></a-cone>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=17 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=70 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Cono:; color: black" rotation="0 180 0" position="-0.35 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: r=17 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=52 cm; color: black" rotation="0 180 0" position="-0.40 -0.2 -0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Cilindro + Cono; color: black" rotation="0 90 0" position="0.4 0 -0.35"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Cubo + Piramide 1 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.225 0.825 -3.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
    
  <!-- Cubo -->
  <a-box color="gold" rotation="0 10 0" position="0 0.9 0" scale="0.2 0.2 0.2" depth="1" height="1" width="1"></a-box>

  <!-- Piramide -->
  <a-entity color="gold" rotation="0 0 -180" position="0 0.7 0" scale="0.2 0.2 0.2" geometry="primitive: cone; radiusBottom: 0.8; radiusTop: 0; segmentsRadial: 4"></a-entity>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cubo: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: lado=50 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Piramide:; color: black" rotation="0 180 0" position="-0.35 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=20 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: Abase=2500; color: black" rotation="0 180 0" position="-0.40 -0.2 -0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Cubo + Piramide; color: black" rotation="0 90 0" position="0.4 0 -0.35"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Cubo + Piramide 2 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.225 0.825 -4.2" geometry="width: 0.75; height: 0.75; depth: 0.75;">
    
  <!-- Cubo -->
  <a-box color="greenyellow" rotation="0 10 0" position="0 0.9 0" scale="0.2 0.2 0.2" depth="1" height="1" width="1"></a-box>

  <!-- Piramide -->
  <a-entity color="greenyellow" rotation="0 0 -180" position="0 0.7 0" scale="0.2 0.2 0.2" geometry="primitive: cone; radiusBottom: 0.8; radiusTop: 0; segmentsRadial: 4"></a-entity>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cubo: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: lado=32 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Piramide:; color: black" rotation="0 180 0" position="-0.35 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=15 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: Abase=1024; color: black" rotation="0 180 0" position="-0.40 -0.2 -0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Cubo + Piramide; color: black" rotation="0 90 0" position="0.4 0 -0.35"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Cubo + Piramide 3 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.225 0.825 -4.9" geometry="width: 0.75; height: 0.75; depth: 0.75;">
    
  <!-- Cubo -->
  <a-box color="darkmagenta" rotation="0 10 0" position="0 0.9 0" scale="0.2 0.2 0.2" depth="1" height="1" width="1"></a-box>

  <!-- Piramide -->
  <a-entity color="darkmagenta" rotation="0 0 -180" position="0 0.7 0" scale="0.2 0.2 0.2" geometry="primitive: cone; radiusBottom: 0.8; radiusTop: 0; segmentsRadial: 4"></a-entity>


  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cubo: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: lado=28 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Piramide:; color: black" rotation="0 180 0" position="-0.35 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=50 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: Abase=784; color: black" rotation="0 180 0" position="-0.40 -0.2 -0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Cubo + Piramide; color: black" rotation="0 90 0" position="0.4 0 -0.35"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Cubo + Piramide 4 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.225 0.825 -5.6" geometry="width: 0.75; height: 0.75; depth: 0.75;">
    
  <!-- Cubo -->
  <a-box color="beige" rotation="0 10 0" position="0 0.9 0" scale="0.2 0.2 0.2" depth="1" height="1" width="1"></a-box>

  <!-- Piramide -->
  <a-entity color="beige" rotation="0 0 -180" position="0 0.7 0" scale="0.2 0.2 0.2" geometry="primitive: cone; radiusBottom: 0.8; radiusTop: 0; segmentsRadial: 4"></a-entity>


  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cubo: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: lado=21 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Piramide:; color: black" rotation="0 180 0" position="-0.35 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=63 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: Abase=441; color: black" rotation="0 180 0" position="-0.40 -0.2 -0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Cubo + Piramide; color: black" rotation="0 90 0" position="0.4 0 -0.35"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Cubo + Piramide 5 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.225 0.825 -6.3" geometry="width: 0.75; height: 0.75; depth: 0.75;">
    
  <!-- Cubo -->
  <a-box color="gold" rotation="0 10 0" position="0 0.9 0" scale="0.2 0.2 0.2" depth="1" height="1" width="1"></a-box>

  <!-- Piramide -->
  <a-entity color="gold" rotation="0 0 -180" position="0 0.7 0" scale="0.2 0.2 0.2" geometry="primitive: cone; radiusBottom: 0.8; radiusTop: 0; segmentsRadial: 4"></a-entity>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cubo: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: lado=58 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>

  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Piramide:; color: black" rotation="0 180 0" position="-0.35 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=10 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: Abase=3364; color: black" rotation="0 180 0" position="-0.40 -0.2 -0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Cubo + Piramide; color: black" rotation="0 90 0" position="0.4 0 -0.35"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Tronco de cono + Cilindro 1 --> 

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.925 0.825 0" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Tronco de Cono -->
  <a-cone color="royalblue" rotation="0 0 0" position="0 0.7 0" scale="0.2 0.2 0.2" radius-bottom="0.5" radius-top="1"></a-cone>

  <!-- Cilindro -->
  <a-cone color="royalblue" rotation="0 0 0" position="0 0.9 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Tronco de Cono:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: rg=50 cm rp=20 cm; color: black" rotation="0 180 0" position="-0.25 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=60 cm; color: black" rotation="0 180 0" position="-0.30 -0.2 -0.4"></a-entity>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=50 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=10 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Tronco de cono + Cilindro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Tronco de cono + Cilindro 2 --> 

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.925 0.825 -0.7" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Tronco de Cono -->
  <a-cone color="deeppink" rotation="0 0 0" position="0 0.7 0" scale="0.2 0.2 0.2" radius-bottom="0.5" radius-top="1"></a-cone>

  <!-- Cilindro -->
  <a-cone color="deeppink" rotation="0 0 0" position="0 0.9 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Tronco de Cono:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: rg=60 cm rp=30 cm; color: black" rotation="0 180 0" position="-0.25 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=40 cm; color: black" rotation="0 180 0" position="-0.30 -0.2 -0.4"></a-entity>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=60 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=10 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Tronco de cono + Cilindro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Tronco de cono + Cilindro 3 --> 

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.925 0.825 -1.4" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Tronco de Cono -->
  <a-cone color="darkred" rotation="0 0 0" position="0 0.7 0" scale="0.2 0.2 0.2" radius-bottom="0.5" radius-top="1"></a-cone>

  <!-- Cilindro -->
  <a-cone color="darkred" rotation="0 0 0" position="0 0.9 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Tronco de Cono:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: rg=30 cm rp=15 cm; color: black" rotation="0 180 0" position="-0.25 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=40 cm; color: black" rotation="0 180 0" position="-0.30 -0.2 -0.4"></a-entity>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=30 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=85 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Tronco de cono + Cilindro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Tronco de cono + Cilindro 4 --> 

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.925 0.825 -2.1" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Tronco de Cono -->
  <a-cone color="darkseagreen" rotation="0 0 0" position="0 0.7 0" scale="0.2 0.2 0.2" radius-bottom="0.5" radius-top="1"></a-cone>

  <!-- Cilindro -->
  <a-cone color="darkseagreen" rotation="0 0 0" position="0 0.9 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Tronco de Cono:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: rg=18 cm rp=6 cm; color: black" rotation="0 180 0" position="-0.25 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=24 cm; color: black" rotation="0 180 0" position="-0.30 -0.2 -0.4"></a-entity>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=18 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=35 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Tronco de cono + Cilindro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Tronco de cono + Cilindro 5 --> 

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.925 0.825 -2.8" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Tronco de Cono -->
  <a-cone color="coral" rotation="0 0 0" position="0 0.7 0" scale="0.2 0.2 0.2" radius-bottom="0.5" radius-top="1"></a-cone>

  <!-- Cilindro -->
  <a-cone color="coral" rotation="0 0 0" position="0 0.9 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Tronco de Cono:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: rg=23 cm rp=14 cm; color: black" rotation="0 180 0" position="-0.25 0 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: h=41 cm; color: black" rotation="0 180 0" position="-0.30 -0.2 -0.4"></a-entity>

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=23 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=19 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Tronco de cono + Cilindro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Octaedro 1 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.925 0.825 -3.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  
  <!-- Octaedro -->
  <a-octahedron color="darkturquoise" rotation="0 0 0" position="0 0.8 0" scale="0.1 0.1 0.1" radius="3"></a-octahedron>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Octaedro:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: arista=12 cm; color: black" rotation="0 180 0" position="-0.25 0 -0.4"></a-entity> 

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Octaedro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Octaedro 2 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.925 0.825 -4.2" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  
  <!-- Octaedro -->
  <a-octahedron color="firebrick" rotation="0 0 0" position="0 0.8 0" scale="0.1 0.1 0.1" radius="3"></a-octahedron>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Octaedro:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: arista=8 cm; color: black" rotation="0 180 0" position="-0.25 0 -0.4"></a-entity> 

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
    
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Octaedro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Octaedro 3 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.925 0.825 -4.9" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  
  <!-- Octaedro -->
  <a-octahedron color="darkviolet" rotation="0 0 0" position="0 0.8 0" scale="0.1 0.1 0.1" radius="3"></a-octahedron>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Octaedro:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: arista=7 cm; color: black" rotation="0 180 0" position="-0.25 0 -0.4"></a-entity> 

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
    
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Octaedro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Octaedro 4 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.925 0.825 -5.6" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  
  <!-- Octaedro -->
  <a-octahedron color="lime" rotation="0 0 0" position="0 0.8 0" scale="0.1 0.1 0.1" radius="3"></a-octahedron>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Octaedro:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: arista=31 cm; color: black" rotation="0 180 0" position="-0.25 0 -0.4"></a-entity> 

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
    
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Octaedro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Octaedro 5 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="3.925 0.825 -6.3" geometry="width: 0.75; height: 0.75; depth: 0.75;">
  
  <!-- Octaedro -->
  <a-octahedron color="seashell" rotation="0 0 0" position="0 0.8 0" scale="0.1 0.1 0.1" radius="3"></a-octahedron>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Octaedro:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: arista=11 cm; color: black" rotation="0 180 0" position="-0.25 0 -0.4"></a-entity> 

  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
    
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Octaedro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Semiesfera + Cilindro 1 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="4.625 0.825 0" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Semiesfera -->
  <a-sphere color="darkkhaki" rotation="90 0 -180" position="0 0.7 0" scale="0.2 0.2 0.2" phi-length=180 phi-start=0></a-sphere>

  <!-- Cilindro -->
  <a-cone color="darkkhaki" rotation="0 0 0" position="0 0.8 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Semiesfera:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: r=40 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  
  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=40 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=30 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Semiesfera + Cilindro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Semiesfera + Cilindro 2 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="4.625 0.825 -0.7" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Semiesfera -->
  <a-sphere color="salmon" rotation="90 0 -180" position="0 0.7 0" scale="0.2 0.2 0.2" phi-length=180 phi-start=0></a-sphere>

  <!-- Cilindro -->
  <a-cone color="salmon" rotation="0 0 0" position="0 0.8 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Semiesfera:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: r=20 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  
  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=20 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=28 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Semiesfera + Cilindro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Semiesfera + Cilindro 3 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="4.625 0.825 -1.4" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Semiesfera -->
  <a-sphere color="seagreen" rotation="90 0 -180" position="0 0.7 0" scale="0.2 0.2 0.2" phi-length=180 phi-start=0></a-sphere>

  <!-- Cilindro -->
  <a-cone color="seagreen" rotation="0 0 0" position="0 0.8 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Semiesfera:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: r=70 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  
  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=70 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=14 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Semiesfera + Cilindro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Semiesfera + Cilindro 4 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="4.625 0.825 -2.1" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Semiesfera -->
  <a-sphere color="chocolate" rotation="90 0 -180" position="0 0.7 0" scale="0.2 0.2 0.2" phi-length=180 phi-start=0></a-sphere>

  <!-- Cilindro -->
  <a-cone color="chocolate" rotation="0 0 0" position="0 0.8 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Semiesfera:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: r=23 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  
  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=23 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=52 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Semiesfera + Cilindro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Semiesfera + Cilindro 5 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="4.625 0.825 -2.8" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Semiesfera -->
  <a-sphere color="dodgerblue" rotation="90 0 -180" position="0 0.7 0" scale="0.2 0.2 0.2" phi-length=180 phi-start=0></a-sphere>

  <!-- Cilindro -->
  <a-cone color="dodgerblue" rotation="0 0 0" position="0 0.8 0" scale="0.2 0.2 0.2" radius-bottom="1" radius-top="1"></a-cone>
  
  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Semiesfera:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: r=43 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  
  <!-- Parte central del cubo base que incluye los parametros para calcular el volumen de la figura superior de las dos que forman el conjunto -->
  <a-entity scale="1 1 1" text="value: Parametros Cilindro: ; color: black" rotation="0 0 0" position="0.35 0.2 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: r=43 cm; color: black" rotation="0 0 0" position="0.4 0 0.4"></a-entity>
  <a-entity scale="1 1 1" text="value: h=72 cm; color: black" rotation="0 0 0" position="0.4 -0.2 0.4"></a-entity>
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Semiesfera + Cilindro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Dodecaedro 1 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="4.625 0.825 -3.5" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Dodecaedro -->
  <a-dodecahedron color="rosybrown" rotation="0 0 0" position="0 0.8 0" scale="0.1 0.1 0.1" radius="3"></a-dodecahedron>

  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Dodecaedro:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: Arista=24 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Doecaedro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Dodecaedro 2 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="4.625 0.825 -4.2" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Dodecaedro -->
  <a-dodecahedron color="powderblue" rotation="0 0 0" position="0 0.8 0" scale="0.1 0.1 0.1" radius="3"></a-dodecahedron>

  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Dodecaedro:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: Arista=16 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Doecaedro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Dodecaedro 3 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="4.625 0.825 -4.9" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Dodecaedro -->
  <a-dodecahedron color="olive" rotation="0 0 0" position="0 0.8 0" scale="0.1 0.1 0.1" radius="3"></a-dodecahedron>

  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Dodecaedro:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: Arista=17 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Doecaedro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Dodecaedro 4 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="4.625 0.825 -5.6" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Dodecaedro -->
  <a-dodecahedron color="deepskyblue" rotation="0 0 0" position="0 0.8 0" scale="0.1 0.1 0.1" radius="3"></a-dodecahedron>

  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Dodecaedro:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: Arista=38 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Doecaedro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!-- Dodecaedro 5 -->

<!-- Cubo que sirve de base para la figura que incluye los parametros para calcular su volumen -->
<a-entity class="cube" mixin="cube" rotation="0 0 0" position="4.625 0.825 -6.3" geometry="width: 0.75; height: 0.75; depth: 0.75;">

  <!-- Dodecaedro -->
  <a-dodecahedron color="lemonchiffon" rotation="0 0 0" position="0 0.8 0" scale="0.1 0.1 0.1" radius="3"></a-dodecahedron>

  <!-- parte posterior del cubo base que incluye los parametros para calcular el volumen de la figura inferior de las dos que forman el conjunto  -->
  <a-entity scale="1 1 1" text="value: Parametros Dodecaedro:; color: black" rotation="0 180 0" position="-0.2 0.2 -0.4"></a-entity> 
  <a-entity scale="1 1 1" text="value: Arista=40 cm; color: black" rotation="0 180 0" position="-0.40 0 -0.4"></a-entity> 
  
  <!-- Lateral derecho del cubo base que incluye el nombre de la figura representada -->
  <a-entity scale="1 1 1" text="value: Doecaedro; color: black" rotation="0 90 0" position="0.4 0 -0.25"></a-entity>    

  <!-- parte superior del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="-90 90 0" position="0 0.4 -0.4"></a-entity>

  <!-- lateral izquierdo del cubo base -->
  <a-entity scale="1 1 1" text="value: ; color: black" rotation="0 -90 0" position="-0.4 0 0.4"></a-entity>   

</a-entity>

<!--Entorno ambiental del suelo -->

<a-entity rotation="-90 0 0" position="0 0 14.261" class="environmentGround environment" visible="" scale="1 1 4.18" shadow="cast: false; receive: false"></a-entity>

<!-- Panel informativo de creditos-->

<a-entity id="color" position="3 7.5 -25"
text="color: green; align: center; value: CREDITOS; width: 7"></a-entity>

<a-entity id="color" position="-3 6.5 -25"
text="color: green; align: center; value: Modelos 3D; width: 5"></a-entity>

<a-entity id="color" position="-3 5.5 -25"
text="color: green; align: center; value: Arrow (https://skfb.ly/6BYMS) de Jakob Henerey licencia con atribucion de Creative Commons(http://creativecommons.org/licenses/by/4.0/); width: 5"></a-entity>

<a-entity id="color" position="-3 4 -25" text="color: green; align: center; 
value: Medical Tent (Low Poly Style) (https://skfb.ly/6RstW) de Tiko licencia con atribucion de Creative Commons (http://creativecommons.org/licenses/by/4.0/) ; width: 5"></a-entity>

<a-entity id="color" position="-3 2.5 -25" text="color: green; align: center; 
value: Warehouse (https://skfb.ly/6SxYp) de MRowa licencia con atribucion de Creative Commons Attribution-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/) ; width: 5"></a-entity>

<a-entity id="color" position="3 6.5 -25"
text="color: green; align: center; value: Audio; width: 5"></a-entity>

<a-entity id="color" position="3 5.5 -25" text="color: green; align: center; 
value: Sonido de ambiente primaveral de bosque mediterraneo (https://freesound.org/people/dobroide/sounds/157807/) de Dobroide licencia con atribucion de Creative Commons BY 3.0 (http://creativecommons.org/licenses/by/3.0/) ; width: 5"></a-entity>

<a-entity id="color" position="9 6.5 -25"
text="color: green; align: center; value: Programas utilizados; width: 5"></a-entity>

<a-entity id="color" position="9 5.5 -25"
text="color: green; align: center; value: Marco de programacion A-frame (https://github.com/supermedium/aframe) con licencia MIT (https://github.com/aframevr/aframe/blob/master/LICENSE); width: 5"></a-entity>

<!-- Iluminacion. -->
<a-entity light="type: point; color: #f4f4f4; intensity: 0.1; distance: 0" position="-2.5 1.2 2.2"></a-entity>
<a-entity light="type: point; color: #f4f4f4; intensity: 0.1; distance: 0" position="-20 -7 -40"></a-entity>
<a-entity light="type: ambient; color: #f4f4f4; intensity: 0.25;" position="-8 10 -18"></a-entity>
</a-entity>

<!-- Controles para dispositivo XR -->
<a-entity hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc" aabb-collider="objects: .cube;" grab teleport-controls="cameraRig: #rig; teleportOrigin: #head; button: trigger; collisionEntities: #navmesh"></a-entity>
<a-entity hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc" aabb-collider="objects: .cube;" grab teleport-controls="cameraRig: #rig; teleportOrigin: #head; button: trigger; collisionEntities: #navmesh"></a-entity>

<!-- Posicion de la camara a una altura de media del ojo humano que para la clase de 2do de matematicas es de 1.5 m -->
<a-entity position="0 1.5 0" camera look-controls wasd-controls></a-entity>

</a-scene>
</body>
</html>

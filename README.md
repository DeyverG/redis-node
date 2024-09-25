# Usando Redis en Node.js

##### Este es un pequeño proyecto que utiliza Redis como base de datos en cache para almacenar datos de algunas APIs consultadas.

#### ¿Qué es Redis?

##### Redis es un sistema de almacenamiento de datos en memoria. Es muy rápido y eficiente, y se utiliza en una gran variedad de aplicaciones, desde aplicaciones web hasta aplicaciones de análisis de datos, lo cual ayuda a mejorar la eficiencia y la escalabilidad de nuestras aplicaciones y a no saturar con peticiones a la base de datos.

#### ¿Cómo funciona?

##### Redis almacena datos en memoria, lo que significa que los datos se almacenan en la memoria de la computadora en vez de en disco.

##### Redis funciona como intermediario entre el cliente y la base de datos. El cliente envía solicitudes a Redis, que almacena los datos en la memoria y los devuelve al cliente evitando que se realicen solicitudes a la base de datos.

## Comando para docker

#### docker run -d --name redis -p 6379:6379 redis

## Comando para instalar redis commander

#### npm i -g redis-commander

## Comando para iniciar redis commander

#### redis-commander

### Version de node usada v18.19.0

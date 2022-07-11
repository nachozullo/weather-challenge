# Weather challenge

### Summary

Las tecnologías a utilizar son NodeJS, ReactJS o React Native. En el caso de preferir RN, utilizarlo de
manera nativa (sin expo).

La siguiente prueba plantea el desarrollo de una aplicación de consulta de clima que pueda visualizar el
pronóstico actual, próximos 5 días para la ciudad actual y de otras 5 ciudades seleccionables.

Además del desarrollo específico de las funcionalidades, se requiere identificar y generar los casos de
test que se consideren necesarios

La entrega del código se espera que se entregue en algún repositorio público (Por ejemplo Github).
Para aquellos perfiles que apliquen como FullStack, se deben completar ambas partes de la prueba. Caso
contrario, pueden solo realizar la parte que corresponde (armar la solución entera puede ser un extra).
Se recomienda utilizar servicio API de weather Open Weather Map, pero se puede usar utilizar cualquier
otro de preferencia.

Sugerencia de servicios/librerías:
• Supertest (recomendado)
• Should (recomendado)
• ip-api (recomendado)

Se pueden usar cualquier otras librerías que consideren de utilidad, aunque recomendamos el uso de
Redux y Redux-Saga. Cualquier información relevante la deben agregar al Readme del proyecto.

Tomate tu tiempo, y demuestra tus conocimientos pensando en la estructura y el trabajo en equipo.

## Frontend Test

Preferentemente desarrollar en React.js, como alternativa React Native (sin expo).

Desarrollar una app full client-side que permita visualizar el pronóstico climático actual y de los
próximos 5 días en la ubicación actual y permita visualizar el pronóstico de otras 5 ciudades
seleccionables.

Se debe idear y diseñar la UI que se considere mas acorde (No se valoran habilidades de diseño, sino de
uso de componentes).

Los datos deben ser consumidos de la API desarrollada (en caso de que la prueba lo requiera) o la API
externa (Si solo se evalúa Front).

## Usage

Se deben definir las variables de entorno:

- REACT_APP_API_URL = https://api.openweathermap.org/data/2.5
- REACT_APP_API_KEY = API_KEY

Instalar las dependencias:

### `npm install`

Inicializar la app:

### `npm start`

Abrir [http://localhost:3000](http://localhost:3000) to view it in your browser.

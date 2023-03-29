# **DuDi**

![Hackaton_P.png](/docs/Hackaton_P.png)

## **Objetivo**

Nuestra propuesta con esta aplicación consiste en realizar ciertos pasos sistematizados del proceso de due diligence, y ahorrar potencialmente tiempo y dinero a las PYMEs que quieran realizar este proceso.

## **Instalación**

La idea era que se pudiera acceder a la aplicación mediante un link parecido al siguiente: [https://www.dudi.com](https://www.dudi.com/) , Pero para el producto mínimo viable, toda la aplicación se monto en **local**.

![portada.png](/docs/portada.png)

## **Desarrollo**

En un principio se pensaba implementar nuestra aplicación con Python y Flask, después de ciertas complicaciones se implemento todo en JavaScript con React. La idea de la aplicación es pedir cierta información al usuario, como los nombres de los puestos estratégicos de la empresa para que con web scraping verificar que ninguno este involucrado en actos de corrupción también se le pedirá que respondiera preguntas de si/no sobre información de la empresa y por ultimo se le pedirá al usuario que mande documentos en PDF de su código de conducta o el código de ética, y mediante el análisis de esos documentos con la [API de Openai](https://platform.openai.com/docs/api-reference) y su tecnología de procesamiento de texto, recopilar información que al final seria representada en un certificado, en donde las empresas que se sometieron a este proceso pudieran observar sus áreas de oportunidades.

Al mismo tiempo las empresas compradoras pueden encontrar un feed de estos certificados, y también contar con la posibilidad de buscar ciertos productos o empresas distribuidoras para poder tomar la mejor decisión al momento de querer hacer negocios.

A continuación se muestran los pilares que consideramos para clasificar a las empresas que quisieran someterse a este proceso:

![Pilares.png](/docs/Pilares.png)

El siguiente es el prototipo de la interfaz de los diferentes de usuario:

![DDprototype.png](/docs/DDprototype.png)

Trasfondo de las bases legales del proyecto:

[IDEA DuDi.pdf](/docs/IDEA_DuDi.pdf)

## DEMO

[DEMO.gif](/docs/DEMO.gif)

## Autores

- [Julieta Torres Hernández](https://www.instagram.com/th.julieta/)
- [Juan Sebastian Peña Angarita](https://github.com/JuanSebasPeA)
- [Jorge Angel Juárez Váquez](https://github.com/jorge-jrzz)
- [María Guadalupe García Mendiola](https://github.com/Garmendi)
- [Santiago Bocanegra Gutiérrez](https://github.com/Sbdk24)
- Karla Vernónica Mejía Carmona

## **Agradecimientos**

Agradecemos al equipo de la [UNODC](https://www.unodc.org/lpomex/index.html) que hizo posible este [evento](https://www.unodc.org/lpomex/noticias/enero-2023/convocatoria-coding4integrity_-hackaton-juvenil-contra-la-corrupcion-mexico.html), por brindarnos esta plataforma y oportunidad.

## **Estatus**

Este proyecto fue planeado y desarrollado por el equipo 3 (STDY) para el hackathon **_CODING4INTEGRITY 2023_**, el cual se llevo a cabo el 25 y 26 de Marzo del 2023, no existen intenciones de actualizar o terminar el proyecto en el futuro cercano.

## **Licencia**

[MIT](https://choosealicense.com/licenses/mit/)

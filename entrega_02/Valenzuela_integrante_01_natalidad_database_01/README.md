
## **Historial de procesos y decisiones** 

**Documentación del proceso de limpieza y construcción de base de datos** 

El proceso de construcción de la base fue principalmente manual y se realizó en distintas etapas. 

En primer lugar, revisé el archivo Excel obtenido desde el INE. Este archivo tenía una gran cantidad de información, incluyendo datos por región, distintas variables y años. Por esto, fue necesario identificar qué información era relevante para mi base de datos. En este caso, seleccioné únicamente los datos de nacidos vivos a nivel nacional para el período entre 1992 y 2020. Como los datos sólo estaban hasta 2020, posteriormente fui buscando en los boletines demográficos por año de 2021, 2022, 2023 y 2024, y así poder completar los datos que me faltaban.  

Luego, realicé una búsqueda complementaría para obtener las tasas. Al ingresar al Banco Mundial, encontré que cada indicador se encontraba en un archivo Excel distintos y que cada uno contenía muchos países. Por lo tanto, fue necesario filtrar manualmente la información para quedarme solo con Chile. Además, seleccioné sólo los años correspondientes al período que estaba trabajando. 

Una vez reunida la información de ambas fuentes, construí una nueva base de datos limpia en un archivo Excel distinto. En esta base organicé los datos en cuatro columnas: año, nacidos vivos, tasa global de fecundidad y tasa bruta de natalidad. Cada fila corresponde a un año, lo que permite observar la evolución temporal de las variables de forma clara. 

Durante el proceso, se realizó una limpieza de datos que consistió en eliminar información innecesaria, como variables adicionales, datos de otros países y elementos propios de los archivos, como títulos o celdas no relevantes. Además, se verificó que los años coincidieran entre las distintas fuentes y que no existieran valores que faltaran. 

**Decisiones tomadas durante el proceso** 

Durante la construcción de la base tome distintas decisiones. En primer lugar, decidí trabajar con una escala anual, para cumplir con el objetivo de analizar las tendencias a largo plazo de la natalidad en Chile. 

También decidí construir una base simplificada, incluyendo las variables necesarias para el análisis general: año, nacidos vivos, tasa global de fecundidad y tasa bruta de natalidad. Esta decisión se tomó con el objetivo de mantener una base clara, legible y fácil de interpretar.  

Otra decisión fue utilizar el Banco Central como fuente para las tasas, debido a lo accesible que era encontrar y filtrar por país y por año, lo que permitió obtener una serie completa sin necesidad de reconstruir manualmente los datos desde múltiples documentos.  

Como observación, para las tasas del año 2024, decidí revisar los datos directamente desde el PDF del INE de estadísticas vitales de ese año, esto por ser el dato más cercano a la actualidad. 

Además, durante el proceso tomé la decisión de estandarizar los valores numéricos, específicamente en el caso de las tasas. Opté por trabajar con dos decimales en todas las variables correspondientes a la tasa de fecundidad global, con el fin de mantener consistencia en la base y facilitar la lectura. Para esto, realicé un proceso de aproximación, en el cual los valores fueron redondeados al segundo decimal: cuando el tercer decimal era igual o superior a 5, se aproximó al número siguiente, y cuando era menor a 5, se mantuvo el valor original. Esta decisión permitió evitar inconsistencias en la cantidad de decimales.  

**Herramientas utilizadas** 

Utilicé Microsoft Excel para la extracción, filtración, organización y limpieza de datos. Excel permitió trabajar con los archivos originales, seleccionar la información importante y construir la base final.  

También usé Visual Studio Code para la redacción y documentación del proceso en formato Markdown. La base de datos limpia fue guardada y subida en formato CSV. 

**Fuentes utilizadas y justificación** 

Para la construcción de esta base de datos se utilizaron dos fuentes principales: el Instituto Nacional de Estadísticas (INE) y el Banco Mundial. 

En primer lugar, utilicé el INE para obtener los datos de nacidos vivos en Chile. Esta fuente fue elegida porque corresponde al organismo oficial encargado de producir estadísticas demográficas en el país, por lo que entrega información confiable y consistente. Durante la búsqueda pude observar que el INE tenía múltiples documentos, muchos de ellos en formato PDF separados por año, lo que hacía más complejo trabajar uno a uno con estos documentos. Por eso, opté por utilizar un Excel que reunía varios años en una misma tabla, ya que esto facilitaba el acceso a los datos y permitía trabajar de forma más eficiente. 

**Link INE:** anuario-de-estadísticas-vitales-2020.xlsx


Como en ese Excel solo había datos hasta el 2020, para los siguientes 4 años tuve que ir uno por uno revisando los PDF de las estadísticas vitales del 2021, 2022, 2023 y 2024.  

**Link PDF INE:** 

2021:  PPTCorporativaINE2021 (versión 2) 

2022: estadísticas-vitales-cifras-provisionales-2022.pdf 

2023: estadísticas-vitales-cifras-provisionales-2023.pdf 

2024: estadísticas-vitales-cifras-provisionales-2024.pdf 

En segundo lugar, utilicé el Banco Mundial para obtener la tasa bruta de natalidad y la tasa global de fecundidad. Esta fuente fue seleccionada porque permite acceder a series históricas de manera ordenada y filtrada por país. A diferencia de otras fuentes, el Banco Mundial facilita la selección directa de Chile y del rango de edad necesario, lo que simplificó el proceso de construcción de la base de datos y permitió asegurar la coherencia entre los distintos indicadores.  

**Link Banco mundial:**  

Tasa de natalidad bruta: Tasa de natalidad, bruta (por cada 1.000 personas) - Chile | Data 

Tasa de fecundidad global: Tasa de fecundidad, total (nacimientos por mujer) - Chile | Data 

 

**Preguntas que permite responder la base de datos** 

A partir de esta base de dato es posible responder distintas preguntas relevantes para el análisis de la natalidad en Chile, estas son: 

¿Cómo ha evolucionado el número de nacidos vivos en Chile entre 1992 y 2024? 

¿Cómo ha cambiado la tasa global de fecundidad en ese mismo período? 

¿Qué tendencia presenta la tasa bruta de natalidad a nivel nacional? 

¿Qué tan marcada es la disminución de la natalidad en las últimas décadas? 

 
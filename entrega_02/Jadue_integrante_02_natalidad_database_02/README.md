## Historial de procesos y decisiones

**Proceso de limpieza y construcción**

El proceso de construcción de la base de datos se realizó a partir de información obtenida del Instituto Nacional de Estadísticas, específicamente de las series históricas de estadísticas vitales.


Al principio revisé distintas bases de datos disponibles, incluyendo fuentes del DEIS. Sin embargo, éstas no contenían las variables cuantitativas necesarias para el análisis, como nacidos vivos, por lo que las descarté.

Elegí la base del INE porque contenía información sobre nacimientos observados y corregidos por año. Decidí trabajar con los nacimientos corregidos, ya que estos consideran ajustes por subregistro y entregan una mejor aproximación al fenómeno real.


Luego, seguí con limpiar la base de datos, eliminando las columnas menos relevantes y conservando las necesarias para el análisis: año, grupo etario de la madre, nacidos vivos, tasa específica de fecundidad y el porcentaje del total.


Finalmente, decidí construir una nueva variable, “porcentaje del total” que permite analizar la proporción de nacidos vivos correspondiente a cada grupo etario en relación con el total anual.

Además para poder calcular el porcentaje total tuve que dejar también la columna de “nacimientos corregidos” para poder usarlo como total para la división y que la fórmula para sacar el porcentaje funcione.

La base de datos del INE la dejé en otra hoja de excel para poder usar la fórmula sin que obstruya la hoja original de la entrega.


**Cálculo de variables y herramientas utilizadas**

El cálculo del porcentaje total lo hice dividiendo la cantidad de nacidos vivos de cada grupo etario por el total de nacidos vivos del mismo año, multiplicando el resultado por 100.


Para poder realizar este cálculo, fue necesario primero incorporar los valores de nacimientos corregidos a la base de trabajo. Esto se hizo mediante una fórmula de Excel que permitía buscar coincidencias por año entre las distintas hojas del archivo, moviendo los valores correspondientes a la hoja donde se estaba construyendo la base final.

Posteriormente, utilicé otra fórmula para calcular el porcentaje, dividiendo los nacidos vicios de cada grupo etario por el total anual.

Todo el proceso fue realizado en Excel, utilizando funciones como búsqueda de datos y operaciones matemáticas básicas, lo que me permitió automatizar los cálculos y asegurar consistencia en los resultados.


**Decisiones metodológicas**

- Decidí utilizar los nacimientos corregidos en lugar de los observados, debido a que estos consideran el subregistro y permiten un análisis más preciso.
- Descarté la base de datos del DEIS porque no contenía los datos cuantitativos útiles para el análisis.
- Además decidí construir una base simplificada, incluyendo solo las variables necesarias para el análisis, lo que permitió obtener una estructura clara y fácil de utilizar para futuras visualizaciones.

**Limitaciones del proceso**

Durante el proceso de construcción de la base de datos tuve limitaciones en la disponibilidad de la información para los años 2023 y 2024. En estos años, no se estaban los valores de nacimientos corregidos, lo que impidió poder calcular el porcentaje del total con el resto de los datos.
Frente a eso, decidí mantener estos años en la base de datos con la información disponible, pero sin calcular el porcentaje, evitando así introducir estimaciones que pudieran afectar la validez del análisis.


**Fuente de datos**

La fuente que utilicé fue el Instituto Nacional de Estadísticas (INE), ya que corresponde al organismo oficial encargado de producir estadísticas demográficas del país, lo que garantiza la confiabilidad y consistencia de los datos.

Elegí trabajar con sus series históricas debido a que permiten analizar la evolución de los nacimientos a lo largo del tiempo en una misma base estructurada.


**Preguntas que permite responder la base de datos**


A partir de la base de datos construida, es posible responder diversas preguntas para el análisis del fenómeno de la fecundidad en Chile.
1. ¿Cómo ha evolucionado la fecundidad adolescente (15-19 años) en Chile a lo largo del tiempo?
2. ¿Qué grupo etario concentra la mayor proporción de nacimientos en distintos períodos?
3. ¿Se ha producido un desplazamiento de la maternidad hacia edades mayores en las últimas décadas?

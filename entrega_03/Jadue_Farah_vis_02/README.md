## Disminución de la fecundidad adolescente en Chile (1992-2024)

En esta entrega trabajé con una base de datos sobre la natlidad y fecundidad en Chile entre 1992 y 2024. El objetivo fue construir una visualización que permitiera observar la evolución de la fecundidad adolescente en el país, a partir de la tasa específica de fecundidad en mujeres entre 15 y 19 años. 

La visualización busca aportar a la hipótesis general del proyecto, que plantea que la baja natalidad no responde únicamente a una disminución en la cantidad de nacimientos, sino también a una transformación más profunda en los patrones reproductivos. En mi caso, el foco está puesto en mostrar cómo la maternidad adolescente ha disminuido de forma sostenida durante las últimas décadas, evidenciando cambios culturales, sociales y reproductivos dentro de la población chilena.


**Base de datos utilizada**:

La base de datos utilizada fue jadue_database_limpia(2).csv. Esta base contiene información anual sobre natalidad y fecundidad en Chile organizada en variables como año, grupo diario de la madre, nacidos vivos, porcentaje total de nacimiento y tasa específica de fecundidad.

Esta base permite observar cambios en los patrones reproductivos según la edad de la madre durante un periodo amplio, desde 1992 hasta 2024. En particular, permite analizar la evolución de la fecundidad adolescente a través del grupo diario de 15 a 19 años.

La variable “año” permite observar la evolución temporal del fenómeno. La variable Grupo-edad-madre permite identificar los distintos rangos literarios de la maternidad. La variable tasa-específica-fecundidad permite analizar la intensidad de la fecundidad dentro de cada grupo etario, mostrando cuántos nacimientos ocurren por cada mil mujeres. Además, la variable nacidos-vivos permite observar la cantidad total de nacimientos registrados y porcentaje-total-nacimientos permite identificar el peso relativo de cada grupo diario dentro del total nacional de nacimientos.


**Proceso realizado en Python**:
El trabajo se realizó en Google Colab utilizando Phyton, pandas y Altair. En primer lugar, importé las librerías necesarias para trabajar con la base de datos y construir la visualización. Utilice pandas para cargar, revisar y procesar la información, y Altair para crear el gráfico.

Cabe mencionar que durante el proceso utilicé ChatGPT, apoyo para resolver dudas relacionadas con sintaxis en Python, uso de Altair y solución de algunos errores de código. Sin embargo, fui ejecutando cada paso en Google Colab, revisando los resultados obtenidos y comprendiendo el funcionamiento general del proceso. Las decisiones sobre qué variable usar, qué grupo etario seleccionar y qué tipo de visualización construir fueron tomadas de acuerdo con los objetivos del trabajo.
En una primera etapa cargué la base jadue_database_limpia(2).csv mediante pd.read_csv(). Luego utilicé df.head() para revisar que la base se hubiera cargado correctamente y df.columns para comprobar los nombres exactos de las columnas disponibles.

Posteriormente, eliminé una columna vacía, identificada como Unnamed: 6, ya que no contenía información útil para el análisis. Después filtré la base para trabajar únicamente con el grupo etario de 15 a 19 años, correspondiente a fecundidad adolescente. Esta decisión fue importante porque la visualización se enfocó específicamente en mostrar cómo ha evolucionado la maternidad adolescente en Chile.

También fue necesario procesar la variable tasa-específica-fecundidad. Los valores de esta columna estaban escritos con comas, por lo que Python los interpretaba como texto y no como números. Para corregir esto, utilice funciones como .astype(str), .str.replace() y .astype(float), transformando la columna a formato numérico para permitir su correcta visualización.

Una vez preparada la base, construyó un gráfico de líneas con Altair utilizando alt.Chart(df_teen). Para la visualización usé mark_line(point=True), lo que permitió crear una línea con puntos en cada año. En encode() puse la variable año al eje X y tasa-específica-fecundidad al eje Y.

La elección de un gráfico de línea se justifica, porque el objetivo era mostrar una evolución temporal entre 1992 y 2024. Este formato permite observar de manera clara la disminución sostenida de la fecundidad adolescente a lo largo del tiempo y facilita identificar la tendencia general del fenómeno.
Finalmente, el gráfico fue exportado en formato HTML y, en un inicio no pude exportarlo también en JPG por lo que lo hice en PNG y después lo transformé para que estuviera en el formato que corresponde. Esto para su utilización dentro de la webstory del proyecto.


**Decisiones tomadas**:
Durante el proceso se tomaron distintas decisiones, metodológicas y de diseño. 
Primero, decidí trabajar específicamente con el grupo etario de 15 a 19 años porque el objetivo de mi visualización era observar la evolución de la fecundidad adolescente en Chile.

También decidí utilizar un gráfico de líneas, ya que este formato permite representar de mejor manera los cambios y tendencias a lo largo del tiempo. La visualización busca mostrar una evolución sostenida más que comparar años aislados.
Además, opté por utilizar una visualización simple y clara para facilitar su comprensión dentro de una webstory. La incorporación de puntos en cada año ayuda a identificar los registros específicos y refuerza visualmente la disminución progresiva de la fecundidad adolescente.


**Preguntas que puede responder la visualización**:

1. ¿Cómo ha evolucionado la fecundidad adolescente en Chile entre 1992 y 2024?
2. ¿Qué tan significativa ha sido la disminución de la maternidad adolescente, en las últimas décadas?
3. ¿Qué tendencias se pueden observar en los patrones reproductivos juveniles en Chile?
4. ¿Cómo se relaciona la caída de la fecundidad adolescente, con la disminución general de la natalidad?


**Relación con la hipótesis general**:

Esta visualización complementa la hipótesis general del proyecto, porque muestra que la baja de natalidad en Chile también se relaciona con cambios en los patrones reproductivos según la edad de la madre.

La disminución sostenida de la fecundidad adolescente evidencia que las nuevas generaciones están postergando la maternidad y modificando sus trayectorias reproductivas. De esta manera, los datos muestran que la caída de la natalidad no sólo implica menos nacimientos, sino también transformaciones sociales y culturales más amplias relacionadas con la maternidad y la planificación de vida.

Mi visualización aporta una mirada específica sobre la maternidad adolescente dentro del fenómeno general de la caída de natalidad en Chile, complementando otras dimensiones analizadas por el proyecto grupal.



## **Visualización individual: caída de la natalidad en Chile, 1992-2024**


En esta entrega trabajé con mi base de datos nacional sobre natalidad en Chile entre 1992 a 2024. El objetivo fue construir un conjunto de visualizaciones que permitiera observar cómo ha cambiado la natalidad en el país a partir de tres indicadores principales: cantidad de nacidos vivos, tasa global de fecundidad y tasa bruta de natalidad. 

La visualización busca aportar a la hipótesis general del proyecto, que plantea que la baja de natalidad no responde únicamente a una disminución en la cantidad de nacimientos, sino a una transformación más profunda en los patrones reproductivos. En mi caso, el foco está puesto en mostrar la dimensión nacional del fenómeno: cómo han bajado los nacimientos, cómo ha disminuido el promedio de hijos por mujer y cómo se ha reducido la natalidad en relación con la población.  

Esta parte del trabajo complementa otras visualizaciones del proyecto que observan diferencias regionales, edad de la madre o presencia de madres extranjeras. Mi aporte se concentra en mostrar la tendencia general del país, para entender la magnitud de la caída antes de analizar sus diferencias internas.  


**Base de datos utilizada** 


La base utilizada fue valenzuela_database_limpia.csv. Esta base contiene información anual sobre natalidad en Chile y está organizada en cuatro variables: Año, Nacidos Vivos. Tasa global Fecundidad y Tasa bruta natalidad.  

Esta base fue seleccionada porque permite observar la evolución de la natalidad Chile durante un periodo amplio, desde 1992 hasta 2024. A diferencia de una base regional, esta permite construir una mirada nacional y mostrar de manera clara cómo han cambiado los principales indicadores de natalidad a lo largo del tiempo.  

La variable Nacidos vivos permite observar la cantidad total de nacimiento registrados cada año. La Tasa global Fecundidad permite mirar el promedio de hijos por mujer, lo que ayuda a entender si la baja se relaciona también con cambios en los patrones reproductivos. La Tasa bruta natalidad, permite analizar los nacimientos en relación a la población, ya que expresa la cantidad de nacidos vivos por cada 1.000 habitantes.  


**Proceso realizado en Python**


El trabajo se realizó en Google Colab, utilizando Python, pandas y Altair. En primer lugar, importé las librerías necesarias para trabajar con la base de datos y construir las visualizaciones. Utilicé pandas para cargar, revisar, limpiar y procesar la información, y Altair para crear los gráficos.  

Hay que señalar que en el proceso utlicé ChatGPT como apoyo para orientarme en la escritura de algunos códigos, resolver errores y entender mejor ciertas funciones de Python. Sin embargo, fui revisando cada paso en Google Colab, ejecutando las celdas, observando los resultados y corrigiendo los problemas que aparecían. Las decisiones sobre qué variables usar, qué gráficos construir y cómo representar la información fueron tomadas según los objetivos de mi visualización. Por eso, aunque recibí apoyo en algunas partes del código, el proceso fue comprendido y aplicado de acuerdo a lo que necesitaba mostrar.  

En una primera etapa, cargué la base valenzuela_database_limpia (1).csv en formato CSV mediante la función pd.read_csv(). Luego revisé las primeras filas con df.head() para comprobar que el archivo se hubiera cargado correctamente. También utilicé df.columns para revisar los nombres exactos de las columnas, df.info() para observar el tipo de dato de cada variable y df.describe() para obtener una primera descripción general de los valores numéricos.  

Después, creé una copia de la base original llamada df_limpia. Esta decisión fue importante porque permite trabajar sobre una versión procesada de los datos sin modificar directamente la base original cargada en el notebook. A partir de esa copia, revisé y ajusté las variables necesarias para las visualizaciones.  

La columna Año se dejó en formato numérico con pd.to_numeric(). Eso fue necesario para que Python reconociera esa variable como una serie temporal y pudiera ordenar correctamente los datos por año.  

También se revisaron las columnas Nacidos vivos, Tasa global Fecundidad y Tasa bruta natalidad. En algunos casos, los valores venían con comas o puntos propios del formato español, por lo que fue necesario usar .astype(str) y .str.replace() para estandarizar los datos antes de transformarlos a formato numérico con pd.to_numeric().  

Una vez preparada la base, construí el primer gráfico con Altair. Este gráfico muestra la evolución de los nacidos vivos en Chile entre 1992 y 2024. Para hacerlo, utilicé alt.Chart(df_limpia) para indicar que la visualización se construía a partir de la base limpia. Luego usé mark_line(point=True), lo que permitió crear un gráfico de líneas con puntos en cada año. En encode() asigné la variable Año al eje X y Nacidos vivos al eje Y. También incorporé tooltip, para que al pasar el cursor sobre el gráfico se pudiera ver el año y el número de nacidos vivos.  

El primer gráfico permite observar de forma directa la caída en la cantidad total de nacimientos. La elección de un gráfico de líneas se justifica porque el objetivo era mostrar una evolución temporal. Este formato permite ver la tendencia general y no solo comparar años aislados. 

El segundo gráfico permite observar de forma directa la caída en la cantidad total de nacimientos. La elección de un gráfico de líneas se justifica porque el objetivo era mostrar la evolución temporal. Este formato permite ver la tendencia general. 

Este gráfico se enfocó en la tasa global de fecundidad, para construirlo, también utilicé un gráfico de líneas, ya que el objetivo era observar cómo cambia el promedio de hijos por mujer a lo largo del tiempo. En este caso, asigné Año al eje X y Tasa global Fecundidad al eje Y. Esta visualización complementa el primer gráfico, porque muestra que la baja de la natalidad no solo se refleja en la cantidad total de nacimientos, sino también en el promedio de hijos que tienen las mujeres.  

Este segundo gráfico fue importante porque si solo se observan los nacidos vivos, la caída podría explicarse parcialmente por cambios en la cantidad de población. En cambio, la tasa global de fecundidad muestra un cambio en el comportamiento reproductivo, ya que indica cuántos hijos tienen en promedio las mujeres. 

El tercer gráfico fue una comparación entre 1992 y 2024 de los principales indicadores de natalidad. Para construirlo, primero identifiqué el primer y último año disponible en la base usando df_limpia[“Año”].min() y df_limpia[“Año”].max(). Luego filtré la base para quedarme solo con esos dos años. Esta decisión permitió comprar de manera directa el inicio y el final del periodo analizado.  

Después utilicé la función melt() de pandas para transformar la base a formato largo. Esto fue necesario porque quería comprar tres indicadores distintos en una misma estructura de datos: Nacidos vivos, Tasa global Fecundidad y Tasa bruta natalidad. Al transformar la base a formato largo, cada indicador queda en una misma columna y sus valores en otra, lo que facilita la construcción del gráfico en Altair.  

En este tercer gráfico también se tomaron decisiones de diseño importantes. Como los tres indicadores tienen escalas distintas, decidí separarlos en paneles distintos usando facet() en Altair. Esta decisión fue necesaria porque los nacidos vivos se expresan en miles, mientras que la tasa global de fecundidad y la tasa bruta de natalidad en valores más chicos. Si todos los indicadores se mostraran en un mismo eje, los valores más bajos quedarían invisibles y el gráfico no se entendería bien.  

En este gráfico utilicé más herramientas de procesamientos y diseño. Primero se identificó el primer y último año de la base mediante df_limpia[“Año”].min() y df_limpia[“Año”].max(). Luego se filtró la base con isin() para conservar solo esos dos años. Después se usó melt() para transformar la base a formato largo, dejando los indicadores en una columna y sus valores en otra. Esto permitió comprar Nacidos vivos, Tasa global Fecundidad y Tasa bruta natalidad en una misma estructura.  

Para construir el tercer gráfico se usó mark_bar() para crear barras, mark_text() para agregar etiquetas con los valores exactos y alt.layer () para superponer las barras con los textos. También se aplicó resolve_scale(y=”independent”), lo que permitió que cada panel tuviera su propio eje Y y que los valores chicos no quedaran invisibles.  

En el color de este gráfico se usó alt.Color() con alt.Scale(), asignando un color distinto para cada año: azul para 1992 y rojo para 2024. Esta decisión ayudó a diferenciar visualmente el inicio y el final del periodo analizado. Finalmente, se mantuvo el uso de tooltip y properties() para entregar información adicional. 

 
 **Decisiones tomadas**


Durante el proceso se tomaron varias decisiones metodológicas y de diseño. Primero, se decidió trabajar con una base nacional, porque mi visualización buscaba mostrar la magnitud general de la caída de la natalidad en Chile de 1992 a 2024. Esto permite complementar otras partes del proyecto que analizan dimensiones más específicas. 

También se decidió usar gráficos de líneas para los dos primeros indicadores, ya que este formato permite observar mejor la evolución temporal. Así, el primer gráfico muestra la caída de los nacidos vivos y el segundo muestra la disminución de la tasa global de fecundidad. 

 Para el tercer gráfico, se optó por una comparación directa entre 1992 y 2024, en vez de mostrar solo la caída porcentual. Esta decisión se tomó porque el “antes y después” resulta más claro para el lector. Además, como los indicadores tienen escalas distintas, se separaron en paneles distintos y se usó una escala independiente para cada uno.  

Finalmente, se incorporaron colores para distinguir ambos años y etiquetas con los valores exactos, esto ayuda a que la visualización no solo muestre la tendencia general, sino también los datos específicos de cada año.  


**Preguntas que pueden responder las visualizaciones**


¿Qué ha pasado con la cantidad de nacidos vivos en Chile entre 1992 y 2024? 

¿Como ha cambiado la tasa global de fecundidad? 

¿Qué diferencia existe entre los indicadores de natalidad de 1992 y 2024? 

¿Qué tan marcada ha sido la caída de los principales indicadores de natalidad en Chile? 


**Relación con la hipótesis general**

Estas visualizaciones complementan la hipótesis general de proyecto porque muestran que la baja de la natalidad en Chile no se expresa sólo en una disminución de nacimientos. Al observar nacidos vivos, tasa global de fecundidad y tasa bruta de natalidad, se puede ver que el fenómeno es más amplio. 

El primer gráfico muestra que en Chile nacen menos niños que antes. El segundo gráfico evidencia que las mujeres tienen, en promedio, menos hijos. El tercero resume el cambio entre 1992 y 2024 en los principales indicadores de natalidad. 

De esta manera, mi visualización aporta una mirada nacional al proyecto. Antes de analizar diferencias más específicas, como territorio, edad de la madre o nacionalidad, es importante observar la tendencia general del país. Los datos muestran una caída más bien sostenida que permite entender la baja de la natalidad como parte de una transformación más profunda en los patrones reproductivos de Chile.
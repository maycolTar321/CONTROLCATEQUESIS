# 📖 Guía de Configuración para el Sistema de Catequesis

¡Hola! He modernizado tu código con un diseño web más profesional (dashboard, iconos, filtros y colores modernos). Además, he preparado todo el código para que se **conecte con Google Drive / Google Sheets** y funcione como una base de datos en la nube.

A continuación, te explico los pasos exactos que debes seguir para conectar todo.

---

## 🟢 PASO 1: Crear la Base de Datos en Google Sheets (Drive)

1. Abre tu navegador y ve a [Google Sheets (Hojas de cálculo)](https://docs.google.com/spreadsheets).
2. Crea una **Hoja en blanco** y ponle de nombre algo como "Base de Datos Catequesis".
3. En el menú de arriba, ve a **Extensiones > Apps Script**.
4. Se abrirá una nueva pestaña con un editor de código. Borra todo el código que aparece ahí.
5. Abre el archivo llamado `google_apps_script.gs` que está en tu carpeta local de la computadora (o ábrelo con el Bloc de notas). Copia **todo** su contenido y pégalo en el editor de Apps Script.
6. Presiona el botón de **Guardar** (el ícono del disquete).

---

## 🟢 PASO 2: Publicar y Obtener la URL de conexión

1. En ese mismo editor de Apps Script, arriba a la derecha, haz clic en el botón azul **Implementar** (Deploy) y luego en **Nueva implementación**.
2. En la ventana que aparece, haz clic en el icono de la rueda dentada (engranaje) junto a "Seleccionar tipo" y elige **Aplicación web**.
3. Rellena los datos así:
   - **Descripción**: "Sistema Catequesis API"
   - **Ejecutar como**: "Yo" (tu correo)
   - **Quién tiene acceso**: **Cualquier persona** (⚠️ *Muy importante para que la web pueda conectarse sin problemas de permisos*).
4. Haz clic en **Implementar**. *(Es posible que Google te pida dar permisos, haz clic en "Revisar permisos", elige tu cuenta, ve a "Configuración avanzada" y dale a "Ir a proyecto (no seguro)", luego "Permitir".)*
5. ¡Listo! Te aparecerá un enlace que dice **URL de la aplicación web**. Cópialo.

---

## 🟢 PASO 3: Conectar la Web con la URL

1. Ve a tu archivo `index.html` (que ahora tiene el código moderno) y ábrelo con un editor de código o el Bloc de Notas.
2. Ve casi al final del archivo, a la línea donde dice:
   ```javascript
   const GOOGLE_SCRIPT_URL = "URL_DE_TU_SCRIPT_DE_GOOGLE_AQUI";
   ```
3. Reemplaza `"URL_DE_TU_SCRIPT_DE_GOOGLE_AQUI"` por la URL larga que copiaste en el Paso 2 (asegúrate de mantener las comillas).
4. Guarda el archivo. ¡Ya está conectado a tu Google Drive!

---

## 🟢 PASO 4: Subir a GitHub y Tenerlo en Internet Gratis

Para que el sistema se vea como una página web real (ej. `tu-nombre.github.io/catequesis`), debes subirlo a GitHub Pages:

1. Crea una cuenta gratuita en [GitHub](https://github.com/).
2. Arriba a la derecha presiona el botón **+** y selecciona **New repository** (Nuevo repositorio).
3. Ponle de nombre `sistema-catequesis`.
4. Elige que sea **Public** y haz clic en **Create repository**.
5. En la página que se abre, busca la opción que dice **"uploading an existing file"** (subir archivo existente).
6. Arrastra ahí tu archivo `index.html` modificado (y tu hoja de instrucciones si quieres). Haz clic en el botón verde **Commit changes**.
7. Una vez subido, ve a la pestaña **Settings** (Configuración) de ese repositorio.
8. En el menú izquierdo, busca **Pages** (Páginas).
9. En la sección "Build and deployment", donde dice "Branch", cambia de `None` a `main` y guarda.
10. ¡Y listo! En un par de minutos, en esa misma sección de Pages te aparecerá un enlace con tu página en vivo, lista para usar desde tu celular o computadora. Todo lo que guardes ahí se irá a tu Google Sheets en Drive.

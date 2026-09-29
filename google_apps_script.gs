// Archivo: google_apps_script.gs
// Pega este código en el editor de Google Apps Script

const SHEET_NAME = "Datos_Catequesis";

// Función para obtener los datos (Método GET)
function doGet(e) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  // Si la hoja no existe, la creamos
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    // Inicializamos con un JSON vacío
    sheet.getRange("A1").setValue("{}");
  }
  
  var jsonString = sheet.getRange("A1").getValue();
  var parsed = {};
  
  if (jsonString) {
    try {
      parsed = JSON.parse(jsonString);
    } catch(e) {
      parsed = {};
    }
  }

  return ContentService.createTextOutput(JSON.stringify(parsed))
    .setMimeType(ContentService.MimeType.JSON);
}

// Función para guardar los datos (Método POST)
function doPost(e) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }
  
  try {
    var data = JSON.parse(e.postData.contents);
    var jsonString = JSON.stringify(data);
    
    // Guardamos todo el JSON en la celda A1 para mantener la estructura compleja
    sheet.getRange("A1").setValue(jsonString);
    
    return ContentService.createTextOutput(JSON.stringify({status: "success", message: "Datos guardados correctamente"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

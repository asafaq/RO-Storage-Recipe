function onEdit(e) {
  if (!e) return;  // Prevent errors when run manually

  const sheet = e.source.getActiveSheet();
  const cell = e.range;
  const col = cell.getColumn();
  const row = cell.getRow();
  const value = cell.getValue();

  // Source data columns: I, K, M, O, Q, S, U, W
  const dataColumns = [9, 11, 13, 15, 17, 19, 21, 23];

  // Mapping: source → target
  const notePairs = {
    9: 25,   // I → Y
    11: 27,  // K → AA
    13: 29,  // M → AC
    15: 31,  // O → AE
    17: 33,  // Q → AG
    19: 35,  // S → AI
    21: 37,  // U → AK
    23: 39   // W → AM
  };

  // Only run on the source data columns
  if (!dataColumns.includes(col)) return;

  // Get ID and Name columns
  const idRange = sheet.getRange("B:B").getValues().flat();
  const nameRange = sheet.getRange("C:C").getValues().flat();

  // Find matching ID
  const index = idRange.indexOf(value);

  let noteText = "";
  if (index > -1) {
    noteText = nameRange[index];
    cell.setNote(noteText);  // Write note to the edited cell
  } else {
    cell.setNote("");        // Clear note if no match
  }

  // Copy the note to the paired target column
  const targetCol = notePairs[col];
  if (targetCol) {
    const targetCell = sheet.getRange(row, targetCol);
    targetCell.setNote(noteText);
  }
}

function addNotesToExistingData() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();

  // Source data columns: I, K, M, O, Q, S, U, W
  const dataColumns = [9, 11, 13, 15, 17, 19, 21, 23];

  // Mapping: source → target
  const notePairs = {
    9: 25,   // I → Y
    11: 27,  // K → AA
    13: 29,  // M → AC
    15: 31,  // O → AE
    17: 33,  // Q → AG
    19: 35,  // S → AI
    21: 37,  // U → AK
    23: 39   // W → AM
  };

  // Get ID and Name columns
  const idRange = sheet.getRange("B:B").getValues().flat();
  const nameRange = sheet.getRange("C:C").getValues().flat();

  // Loop through each source column
  dataColumns.forEach(col => {
    const values = sheet.getRange(1, col, lastRow).getValues();

    for (let r = 0; r < lastRow; r++) {
      const value = values[r][0];
      const row = r + 1;

      let noteText = "";
      const index = idRange.indexOf(value);

      if (index > -1) {
        noteText = nameRange[index];
      }

      // Write note to source cell
      sheet.getRange(row, col).setNote(noteText);

      // Also write note to paired target column
      const targetCol = notePairs[col];
      if (targetCol) {
        sheet.getRange(row, targetCol).setNote(noteText);
      }
    }
  });
}


function copyNotesToTargetColumns() {
  const sheet = SpreadsheetApp.getActiveSheet();

  // Source → Target column pairs
  const pairs = [
    {from: 9,  to: 25},  // I → Y
    {from: 11, to: 27},  // K → AA
    {from: 13, to: 29},  // M → AC
    {from: 15, to: 31},  // O → AE
    {from: 17, to: 33},  // Q → AG
    {from: 19, to: 35},  // S → AI
    {from: 21, to: 37},  // U → AK
    {from: 23, to: 39}   // W → AM
  ];

  const lastRow = sheet.getLastRow();

  pairs.forEach(pair => {
    const fromNotes = sheet.getRange(1, pair.from, lastRow).getNotes();
    const targetRange = sheet.getRange(1, pair.to, lastRow);
    targetRange.setNotes(fromNotes);
  });
}
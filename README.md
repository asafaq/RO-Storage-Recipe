Guide for new users: (drag this note to resize)

"ro storage.xlsx" was made in google sheets and is designed to be uploaded and used there. The design is 3 sections for clearer display,, all compacted to one sheet, therefore, please refer to the 3 different parts of the sheet as storage, recipes, formulas. If you wish to remake it as three different sheets for your conveniece it's possible to simply cut and paste the columns with minor changes in the code.

Columns A:D are the storage, fill them yourself with your stocks and value. Those 4 cells in every row are the reference for the rest of the document. Take notice Zeny is referred to as item ID 1, with value 1. 
* You may sort them by selecting column A:D whole, Menu\ Data \ Sort Range \ Advanced range sorting options \ and select "Data has header row" and select "sort by: ID".

Columns E:W are the recipes (Columns F:G are formulas, when adding new rows, you have to fill them into them), you fill them yourself in the Quantity + ID columns, and you'll get a progress based on your stocks value that you've filled in storage columns. Every line represent a recipe, and it has 8 cell couples for Qn+ID, if your recipe contains more than 8 items, simply make another line for it.
* The ID cells are monitored for edits and will be assigned a note with the item's name according to storage. Without a correctly set storage line for the item, there will be no value or name to display.
* In the absence of item names in notes for ID cells, or have the storage been filled after filling the recipe you may run a script to refill a ID cells, by running Extentions \ App scripts \ Find the dropdown menu \ Select function addNotesToExistingData() \ Click [Run] \  The Execution log will show Started + Completed and the note names would appear on all cells.
*You may extend them downwards to fill as many more rows as you wish to fill more recipes, but you may not add new columns.
*If you wish to add more recipe parts to fill you would have to rewrite the code.
*Do not move any column as they are hard coded.
* You may freely add new rows between recipes to keep order, just drag the lines of code to fill the new rows, the storage rows will fill when you resort the data as mentioned.

Columns X:AM are the formulas to support columns F:G, you have to fill them into new lines. They also display the progress for each individual item in the list, and it's total value.
* You may extend them downwards to fill as many more rows as you wish to fill more recipes, but you may not add new columns.
* The ID cells are watched and will be assigned a note with the item's name according to storage, they display the full zeny value of one unit in the recipe each.
* Do not move any column as they are hard coded.
* For easier scrolling through columns, you may freeze column E making it visable anywhere in the sheet, and hide A:D if they take too much visable space. 

This document has an extension app script named "On edit ID tags" containing js code responsible with tagging ID cells with the item's name, if it's missing, contact me for the code.

# RO-Storage-Recipe
Guide for new users: 

The design should have been 3 sheets for clearer display, and infinite scaling, but this design is compaq and there is no need for more scaling atm, therefore, please refer to the 3 different parts of the sheet as storage, recipes, formulas. If you wish to remake it as three different sheets for your conveniece it's possible to simply cut and paste the columns with minor changes in the code.

Columns A:D are the storage, fill them yourself with your stocks and value. Those 4 cells in every row are the reference to the rest of the document. Take notice Zeny is referred to as item ID 1, with value 1. 
You may sort them by selecting column A:D whole, Menu\ Data \ Sort Range \ Advanced range sorting options \ and select "Data has header row" and select "sort by: ID"

Columns E:W are the recipes, you fill them yourself in the Quantity + ID columns, and you'll get a progress based on your stocks value that you've filled in storage columns.
* The ID cells are watched and will be assigned a note with the item's name according to storage. Without a correctly set storage line for the item, there will be no value or name to display.
* In the absence of item names in notes for ID cells, or have the storage been filled after filling the recipe you may run a script to refill a ID cells, by running Extentions \ App scripts \ Find the dropdown menu \ Select function addNotesToExistingData() \ Click [Run] \  The Execution log will show Started + Completed and the note names would appear on all cells.
*You may extend them downwards to fill as many more rows as you wish to fill more recipes, but you may not add new columns.
*If you wish to add more recipe parts to fill you would have to rewrite the code.
*Do not move any column as they are hard coded.

Columns X:AM are the formulas to support columns F:G. They also display the progress for each individual item in the list, and it's total value.
* You may extend them downwards to fill as many more rows as you wish to fill more recipes, but you may not add new columns.
* The ID cells are watched and will be assigned a note with the item's name according to storage, they display the full zeny value of one unit in the recipe each.
*Do not move any column as they are hard coded.

This document has an extension app script named" On edit ID tags" containing js code responsible with tagging ID cells with the item's name, if it's missing, contact me for the code.

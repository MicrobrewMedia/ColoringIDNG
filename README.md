## Installation
### Script Files
- Copy .JSX Files (ColorSheets, import-rgb, SwatchSort) to:
  -  __MAC__  /Applications/Adobe Indesign/Scipts/
  - __PC__  C://Programs/Adobe Indesign/Scripts/

### Font Install
1. Unzip RequiredFonts.zip
2. Double Click on Fonts and Install to Mac or PC

### File Setup
1. Open Master Sheet File (MasterSheetTemplate.indd)
2. Setup Data Merge with Excel Spreadsheet ( MUST BE A CSV in Format of ExampleDatamergeSource.csv)
-- Previous Excel Files had a column of __Garmet__ instead of __Garment__
3. Import the Swatch Group (NG Swatch Group)
__Should not need to do this as it is in Master File already__
- Choose New Color Swatch from the Swatches panel menu.
- Choose Other Library from the Color Mode list, and then select the file from which you want to import swatches.
- Click Open.
- Select the swatches you want import
- Click OK.

### Data Merge + Setup for Processing
1. Execute Data Merge
2. Upon Finish, Save Document
3. Select All Pages, Right Click and hit Apply Master Overrides (To Gain Access to all Layers)
4. Save Document

### Process Sheets
1. Open Scripts Panel (Windows --> Utilities --> Scripts)
2. Double Click ColorSheets.jsx
3. Select Page Range you like to run (Defaults to First Page and Last Page)
4. Hit Okay and Wait

#### Notes
It took about 30 minutes to process around 850-900 pages ~ 2.5 seconds per page on the highest end 2016 Macbook Pro



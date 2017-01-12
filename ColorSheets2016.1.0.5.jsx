﻿// Product: NIKE Golf RGB Color Assignment// Created by Matthew Hauth, PGA & Microbrew Media, LLC// Web: www.MicrobrewMedia.com// Version: 1.0.5// Description: Run via InDesign CC after Swatches have been imported + DataMerge has been completed on Master Template// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR// PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER// DEALINGS IN THE SOFTWARE.#target indesignmain(); // Run the Functionfunction main() {    var theDoc = app.activeDocument; // active doc    var totalPages = theDoc.pages.length;    var thePage = theDoc.pages.item(0); // first page    var startingPage = prompt("Enter Start Page (From 1 to " + totalPages + "): ", "1");    var endingPage = prompt("Enter End Page (From 1 to " + totalPages + "): ", totalPages);    var endingPage = endingPage - 1;    var actualStartPage = startingPage - 1;    var actualPage = actualStartPage;    var theLayers = theDoc.layers;    var layersTotal = theLayers.length;    var startLayer = 0; // really the first layers theLayers.item(0)    var endLayer = layersTotal;    var currentLayer = theDoc.activeLayer;    var theSwatches = theDoc.swatches;    var cSwatches = theSwatches.everyItem().name.join("@$@");    app.activeWindow.activePage = app.activeDocument.pages.item(actualStartPage); // Set Active Page    theDoc.activeLayer = theDoc.layers[0]; // Set to Bottom Layer 0    function cleanItem(text) {        ttrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Clear a few Unicode Characters                    text = text.replace(ttrim, ''); // Adjust PartOfName without Unicode Characters        return text;    }    function findSwatch(PartOfName) {        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Clear a few Unicode Characters        PartOfName = PartOfName.replace(rtrim, ''); // Adjust PartOfName without Unicode Characters        var cIndex = cSwatches.search(PartOfName),            cSwatch;        if (cIndex == -1) return false;        cIndex = cSwatches.slice(0, cIndex).split("@$@").length - 1;        return cIndex;    }    function testAndRemoveObjects(items) {        for (var i = items.length - 1; i >= 0; i--) {            if (!items[i].isValid) {                // Nothing to Do                $.writeln("Do nothing");            } else {                $.writeln(i + " Exist. NOW TO DELETE.");                items[i].remove();            }           }    }    function removePrimary2() {        var myP2Objects = [            thePage.textFrames.item("Primary 2 Color Code"),            thePage.textFrames.item("Primary 2 Title"),            thePage.ovals.itemByName("Primary 2 Shape")        ];        testAndRemoveObjects(myP2Objects);    }    function removeSecondary2() {        var myS2Objects = [            thePage.textFrames.item("Secondary 2 Color Code"),            thePage.textFrames.item("Secondary 2 Title"),            thePage.ovals.itemByName("Secondary 2 Shape")        ];        testAndRemoveObjects(myS2Objects);    }    function removeAccent2() {        var myA2Objects = [            thePage.textFrames.item("Accent 2 Color Code"),            thePage.textFrames.item("Accent 2 Title"),            thePage.ovals.itemByName("Accent 2 Shape")        ];        testAndRemoveObjects(myA2Objects);    }    function removeMatchGarment2() {        var myMG2Objects = [            thePage.textFrames.item("Match to Garment 2 Color Code"),            thePage.textFrames.item("Match to Garment 2 Title"),            thePage.ovals.itemByName("Match to Garment 2 Shape")        ];        testAndRemoveObjects(myMG2Objects);    }    function removeLightTonal2() {        var myL2Objects = [            thePage.textFrames.item("Light Tonal 2 Color Code"),            thePage.textFrames.item("Light Tonal 2 Title"),            thePage.ovals.itemByName("Light Tonal 2 Shape")        ];        testAndRemoveObjects(myL2Objects);    }    function removeDarkTonal2() {        var myD2Objects = [            thePage.textFrames.item("Dark Tonal 2 Color Code"),            thePage.textFrames.item("Dark Tonal 2 Title"),            thePage.ovals.itemByName("Dark Tonal 2 Shape")        ];        testAndRemoveObjects(myD2Objects);    }    function removeNeutral2() {        var myN2Objects = [            thePage.textFrames.item("Neutral 2 Color Code"),            thePage.textFrames.item("Neutral 2 Title"),            thePage.ovals.itemByName("Neutral 2 Shape")        ];        testAndRemoveObjects(myN2Objects);    }    function removeGreen2() {        var myG2Objects = [            thePage.textFrames.item("Green 2 Color Code"),            thePage.textFrames.item("Green 2 Title"),            thePage.ovals.itemByName("Green 2 Shape")        ];        testAndRemoveObjects(myG2Objects);    }    function removeMatchSwoosh2() {        var myMS2Objects = [            thePage.textFrames.item("Match to Swoosh 2 Color Code"),            thePage.textFrames.item("Match to Swoosh 2 Title"),            thePage.ovals.itemByName("Match to Swoosh 2 Shape")        ];        testAndRemoveObjects(myMS2Objects);    }    for (var p = actualStartPage; p <= endingPage; p++) {        thePage = app.activeDocument.pages.item(p);        var primaryColorCode = thePage.textFrames.item("Primary Color Code").contents.toLowerCase();        // $.writeln("Primary Code: " + primaryColorCode);        var secondaryColorCode = thePage.textFrames.item("Secondary Color Code").contents.toLowerCase();        // $.writeln("Secondary Code: " + secondaryColorCode);        var accentColorCode = thePage.textFrames.item("Accent Color Code").contents.toLowerCase();        // $.writeln("Accent Code: " + accentColorCode);        var matchGarmentColorCode = thePage.textFrames.item("Match to Garment Color Code").contents.toLowerCase();        // $.writeln("Match to Garment Code: " + matchGarmentColorCode);        var lightTonalColorCode = thePage.textFrames.item("Light Tonal Color Code").contents.toLowerCase();        // $.writeln("Light Tonal Code: " + lightTonalColorCode);        var darkTonalColorCode = thePage.textFrames.item("Dark Tonal Color Code").contents.toLowerCase();        // $.writeln("Dark Tonal Code: " + darkTonalColorCode);        var neutralColorCode = thePage.textFrames.item("Neutral Color Code").contents.toLowerCase();        // $.writeln("Neutral Code: " + neutralColorCode);        var greenColorCode = thePage.textFrames.item("Green Color Code").contents.toLowerCase();        // $.writeln("Green Code: " + greenColorCode);        var matchSwooshColorCode = thePage.textFrames.item("Match to Swoosh Color Code").contents.toLowerCase();        // $.writeln("Match to Swoosh Code: " + matchSwooshColorCode);        // Two Toned Shirt        if (app.activeDocument.pages.item(p).isValid == true) {            app.activeWindow.activePage = app.activeDocument.pages.item(p);        }        // Let the real fun begin        $.writeln("Color Coordinate : " + thePage.textFrames.item("Color Coordinate").isValid);        if (thePage.textFrames.item("Color Coordinate").isValid) {            var palette2 = thePage.textFrames.item("Color Coordinate").contents;            palette2Clean = cleanItem(palette2);            $.writeln("Palette 2 Clean length: " + palette2Clean.length);            if (palette2Clean.length < 1) {                // Remove Palette 2 Stuff                removePrimary2();                removeSecondary2();                removeAccent2();                removeMatchGarment2()                removeLightTonal2();                removeDarkTonal2();                removeNeutral2();                removeGreen2();                removeMatchSwoosh2();            } else {                var primary2ColorCode = thePage.textFrames.item("Primary 2 Color Code").contents.toLowerCase();                var secondary2ColorCode = thePage.textFrames.item("Secondary 2 Color Code").contents.toLowerCase();                var accent2ColorCode = thePage.textFrames.item("Accent 2 Color Code").contents.toLowerCase();                var matchGarment2ColorCode = thePage.textFrames.item("Match to Garment 2 Color Code").contents.toLowerCase();                var lightTonal2ColorCode = thePage.textFrames.item("Light Tonal 2 Color Code").contents.toLowerCase();                var darkTonal2ColorCode = thePage.textFrames.item("Dark Tonal 2 Color Code").contents.toLowerCase();                var neutral2ColorCode = thePage.textFrames.item("Neutral 2 Color Code").contents.toLowerCase();                var green2ColorCode = thePage.textFrames.item("Green 2 Color Code").contents.toLowerCase();                var matchSwoosh2ColorCode = thePage.textFrames.item("Match to Swoosh 2 Color Code").contents.toLowerCase();            }        }        // Let the real fun begin        for (var i = startLayer; i < endLayer; i++) {            theDoc.activeLayer = theDoc.layers[i];            currentLayer = theDoc.activeLayer;            switch (currentLayer.name) {                case "Primary":                    if (primaryColorCode != "" && primaryColorCode.length >= 5) {                        primarySwatch = findSwatch(primaryColorCode);                        if (primarySwatch === 'undefined' || primarySwatch === false) {} else {                            thePage.ovals.itemByName("Primary Shape").fillColor = theDoc.swatches[primarySwatch];                        }                    }                case "Secondary":                    if (secondaryColorCode != "" && secondaryColorCode.length >= 5) {                        secondarySwatch = findSwatch(secondaryColorCode);                        if (secondarySwatch === 'undefined' || secondarySwatch === false) {} else {                            thePage.ovals.itemByName("Secondary Shape").fillColor = theDoc.swatches[secondarySwatch];                        }                    }                case "Accent":                    if (accentColorCode != "" && accentColorCode.length >= 5) {                        accentSwatch = findSwatch(accentColorCode);                        if (accentSwatch === 'undefined' || accentSwatch === false) {} else {                            thePage.ovals.itemByName("Accent Shape").fillColor = theDoc.swatches[accentSwatch];                        }                    }                case "Match to Garment":                    if (matchGarmentColorCode != "" && matchGarmentColorCode.length >= 5) {                        matchToGarmentSwatch = findSwatch(matchGarmentColorCode);                        if (matchToGarmentSwatch === 'undefined' || matchToGarmentSwatch === false) {} else {                            thePage.ovals.itemByName("Match to Garment Shape").fillColor = theDoc.swatches[matchToGarmentSwatch];                            thePage.rectangles.itemByName("Match to Garment Square").fillColor = theDoc.swatches[matchToGarmentSwatch];                        }                    }                case "Light Tonal":                    if (lightTonalColorCode != "" && lightTonalColorCode.length >= 5) {                        lightTonalSwatch = findSwatch(lightTonalColorCode);                        if (darkTonalSwatch === 'undefined' || darkTonalSwatch === false) {} else {                            thePage.ovals.itemByName("Light Tonal Shape").fillColor = theDoc.swatches[lightTonalSwatch];                        }                    }                case "Dark Tonal":                    if (darkTonalColorCode != "" && darkTonalColorCode.length >= 5) {                        darkTonalSwatch = findSwatch(darkTonalColorCode);                        if (darkTonalSwatch === 'undefined' || darkTonalSwatch === false) {} else {                            thePage.ovals.itemByName("Dark Tonal Shape").fillColor = theDoc.swatches[darkTonalSwatch];                        }                    }                case "Neutral":                    if (neutralColorCode != "" && neutralColorCode.length >= 5) {                        neutralSwatch = findSwatch(neutralColorCode);                        if (neutralSwatch === 'undefined' || neutralSwatch === false) {} else {                            thePage.ovals.itemByName("Neutral Shape").fillColor = theDoc.swatches[neutralSwatch];                        }                    }                case "Green":                    if (greenColorCode != "" && greenColorCode.length >= 5) {                        greenSwatch = findSwatch(greenColorCode);                        if (greenSwatch === 'undefined' || greenSwatch === false) {} else {                            thePage.ovals.itemByName("Green Shape").fillColor = theDoc.swatches[greenSwatch];                        }                    }                case "Match to Swoosh":                    if (matchSwooshColorCode != "" && matchSwooshColorCode.length >= 5) {                        matchToSwooshSwatch = findSwatch(matchSwooshColorCode);                        if (matchToSwooshSwatch === 'undefined' || matchToSwooshSwatch === false) {} else {                            thePage.ovals.itemByName("Match to Swoosh Shape").fillColor = theDoc.swatches[matchToSwooshSwatch];                            thePage.polygons.itemByName("Match to Swoosh Swoosh").fillColor = theDoc.swatches[matchToSwooshSwatch];                        }                    }                case "Main":                    if (thePage.textFrames.item("Primary 2 Color Code").isValid) {                        if (primary2ColorCode != "" && primary2ColorCode.length >= 5) {                            primary2Swatch = findSwatch(primary2ColorCode);                            if (primary2Swatch === 'undefined' || primary2Swatch === false) {} else {                                thePage.ovals.itemByName("Primary 2 Shape").fillColor = theDoc.swatches[primary2Swatch];                            }                        }                    }                    if (thePage.textFrames.item("Secondary 2 Color Code").isValid) {                        if (secondary2ColorCode != "" && secondary2ColorCode.length >= 5) {                            secondary2Swatch = findSwatch(secondary2ColorCode);                            if (secondary2Swatch === 'undefined' || secondary2Swatch === false) {} else {                                thePage.ovals.itemByName("Secondary 2 Shape").fillColor = theDoc.swatches[secondary2Swatch];                            }                        }                    }                    if (thePage.textFrames.item("Accent 2 Color Code").isValid) {                        if (accent2ColorCode != "" && accent2ColorCode.length >= 5) {                            accent2Swatch = findSwatch(accent2ColorCode);                            if (accent2Swatch === 'undefined' || accent2Swatch === false) {} else {                                thePage.ovals.itemByName("Accent 2 Shape").fillColor = theDoc.swatches[accent2Swatch];                            }                        }                    }                    if (thePage.textFrames.item("Match to Garment 2 Color Code").isValid) {                        if (matchGarment2ColorCode != "" && matchGarment2ColorCode.length >= 5) {                            matchToGarment2Swatch = findSwatch(matchGarment2ColorCode);                            if (matchToGarment2Swatch === 'undefined' || matchToGarment2Swatch === false) {} else {                                thePage.ovals.itemByName("Match to Garment 2 Shape").fillColor = theDoc.swatches[matchToGarment2Swatch];                            }                        }                    }                    if (thePage.textFrames.item("Light Tonal 2 Color Code").isValid) {                        if (lightTonal2ColorCode != "" && lightTonal2ColorCode.length >= 5) {                            lightTonal2Swatch = findSwatch(lightTonal2ColorCode);                            if (lightTonal2Swatch === 'undefined' || lightTonal2Swatch === false) {} else {                                thePage.ovals.itemByName("Light Tonal 2 Shape").fillColor = theDoc.swatches[lightTonal2Swatch];                            }                        }                    }                    if (thePage.textFrames.item("Dark Tonal 2 Color Code").isValid) {                        if (darkTonal2ColorCode != "" && darkTonal2ColorCode.length >= 5) {                            darkTonal2Swatch = findSwatch(darkTonal2ColorCode);                            if (darkTonal2Swatch === 'undefined' || darkTonal2Swatch === false) {} else {                                thePage.ovals.itemByName("Dark Tonal 2 Shape").fillColor = theDoc.swatches[darkTonal2Swatch];                            }                        }                    }                    if (thePage.textFrames.item("Neutral 2 Color Code").isValid) {                        if (neutral2ColorCode != "" && neutral2ColorCode.length >= 5) {                            neutral2Swatch = findSwatch(neutral2ColorCode);                            if (neutral2Swatch === 'undefined' || neutral2Swatch === false) {} else {                                thePage.ovals.itemByName("Neutral 2 Shape").fillColor = theDoc.swatches[neutral2Swatch];                            }                        }                    }                    if (thePage.textFrames.item("Green 2 Color Code").isValid) {                        if (green2ColorCode != "" && green2ColorCode.length >= 5) {                            green2Swatch = findSwatch(green2ColorCode);                            if (green2Swatch === 'undefined' || green2Swatch === false) {} else {                                thePage.ovals.itemByName("Green 2 Shape").fillColor = theDoc.swatches[green2Swatch];                            }                        }                    }                    if (thePage.textFrames.item("Match to Swoosh 2 Color Code").isValid) {                        if (matchSwoosh2ColorCode != "" && matchSwoosh2ColorCode.length >= 5) {                            matchToSwoosh2Swatch = findSwatch(matchSwoosh2ColorCode);                            if (matchToSwoosh2Swatch === 'undefined' || matchToSwoosh2Swatch === false) {} else {                                thePage.ovals.itemByName("Match to Swoosh 2 Shape").fillColor = theDoc.swatches[matchToSwoosh2Swatch];                            }                        }                    }            }        }    }}
var $divs = $("div.box");

$('#alphBnt').on('click', function () {
    var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
        return $(a).find("h4").text() > $(b).find("h4").text();
    });
    $("#container").html(alphabeticallyOrderedDivs);
});

$('#numBnt').on('click', function () {
    var numericallyOrderedDivs = $divs.sort(function (a, b) {
        return $(a).find("h6").text() > $(b).find("h6").text();
    });
    $("#container").html(numericallyOrderedDivs);
});

$('#segFontana').on('click', function () {
    var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
        return $(a).find("h5").text() > $(b).find("h5").text();
    });
    $("#container").html(alphabeticallyOrderedDivs);
});

$('#segSava').on('click', function () {
    var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
        return $(a).find("h5").text() < $(b).find("h5").text();
    });
    $("#container").html(alphabeticallyOrderedDivs);
});
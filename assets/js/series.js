function seriesContentOnClick(seriesName) {
    const componentName = "#post-layer-" + seriesName;
    
    if($(componentName).css("display") == "none") {
        $(componentName).css("display", "block");
    } else {
        $(componentName).css("display", "none");
    }
}
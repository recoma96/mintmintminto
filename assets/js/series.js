function seriesContentOnClick(seriesName) {
    const componentName = "#post-layer-" + seriesName;
    
    if($(componentName).css("display") == "none") {
        $(componentName).fadeIn();
    } else {
        $(componentName).fadeOut();
    }
}
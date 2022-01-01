function filterBySeriseName(seriseName) {
    // 시리즈 필터링
   $('.post-summary-item').each((index, elem) => {
        if(seriseName != elem.getAttribute('seriesname'))
            $(elem).css("display", "none");
   });
}
$(document).ready(() => {

    let querySeries = new URLSearchParams(location.search).get("series");
    querySeries = decodeURIComponent(querySeries);

    $('#h1-title').text(querySeries);

    filterBySeriseName(querySeries);
});
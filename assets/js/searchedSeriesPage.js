function filterBySeriseName(seriseName) {
    // 시리즈 필터링
    $('.post-summary-item').each((index, elem) => {
        if(!elem.hasAttribute(`data-${seriseName}`)) {
            $(elem).css("display", "none");
        }
    });
}
$(document).ready(() => {
    const querySeries = getUrlParams().series;
    document.getElementById("h1-title").textContent = querySeries;
    filterBySeriseName(querySeries);
});
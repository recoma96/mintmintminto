function filterByTagname(tagname) {
    // 태그네임 필터링
    $(".post-summary-item").each((index, elem) => {

        if(!elem.hasAttribute(`data-${tagname}`)) {
            $(elem).css("display", "none");
        }
    });
}
$(document).ready(() => {
    const queryTag = decodeURIComponent(getUrlParams().tag);
    $('#h1-title').text(queryTag);
    filterByTagname(queryTag);
});
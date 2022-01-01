function getUrlParams() {
    // url에서 값 구해오기
    var params = {};  
    
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
    	function(str, key, value) { 
        	params[key] = value; 
        }
    );     
    return params; 
}
function space2unicode(target) {
    return target.split(' ').join('%20m');
}
function unicode2space(target) {
    return target.split('%20m').join(' ');
}
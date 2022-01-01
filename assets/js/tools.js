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
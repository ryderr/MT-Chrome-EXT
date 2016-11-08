
function updateCss(css) {


	var usrstyl = document.getElementById("userStyle");
	delete usrstyl;

	style = document.createElement('style');
	style.setAttribute("id", "userStyle");
	if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	} else {
	    style.appendChild(document.createTextNode(css));
	}

	document.getElementsByTagName('head')[0].appendChild(style);
}
var darkTheme = ".hp.column.one .column-inner{background:#37373B!important;}.hp.column.one{background-color:white;}.two .column-inner{width:100%!important;height:100%!important;}ul li div div span span p {color:grey!important;}column-inner{padding-right:30px!important;}.hp.column.two{background:#3c3c42!important;}#gb-page.background-photo-false,.column-inner{background:#3c3c42!important}.sw-content-container1{background:#3d3d46!important}.hp.column.one.true{color:#b1b1b1!important}#gb-footer-outer,#gb-header-outer,#gb-header-outer *{background:#46464c!important}.sw-channel-item a{height:100%}";
var lightTheme = ".hp.column.one .column-inner{background:#e8e7e6!important;}ul li div div span span p {color:rgb(38, 38, 39)!important;}.hp.column.two{background:white!important;}#gb-page.background-photo-false,.column-inner{background:white!important}.sw-content-container1{background:#3d3d46!important}.hp.column.one.true{background:#e8e7e6;color:#b1b1b1!important;}#gb-footer-outer,#gb-header-outer,#gb-header-outer *{background:#113788!important}.sw-channel-item a{height:100%}";

var node = document.createElement("LI");
var textnode = document.createTextNode("Change Theme");
node.appendChild(textnode);
node.className = "sw-channel-item";
node.setAttribute("id", "switchTheme");
node.style = "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');padding: 24px 10px 21px 10px;color:rgb(38,38,39);height:100%;font-family: \"Open Sans\", sans-serif;font-weight:600;";
document.getElementById("channel-navigation").appendChild(node);

console.log("ihkdskfjhk");

var theme = document.getElementById('switchTheme');
var currentTheme = 1; //1 = light; 0 = dark

theme.onclick = function() {
    if (currentTheme) {
    	currentTheme = 0;
    	console.log(currentTheme);
    	updateCss(darkTheme);
    } else {
    	currentTheme = 1;
    	console.log(currentTheme);
    	updateCss(lightTheme);
    };
};

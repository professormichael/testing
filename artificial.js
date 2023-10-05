let now = new Date();
let localtime = now.toString();
let utctime = now.toGMTString();
document.write(“<strong>Local time:</strong> “ 
+ localtime + “<br/>”);
document.write(“<strong>UTC time:</strong> “ + utctime);
document.body.innerHTML = "hello"

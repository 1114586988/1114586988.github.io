var newsT=document.getElementById("newsT");
var flag=document.getElementById("flag");
var newsContainer=document.getElementById("newsContainer");
for(var i=0;i<2;i++){
	var link=newsT.children[i];
	link.onmouseover=linkMouseover;
	link.setAttribute("index",i);
}
function linkMouseover(){
	var offsetLeft=this.offsetLeft;
	animate(flag,offsetLeft -3,30);


for (var i=0,len=newsContainer.children.length; i<len; i++) {
	var div=newsContainer.children[i];
	if(div.className.indexOf("hide")===-1){
		div.className="new-b hide";
	}
}
	var index=parseInt(this.getAttribute("index"));
	newsContainer.children[index].className="new-b";
}
(function(){

names=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i=0; i<names.length ; i++){
 firstletter=names[i].charAt(0).toLowerCase();
 
if (firstletter ==="j"){

   byespeaker.speaker(names[i]);
} 
else{


	hellospeaker.speaker(names[i]);
}


}



})();

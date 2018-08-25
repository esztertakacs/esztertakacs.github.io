// Ha megnyomom a gombot, jelenítse meg az új posztot.
$("#elkuld").on("click", function(){
  let datum=$("#datum").val();
  let cim=$("#cim").val();
  let szoveg=$("#blogszoveg").val();
$("body").append("<div class='regibejegyzes'>" + 
datum + "<br>"+ cim + "<br>"+ szoveg + "<br>"+ 
"<button name='delete' type='submit' class='piros pirosit'>TÖRÖL</button>"
+ "</div>");
});

//Ha megnyomom a Küldés gombot, mentse el Firebase-re.
let postid=0;
$("#elkuld").on("click", function(){
  postid=postid+1;
  let datum=$("#datum").val();
  let cim=$("#cim").val();
  let szoveg=$("#blogszoveg").val();
  let adatok={datumvaltozo:datum, cimvaltozo:cim, szovegvaltozo:szoveg};
fb.ref("sorszam/"+postid).set(adatok);
});

//Adat letöltés. Once=amint rendelkezésünkre áll az adat, akkor...adataim: objektum, amiben benne lesz az adat
//fb.ref("posts").once("value").then(adataim=>{console.log(adataim.val())})
//Adat betöltés vissza a blogba (amikor megnyitom újra). Élesben:

//fb.ref("sorszam").once("value").then(adataim=>{let savedPosts=adataim.val());

//Töltse vissza a meglévő posztokat.
fb.ref("sorszam").once('value').then(data => {
  let savedPosts = data.val();
savedPosts.forEach(element => {
  $("body").append("<div class='regibejegyzes'>" + 
element["datumvaltozo"] + "<br>"+ element["cimvaltozo"] + "<br>"+ element["szovegvaltozo"] + "<br>"+ 
"<button name='delete' type='submit' class='piros pirosit'>TÖRÖL</button>"
+ "</div>");
});
});



//Törlés gomb.
//$("body").on("click", (event) => {
//  $(event.target).css("text-decoration-line", "line-through");
//});
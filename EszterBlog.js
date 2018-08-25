let path = "posts/1";
let dataToSave = {
  title: "My first saved blog post",
  text: "Some hilarious content, which proves how awesome I am."
};

///adatot feltölteni
fb.ref("users/1").set({name:"Levi", email:"levi@greenfoxacademy.com"});
fb.ref(path).set(dataToSave);

//adat letöltés. Once=amint rendelkezésünkre álll az adat, akkor...adataim: objektum, amiben benne lesz az adat
fb.ref("posts").once("value").then(adataim=>{console.log(adataim.val())})
//élesben:
fb.ref("posts").once("value").then(adataim=>{let savedPosts=adataim.val();
});
let text = "Extravaganza"
console.log(text[8], text[9], text[10], text[11])


const b ="eat"
const food=`The quick fox jumped ${b} the lazy dog`
console.log(food)


const story ="The  quick fox jumped on the lazy dog"
const quick = (story.match(/the/g)||[]).length;
const fox=(story.match(/brown/g)||[]).lenght;
console.log(quick);
console.log(fox);


const string1="Th pupils are reading in the library";
const library=string1.search("are");
console.log(library);
const string2="The child was sitting on the table before it fell"
const child=string2.search("sitting");
console.log(child);


const huge="wonderful"
const huger=huge.toUpperCase()
console.log(huger)
const less="amazing"
const lesser=less.toLowerCase()
console.assert(lesser)
const tiny="BEneath"
const tiner=tiny.toLowerCase()
console.log(tiner)
const title="A wonderful world"
const title2=title.toLocaleUpperCase()
console.log(title2)








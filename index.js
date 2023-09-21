import langs from "langs";
import { franc } from "franc";
const input  = process.argv[2];
const langcode = franc(input);
try{
    const language = langs.where("3",langcode);
    console.log(language.name);
}
catch(err){
    console.log("sorry there was ans error try with more words")
}

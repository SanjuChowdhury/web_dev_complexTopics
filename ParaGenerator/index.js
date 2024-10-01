const container=document.getElementsByClassName("container");
const input=document.getElementsByClassName("inputbox");


const generateWord=()=>{
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let word="";
    
        for(let j=0;j<(Math.random()*(letters.length-1)).toFixed(0);j++){
            // 
            
            word=word+letters[(Math.random()*(letters.length-1)).toFixed(0)]
        }

    
        return word;
}



const generatePara=()=>{
    
    const noOfWords=Number(input[0].value);
    const para=document.createElement("p");
    para.setAttribute("class","paras");
    let generatedText='';
    for(i=0;i<noOfWords;i++){
        generatedText=generatedText+" "+generateWord();
    }
    
    para.innerText=generatedText;
    
     container[0].append(para);

    
}
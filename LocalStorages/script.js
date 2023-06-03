const inputname=document.getElementById("name")
const inputage=document.getElementById("age")
const inputbtn=document.getElementById("btn")
const output=document.getElementById("output")

inputbtn.onclick=function(){


    const key=inputname.value
    const value=inputage.value


    if(key && value){
        localStorage.setItem(key,value)
        location.reload()
    }


    
}

for(i=0;i<localStorage.length;i++){
    const k=localStorage.key(i)
    const v=localStorage.getItem(k)
    output.innerHTML +=`${k} : ${v} <br/>`

}


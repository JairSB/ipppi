

proc.addEventListener('click',e=>{
    e.preventDefault()
    let cep =document.getElementById("cep");
let url=`https://viacep.com.br/ws/${cep.value}/json/`
    fetch(url).then(retono=>retono.json())
    .then(dados=>{
        if(dados.erro){
            alert('ERROOOOOU')
        }else{
            for(const key in dados){
                document.getElementById(key).value= dados[key];
            }
        }
    })

})
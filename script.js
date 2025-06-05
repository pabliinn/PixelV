let menu = document.getElementById("menu")
let iconesbarras = document.getElementById("icone-barras")
let iconex = document.getElementById("icone-x")

function abrefechamenu(){

//se o menu estiver fechado
if(menu.classList.contains("menu-fechado")){
    //abrir o menu
    menu.classList.remove("menu-fechado")

    //mostra icone x
    iconex.style.display = "inline"

    //esconder icone de barras
    iconesbarras.style.display = "none"


}
//senão
else{
     //fechar menu
     menu.classList.add("menu-fechado")
        
    //esconder icone x
    iconex.style.display = "none"

    //mostrar icone barras 
    iconesbarras.style.display = "inline"

}


}

onresize = () => {
    menu.classList.remove("menu-fechado")

    //mostrar icone
    iconex.style.display = "inline"

    iconesbarras.style.display = "none"
    
}

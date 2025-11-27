function Darkmode(){
    document.body.classList.toggle("darkBody");
    document.querySelector(".backBtnHome").classList.toggle("backBtnHomeDark");
    document.querySelector(".cabecario").classList.toggle("cabecarioDark");
    document.querySelector(".backBtnDark").classList.toggle("backBtnDarkMode");
}

function mod1(){
    mod = document.getElementById("modArquivo")
    mod.show();
}

function Closemod1(){
    mod = document.getElementById("modArquivo")
    mod.close();
}

function mod2(){
    mod = document.getElementById("modInternet")
    mod.show();
}

function Closemod2(){
    mod = document.getElementById("modInternet")
    mod.close();
}

document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typing", {
    strings: ["Este site foi inspirado no visual clássico do Microsoft Windows XP.","Contato (31) 98443-5711, arhurdbr7@gmail.com"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
});

function mascara_telefone (){
          
    var tel = document.getElementById("telefone").value
    console.log(tel)
    tel=tel.slice(0,14)
    console.log(tel)
    document.getElementById("telefone").value=tel
    tel=document.getElementById("telefone").value.slice(0,10)
    console.log(tel)
           
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0]!="(")
    {
        if(tel_formatado[0]!=undefined)
        {
            document.getElementById("telefone").value="("+tel_formatado[0];
        }
    }

    if (tel_formatado[3]!=")"){
        if(tel_formatado[3]!=undefined)
            {
                document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
            }
    }

    if (tel_formatado[9]!="-")
        {
            if(tel_formatado[9]!=undefined)
            {
                document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
            }
        }
}

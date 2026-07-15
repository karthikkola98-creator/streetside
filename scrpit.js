/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Alex+Brush&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Montserrat',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow-x:hidden;
    background:#111;
}

/* Background */

.background{
    position:fixed;
    inset:0;
    background:url("assets/background.jpg") center center/cover no-repeat;
    filter:blur(8px);
    transform:scale(1.1);
    z-index:-3;
}

.overlay{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.35);
    z-index:-2;
}

/* Center */

.container{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:40px 20px;
}

/* Glass Card */

.glass-card{

    width:100%;
    max-width:420px;

    backdrop-filter:blur(18px);
    -webkit-backdrop-filter:blur(18px);

    background:rgba(255,255,255,.10);

    border:1px solid rgba(255,255,255,.25);

    border-radius:35px;

    padding:40px 30px;

    box-shadow:
    0 20px 60px rgba(0,0,0,.45);

    text-align:center;
}

/* Logo */

.logo img{
    width:110px;
    margin-bottom:20px;
}

.logo h1{
    font-size:40px;
    font-weight:800;
    color:#000;
    letter-spacing:2px;
}

.logo p{

    color:#cfa84a;

    margin-top:10px;

    letter-spacing:4px;

    font-size:14px;

    font-weight:600;
}

.logo span{

display:block;

margin-top:18px;

font-family:'Alex Brush',cursive;

font-size:30px;

color:#222;

}

/* Social */

.social{

margin-top:35px;

display:flex;

justify-content:center;

gap:18px;

}

.social a{

width:58px;

height:58px;

display:flex;

justify-content:center;

align-items:center;

border-radius:50%;

background:#111;

color:#d6ad48;

font-size:22px;

text-decoration:none;

transition:.35s;

box-shadow:0 10px 25px rgba(0,0,0,.25);

}

.social a:hover{

transform:translateY(-6px);

background:#d6ad48;

color:#111;

}

/* Buttons */

.buttons{

margin-top:40px;

display:flex;

flex-direction:column;

gap:18px;

}

.btn{

height:70px;

border-radius:18px;

background:#111;

display:flex;

align-items:center;

padding:0 28px;

color:#fff;

text-decoration:none;

font-weight:600;

letter-spacing:1px;

transition:.35s;

border:1px solid rgba(212,170,63,.5);

}

.btn i{

width:50px;

font-size:22px;

color:#d6ad48;

}

.btn span{

flex:1;

text-align:center;

}

.btn:hover{

transform:translateY(-4px);

background:#d6ad48;

color:#111;

}

.btn:hover i{

color:#111;

}

/* Desktop */

@media(min-width:992px){

.glass-card{

max-width:470px;

padding:50px;

}

.logo h1{

font-size:48px;

}

}

/* Mobile */

@media(max-width:600px){

.glass-card{

padding:30px 20px;

border-radius:28px;

}

.logo img{

width:90px;

}

.logo h1{

font-size:30px;

}

.logo span{

font-size:22px;

}

.social a{

width:50px;

height:50px;

font-size:20px;

}

.btn{

height:60px;

}

}

function toggleContacts(event){
    event.preventDefault();

    const box = document.getElementById("contactBox");

    if(box.style.display === "block"){
        box.style.display = "none";
    }else{
        box.style.display = "block";
    }
}
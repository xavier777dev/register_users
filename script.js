const get_data_login = (correo,password) => {
    let data = {
        correo: correo,
        password: password
    }
    return data;
}

const post = (url,datos)=>{
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(datos), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data =>console.log(data))
}

let btn_register = document.getElementById("btn_register");
let btn_modal_login = document.getElementById("btn_modal_login");
let btn_modal_registro = document.getElementById("btn_modal_registro");
let modal_registro = document.getElementById("modal_registro");
let modal_login = document.getElementById("modal_login");
   
btn_register.addEventListener("click", ()=>{
    console.log("holaa");
    let email =document.getElementById("login_email").value;
    let password =document.getElementById("login_password").value;
    post("login.php",get_data_login(email,password))
});


btn_modal_registro.addEventListener("click", ()=>{
    modal_registro.style = "display: flex";
    modal_login.style = "display: none";
})
btn_modal_login.addEventListener("click", ()=>{
    modal_login.style = "display: flex";
    modal_registro.style = "display: none";
})




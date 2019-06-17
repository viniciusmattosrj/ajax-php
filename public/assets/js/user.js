window.onload = function(){

    var btn_users = document.querySelector("#btn-users");

    var xhttp = new XMLHttpRequest();

    btn_users.onclick = function () { 

        xhttp.onreadystatechange = function(){

            console.log(xhttp.readyState);

            if (this.readyState = 4 && this.status == 200) { 
                console.log(this.responseText);
            }
        }

        console.log('veio depois do onready');

        /* 
            1. O true signigica que estou trabalhando com uma requisição assincrona 
            2. Ele é um callback da function declarado na linha 7
        */
        xhttp.open('GET', 'ajax/user.php', true);
    
        xhttp.send();
    }

}
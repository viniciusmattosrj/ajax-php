window.onload = function () {

    var btn_users = document.querySelector("#btn-users");

    var div_users = document.querySelector("#div-users");

    var xhttp = new XMLHttpRequest();

    btn_users.onclick = function () {

        xhttp.onreadystatechange = function () {

            //console.log(xhttp.readyState);

            if (this.readyState == 4 && this.status == 200) {

                var users = JSON.parse(this.responseText);
                console.log(users);
            }
        }

        console.log('veio depois do onready');

        /* 
            1. O true significa que estou trabalhando com uma requisição assíncrona 
            2. E essa requição é um callback da function declarada na linha 7
        */
        xhttp.open('GET', 'ajax/user.php', true);

        xhttp.send();
    }

}
window.onload = function () {

    var btn_users = document.querySelector("#btn-users");

    var div_users = document.querySelector("#div-users");

    var xhttp = new XMLHttpRequest();

    btn_users.onclick = function () {

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                // var users = JSON.parse(this.responseText);
                // console.log(users);
                console.log(this.responseText);
            }
        }

        /* 
            1. O true significa que estou trabalhando com uma requisição assíncrona 
            2. E essa requição é um callback da function declarada na linha 9
        */
        xhttp.open('GET', 'ajax/user.php', true);

        xhttp.send();
    }

}
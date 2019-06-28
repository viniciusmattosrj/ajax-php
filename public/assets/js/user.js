window.onload = function () {

    var btn_users = document.querySelector("#btn-users");

    var div_users = document.querySelector("#div-users");

    var xhttp = new XMLHttpRequest();

    btn_users.onclick = function () {

        xhttp.onreadystatechange = function () {

            // if (this.readState < 4) {
            //     div_users.innerHTML = `<i class="fa fa-refresh fa-spin fa-3px fa-fw"></i><span class="sr-only">Loading...</span>`;
            // }

            if (this.readyState == 4 && this.status == 200) {

                var users = JSON.parse(this.responseText);

                var table = `<table class='table table-striped'>`;

                table += `<thead><td>ID</td><td>Nome</td><td>Email</td><tr></thead>`;

                table += `<tbody>`;

                users.forEach(function (user) {

                   table+= `<tr>`;

                   table+= `<td>${user.id}</td>`;

                   table+= `<td>${user.name}</td>`;

                   table+= `<td>${user.email}</td>`;

                   table+= `</tr>`;
                });

            table += `</tbody>`;
            table += `</table>`;

            div_users.innerHTML = table;
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
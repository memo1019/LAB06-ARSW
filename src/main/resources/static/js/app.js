var app = (function () {
        var autor = "";
        var listaPlanos = [];

        var mapObjetos = (planos) => {
            listaPlanos = planos.map(({author, points, name}) => ({
                    author: planos.author,
                    points: planos.points.length,
                    name: planos.name
                })
            )
            $("#tabla > tbody").empty();
            listaPlanos.forEach(({author, points, name}) => {
                $("#tabla > tbody").append(
                    `<tr>
                    <td> ${author} </td>
                    <td> ${points} </td>
                    <td> ${name} </td>
                    <td> <button type="button" > Open </button></td>
                    </tr>`
                );
            });
        }

        return {
            actualizarPlanos() {
                if ($("#author").val() === "") {
                    alert("Debe ingresar un nombre !");
                } else {
                    this.cambiarAutor($("#author").val());
                    apimock.getBlueprintsByAuthor(autor, mapObjetos);
                }
            },

            cambiarAutor(author) {
                autor = author;
            }
        }
    }
)();
app = (function () {
    function getByAuthor(funcion) {
        return funcion.map(function(f){
            return {name:f.name,points:Object.keys(f.points).length};
        });
    }

    function getBlueprintsByNameAndAuthor(author, bpName){
        $("#current").text(bpName)
        return apimock.getBlueprintsByNameAndAuthor(author, bpName, pintar);
    }

    function run() {
        var nameAutor = $('#autor').val();
        generarTable(nameAutor,apimock.getBlueprintsByAuthor(nameAutor,getByAuthor));
    }

    function pintar(funcion) {
        const puntos = funcion.points;
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.restore();
        ctx.beginPath();
        for (let i = 1; i < puntos.length; i++) {
            ctx.moveTo(puntos[i - 1].x, puntos[i - 1].y);
            ctx.lineTo(puntos[i].x, puntos[i].y);
            if (i === puntos.length - 1) {
                ctx.moveTo(puntos[i].x, puntos[i].y);
                ctx.lineTo(puntos[0].x, puntos[0].y);
            }
        }
        ctx.stroke();
    }

    function generarTable(name,funcion) {
        $("#nombre").text(name)
        $("#cuerpo").html("");
        var total=0
        funcion.map(function(f) {
            $('#cuerpo')
                .append(
                  `<tr>
                    <td>`+f.name+`</td>
                    <td>`+f.points+`</td>`+
                    "<td><form><button type='button' onclick='onclick=app.getBlueprintsByNameAndAuthor( \"" +name +'" , "' +f.name +"\")')'>Open</button></form></td>"+
                  `</tr>`
                );
                total+=f.points
        });
        $("#total").text(total)
    }

    return {
        run: run,
        getBlueprintsByNameAndAuthor:getBlueprintsByNameAndAuthor
    }
})();
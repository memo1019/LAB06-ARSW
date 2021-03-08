app = (function () {
    function getByAuthor(funcion) {

        return funcion.map(function(f){
            return {name:f.name,points:Object.keys(f.points).length};
        });
    }

    function getBlueprints(funcion){
        return funcion;
    }

    function getBlueprintsByNameAndAuthor(funcion,name){
        var points=[]
        funcion.map(function(f){
            if(f.name==name){
                points=f.points
            }
        });
        return points;
    }

    function run() {
        var nameAutor = $('#autor').val();
        generarTable(nameAutor,apimock.getBlueprintsByAuthor(nameAutor,getByAuthor));
    }

    function generarTable(name,funcion) {
        $("#cuerpo").html("");
        var total=0
        funcion.map(function(f) {
            $('#cuerpo')
                .append(
                  `<tr>
                    <td>`+f.name+`</td>
                    <td>`+f.points+`</td>`+
                    "<td><form><button type='button'>Open</button></form></td>"+
                  `</tr>`
                );
                total+=f.points
        });
    }

    return {
        run: run,
    }

})();
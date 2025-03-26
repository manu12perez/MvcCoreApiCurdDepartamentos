let url = "https://apicorecruddepartamentosmpb.azurewebsites.net/";
function getDepartamentosAsync(callBack) {
	//console.log("Dentro del JS");
	let request = "api/departamentos"
	$.ajax({
		url: url + request,
		type: "GET",
		dataType: "json",
		success: function (data) {
			//console.log("Aqui en Ajax");
			//console.log(data);
			callBack (data);
		}
	})
}

function convertDeptToJson(id, nombre, localidad) {
	let dept = new Object();
	dept.idDepartamento = id;
	dept.nombre = nombre;
	dept.localidad = localidad;

	let json = JSON.stringify(dept);

	return json;
}

function insertDepartamentoAsync(id, nombre, localidad, callBack) {
	let json = convertDeptToJson(id, nombre, localidad);

	let request = "api/departamentos";
	$.ajax({
		url: url + request,
		type: "POST",
		data: json,
		contentType: "application/json",
		success: function () {
			callBack();
		}
	})
}

function updateDepartamentoAsync(id, nombre, localidad, callBack) {
	let json = convertDeptToJson(id, nombre, localidad);

	let request = "api/departamentos";
	$.ajax({
		url: url + request,
		type: "PUT",
		data: json,
		contentType: "application/json",
		success: function () {
			callBack();
		}
	})
}

function deleteDepartamentoAsync(id, callBack) {
	let request = "api/departamentos/" + id;

	$.ajax({
		url: url + request,
		type: "DELETE",
		success: function () {
			callBack();
		}
	})
}
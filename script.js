
    let parameters = new URLSearchParams(window.location.search);
    document.getElementById("firstName").innerText = parameters.get("firstName");
    document.getElementById("lastName").innerText = parameters.get("lastName");
    document.getElementById("email").innerText = parameters.get("email");
    document.getElementById("phone").innerText = parameters.get("phone");
    document.getElementById("date").innerText = parameters.get("dateofbirth");
    document.getElementById("addr").innerText = parameters.get("address");
    document.getElementById("department").innerText = parameters.get("department");
    document.getElementById("status").innerText = parameters.get("status");




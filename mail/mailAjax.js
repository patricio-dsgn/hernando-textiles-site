function sendMail(){

    // XMLHttpRequest object (ajax)
    var hr = new XMLHttpRequest();

    // vars to send to backend PHP
    var url = "./mail/mailBackend.php";

    var var_name = document.getElementById("name");

    var var_email = document.getElementById("email");
    var var_message = document.getElementById("message");




    var obj = var_name;
    obj.classList.remove("error");
    obj.classList.remove("success");
    if (obj.value == "") {
        obj.classList.add("error");
    }else{
        obj.classList.add("success");
    }


    obj.classList.remove("error");
    obj.classList.remove("success");
    if (obj.value == "") {
        obj.classList.add("error");
    }else{
        obj.classList.add("success");
    }

    var obj = var_email;
    obj.classList.remove("error");
    obj.classList.remove("success");
    if (obj.value == "") {
        obj.classList.add("error");
    }else{
        obj.classList.add("success");
    }

    var obj = var_message;
    obj.classList.remove("error");
    obj.classList.remove("success");
    if (obj.value == "") {
        obj.classList.add("error");
    }else{
        obj.classList.add("success");
    }




    var var_email = document.getElementById("email");
    var var_message

    if (
        (var_name.value != "")&&

        (var_email.value != "")&&
        (var_message.value != "")
    ){
        var vars =
            "ajax_var_name="+(var_name.value)

            +"&ajax_var_email="+(var_email.value)
            +"&ajax_var_message="+(var_message.value)
        ;

        hr.open("POST", url, true);
        hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        // Access the onreadystatechange event for the XMLHttpRequest object
        hr.onreadystatechange = function() {
            console.log(hr);
            if(hr.readyState == 4 && hr.status == 200) {
                var return_data = hr.responseText;
                document.getElementById("status").innerHTML = return_data;
            }
        }

        // Send the data to PHP now... and wait for response to update the status div
        hr.send(vars); // Actually execute the request
        // hr.send(); // Actually execute the request
        document.getElementById("status").innerHTML = "processing...";
    }
}

document.getElementById('send').onclick = sendMail;

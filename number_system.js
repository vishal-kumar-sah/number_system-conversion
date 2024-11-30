function convert() {
    let num = document.getElementById("d1").value.trim();
    let f_choose_value = document.getElementById("finp").value;
    let t_choose_value = document.getElementById("tinp").value;
    let dec_num;
    let result = "";

    if (f_choose_value === "b") {
        dec_num = parseInt(num, 2);
    } else if (f_choose_value === "o") {
        dec_num = parseInt(num, 8);
    } else if (f_choose_value === "h") {
        dec_num = parseInt(num, 16);
    } else if (f_choose_value === "d") {
        dec_num = parseInt(num, 10);
    }

    if (t_choose_value === "b") {
        result = dec_num.toString(2);  
    } else if (t_choose_value === "o") {
        result = dec_num.toString(8);  
    } else if (t_choose_value === "h") {
        result = dec_num.toString(16).toUpperCase();  
    } else if (t_choose_value === "d") {
        result = dec_num.toString(10);  
    }

    document.getElementById("res").value = result;
}
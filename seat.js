let CheckValue = 0;
let CheckStatus;
let amt = 0;
let id;
let temp_ticket_numb = "";
let ticket_numb1 = "";
let ticket_numb2 = "";
let ticket_numb3 = "";
let ticket_numb4 = "";
let ticket_numb5 = "";
let t1_id = "";
let t2_id = "";
let t3_id = "";
let t4_id = "";
let t5_id = "";
let count = 0;

function retrieve_id(ele) {
    id = ele.id;
    CheckStatus = document.getElementById(id);
    document.getElementById("pay").style.visibility = "visible";
    numb_of_ticket();
    if (ele.id == "checkbox10" ||
        ele.id == "checkbox11" ||
        ele.id == "checkbox12" ||

        ele.id == "checkbox10b" ||
        ele.id == "checkbox11b" ||
        ele.id == "checkbox12b" ||

        ele.id == "checkbox10c" ||
        ele.id == "checkbox11c" ||
        ele.id == "checkbox12c" ||

        ele.id == "checkbox10d" ||
        ele.id == "checkbox11d" ||
        ele.id == "checkbox12d" ||

        ele.id == "checkbox10e" ||
        ele.id == "checkbox11e" ||
        ele.id == "checkbox12e" ||

        ele.id == "checkbox10f" ||
        ele.id == "checkbox11f" ||
        ele.id == "checkbox12f" ||

        ele.id == "checkbox10g" ||
        ele.id == "checkbox11g" ||
        ele.id == "checkbox12g" ||

        ele.id == "checkbox10h" ||
        ele.id == "checkbox11h" ||
        ele.id == "checkbox12h" ||

        ele.id == "checkbox10i" ||
        ele.id == "checkbox11i" ||
        ele.id == "checkbox12i" ||

        ele.id == "checkbox10j" ||
        ele.id == "checkbox11j" ||
        ele.id == "checkbox12j" ||

        ele.id == "checkbox10k" ||
        ele.id == "checkbox11k" ||
        ele.id == "checkbox12k") {
        for (i = 4; i <= 6; i++) {
            temp_ticket_numb += String(document.getElementById(id).value)[i];
        }
    } else {
        for (i = 4; i <= 5; i++) {
            temp_ticket_numb += String(document.getElementById(id).value)[i];
        }
    }
    if (CheckStatus.checked) {
        count += 1;
        if (count == 1) {
            ticket_numb1 = temp_ticket_numb;
            t1_id = id;
        }
        if (count == 2) {
            ticket_numb2 = temp_ticket_numb;
            t2_id = id;
        }
        if (count == 3) {
            ticket_numb3 = temp_ticket_numb;
            t3_id = id;
        }
        if (count == 4) {
            ticket_numb4 = temp_ticket_numb;
            t4_id = id;
        }
        if (count == 5) {
            ticket_numb5 = temp_ticket_numb;
            t5_id = id;
        }
        if (count == 5) {
            disable_unable(1);
            document.getElementById(t1_id).disabled = false;
            document.getElementById(t2_id).disabled = false;
            document.getElementById(t3_id).disabled = false;
            document.getElementById(t4_id).disabled = false;
            document.getElementById(t5_id).disabled = false;
        }
        temp_ticket_numb = "";

    } else {
        count -= 1;
        if (count == 0) {
            document.getElementById("pay").style.visibility = "hidden";

        }
        if (id == t1_id) {
            ticket_numb1 = ticket_numb2;
            ticket_numb2 = ticket_numb3;
            ticket_numb3 = ticket_numb4;
            ticket_numb4 = ticket_numb5;

            t1_id = t2_id;
            t2_id = t3_id;
            t3_id = t4_id;
            t4_id = t5_id;
        }
        if (id == t2_id) {
            ticket_numb2 = ticket_numb3;
            ticket_numb3 = ticket_numb4;
            ticket_numb4 = ticket_numb5;

            t2_id = t3_id;
            t3_id = t4_id;
            t4_id = t5_id;
        }
        if (id == t3_id) {
            ticket_numb3 = ticket_numb4;
            ticket_numb4 = ticket_numb5;

            t3_id = t4_id;
            t4_id = t5_id;
        }
        if (id == t4_id) {
            ticket_numb4 = ticket_numb5;

            t4_id = t5_id;
        }
        ticket_numb5 = "";
        t5_id = "";
        temp_ticket_numb = "";
        disable_unable(0);
    }

};

function numb_of_ticket() {
    if (CheckStatus.checked) {
        CheckValue += 1;
        document.getElementById("selected-tickets").innerHTML = CheckValue;
        pay_inc();
    } else {
        CheckValue -= 1;
        document.getElementById("selected-tickets").innerHTML = CheckValue;
        pay_dec();



    }
};

function pay_inc() {
    var amt_str = document.getElementById(id).value;
    amt += parseInt(amt_str)
    document.getElementById("total-pay").innerHTML = amt;
};

function pay_dec() {
    var amt_str = document.getElementById(id).value;
    amt -= parseInt(amt_str)
    document.getElementById("total-pay").innerHTML = amt;
};


function disable_unable(val) {
    document.getElementById("checkbox1").disabled = val;
    document.getElementById("checkbox2").disabled = val;
    document.getElementById("checkbox3").disabled = val;
    document.getElementById("checkbox4").disabled = val;
    document.getElementById("checkbox5").disabled = val;
    document.getElementById("checkbox6").disabled = val;
    document.getElementById("checkbox7").disabled = val;
    document.getElementById("checkbox8").disabled = val;
    document.getElementById("checkbox9").disabled = val;
    document.getElementById("checkbox10").disabled = val;
    document.getElementById("checkbox11").disabled = val;
    document.getElementById("checkbox12").disabled = val;

    document.getElementById("checkbox1b").disabled = val;
    document.getElementById("checkbox2b").disabled = val;
    document.getElementById("checkbox3b").disabled = val;
    document.getElementById("checkbox4b").disabled = val;
    document.getElementById("checkbox5b").disabled = val;
    document.getElementById("checkbox6b").disabled = val;
    document.getElementById("checkbox7b").disabled = val;
    document.getElementById("checkbox8b").disabled = val;
    document.getElementById("checkbox9b").disabled = val;
    document.getElementById("checkbox10b").disabled = val;
    document.getElementById("checkbox11b").disabled = val;
    document.getElementById("checkbox12b").disabled = val;

    document.getElementById("checkbox1c").disabled = val;
    document.getElementById("checkbox2c").disabled = val;
    document.getElementById("checkbox3c").disabled = val;
    document.getElementById("checkbox4c").disabled = val;
    document.getElementById("checkbox5c").disabled = val;
    document.getElementById("checkbox6c").disabled = val;
    document.getElementById("checkbox7c").disabled = val;
    document.getElementById("checkbox8c").disabled = val;
    document.getElementById("checkbox9c").disabled = val;
    document.getElementById("checkbox10c").disabled = val;
    document.getElementById("checkbox11c").disabled = val;
    document.getElementById("checkbox12c").disabled = val;

    document.getElementById("checkbox1d").disabled = val;
    document.getElementById("checkbox2d").disabled = val;
    document.getElementById("checkbox3d").disabled = val;
    document.getElementById("checkbox4d").disabled = val;
    document.getElementById("checkbox5d").disabled = val;
    document.getElementById("checkbox6d").disabled = val;
    document.getElementById("checkbox7d").disabled = val;
    document.getElementById("checkbox8d").disabled = val;
    document.getElementById("checkbox9d").disabled = val;
    document.getElementById("checkbox10d").disabled = val;
    document.getElementById("checkbox11d").disabled = val;
    document.getElementById("checkbox12d").disabled = val;

    document.getElementById("checkbox1e").disabled = val;
    document.getElementById("checkbox2e").disabled = val;
    document.getElementById("checkbox3e").disabled = val;
    document.getElementById("checkbox4e").disabled = val;
    document.getElementById("checkbox5e").disabled = val;
    document.getElementById("checkbox6e").disabled = val;
    document.getElementById("checkbox7e").disabled = val;
    document.getElementById("checkbox8e").disabled = val;
    document.getElementById("checkbox9e").disabled = val;
    document.getElementById("checkbox10e").disabled = val;
    document.getElementById("checkbox11e").disabled = val;
    document.getElementById("checkbox12e").disabled = val;

    document.getElementById("checkbox1f").disabled = val;
    document.getElementById("checkbox2f").disabled = val;
    document.getElementById("checkbox3f").disabled = val;
    document.getElementById("checkbox4f").disabled = val;
    document.getElementById("checkbox5f").disabled = val;
    document.getElementById("checkbox6f").disabled = val;
    document.getElementById("checkbox7f").disabled = val;
    document.getElementById("checkbox8f").disabled = val;
    document.getElementById("checkbox9f").disabled = val;
    document.getElementById("checkbox10f").disabled = val;
    document.getElementById("checkbox11f").disabled = val;
    document.getElementById("checkbox12f").disabled = val;

    document.getElementById("checkbox1g").disabled = val;
    document.getElementById("checkbox2g").disabled = val;
    document.getElementById("checkbox3g").disabled = val;
    document.getElementById("checkbox4g").disabled = val;
    document.getElementById("checkbox5g").disabled = val;
    document.getElementById("checkbox6g").disabled = val;
    document.getElementById("checkbox7g").disabled = val;
    document.getElementById("checkbox8g").disabled = val;
    document.getElementById("checkbox9g").disabled = val;
    document.getElementById("checkbox10g").disabled = val;
    document.getElementById("checkbox11g").disabled = val;
    document.getElementById("checkbox12g").disabled = val;

    document.getElementById("checkbox1h").disabled = val;
    document.getElementById("checkbox2h").disabled = val;
    document.getElementById("checkbox3h").disabled = val;
    document.getElementById("checkbox4h").disabled = val;
    document.getElementById("checkbox5h").disabled = val;
    document.getElementById("checkbox6h").disabled = val;
    document.getElementById("checkbox7h").disabled = val;
    document.getElementById("checkbox8h").disabled = val;
    document.getElementById("checkbox9h").disabled = val;
    document.getElementById("checkbox10h").disabled = val;
    document.getElementById("checkbox11h").disabled = val;
    document.getElementById("checkbox12h").disabled = val;

    document.getElementById("checkbox1i").disabled = val;
    document.getElementById("checkbox2i").disabled = val;
    document.getElementById("checkbox3i").disabled = val;
    document.getElementById("checkbox4i").disabled = val;
    document.getElementById("checkbox5i").disabled = val;
    document.getElementById("checkbox6i").disabled = val;
    document.getElementById("checkbox7i").disabled = val;
    document.getElementById("checkbox8i").disabled = val;
    document.getElementById("checkbox9i").disabled = val;
    document.getElementById("checkbox10i").disabled = val;
    document.getElementById("checkbox11i").disabled = val;
    document.getElementById("checkbox12i").disabled = val;

    document.getElementById("checkbox1j").disabled = val;
    document.getElementById("checkbox2j").disabled = val;
    document.getElementById("checkbox3j").disabled = val;
    document.getElementById("checkbox4j").disabled = val;
    document.getElementById("checkbox5j").disabled = val;
    document.getElementById("checkbox6j").disabled = val;
    document.getElementById("checkbox7j").disabled = val;
    document.getElementById("checkbox8j").disabled = val;
    document.getElementById("checkbox9j").disabled = val;
    document.getElementById("checkbox10j").disabled = val;
    document.getElementById("checkbox11j").disabled = val;
    document.getElementById("checkbox12j").disabled = val;

    document.getElementById("checkbox1k").disabled = val;
    document.getElementById("checkbox2k").disabled = val;
    document.getElementById("checkbox3k").disabled = val;
    document.getElementById("checkbox4k").disabled = val;
    document.getElementById("checkbox5k").disabled = val;
    document.getElementById("checkbox6k").disabled = val;
    document.getElementById("checkbox7k").disabled = val;
    document.getElementById("checkbox8k").disabled = val;
    document.getElementById("checkbox9k").disabled = val;
    document.getElementById("checkbox10k").disabled = val;
    document.getElementById("checkbox11k").disabled = val;
    document.getElementById("checkbox12k").disabled = val;
};
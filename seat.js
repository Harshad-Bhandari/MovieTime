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
            temp_ticket_numb = ""
        }
        if (count == 2) {
            ticket_numb2 = temp_ticket_numb;
            t2_id = id;
            temp_ticket_numb = ""
        }
        if (count == 3) {
            ticket_numb3 = temp_ticket_numb;
            t3_id = id;
            temp_ticket_numb = ""
        }
        if (count == 4) {
            ticket_numb4 = temp_ticket_numb;
            t4_id = id;
            temp_ticket_numb = ""
        }
        if (count == 5) {
            ticket_numb5 = temp_ticket_numb;
            t5_id = id;
            temp_ticket_numb = ""
        }
        if (count >= 5) {
            document.getElementById("checkbox1").disabled = true;
            document.getElementById("checkbox2").disabled = true;
            document.getElementById("checkbox3").disabled = true;
            document.getElementById("checkbox4").disabled = true;
            document.getElementById("checkbox5").disabled = true;
            document.getElementById("checkbox6").disabled = true;
            document.getElementById("checkbox7").disabled = true;
            document.getElementById("checkbox8").disabled = true;
            document.getElementById("checkbox9").disabled = true;
            document.getElementById("checkbox10").disabled = true;
            document.getElementById("checkbox11").disabled = true;
            document.getElementById("checkbox12").disabled = true;

            document.getElementById("checkbox1b").disabled = true;
            document.getElementById("checkbox2b").disabled = true;
            document.getElementById("checkbox3b").disabled = true;
            document.getElementById("checkbox4b").disabled = true;
            document.getElementById("checkbox5b").disabled = true;
            document.getElementById("checkbox6b").disabled = true;
            document.getElementById("checkbox7b").disabled = true;
            document.getElementById("checkbox8b").disabled = true;
            document.getElementById("checkbox9b").disabled = true;
            document.getElementById("checkbox10b").disabled = true;
            document.getElementById("checkbox11b").disabled = true;
            document.getElementById("checkbox12b").disabled = true;

            document.getElementById("checkbox1c").disabled = true;
            document.getElementById("checkbox2c").disabled = true;
            document.getElementById("checkbox3c").disabled = true;
            document.getElementById("checkbox4c").disabled = true;
            document.getElementById("checkbox5c").disabled = true;
            document.getElementById("checkbox6c").disabled = true;
            document.getElementById("checkbox7c").disabled = true;
            document.getElementById("checkbox8c").disabled = true;
            document.getElementById("checkbox9c").disabled = true;
            document.getElementById("checkbox10c").disabled = true;
            document.getElementById("checkbox11c").disabled = true;
            document.getElementById("checkbox12c").disabled = true;

            document.getElementById("checkbox1d").disabled = true;
            document.getElementById("checkbox2d").disabled = true;
            document.getElementById("checkbox3d").disabled = true;
            document.getElementById("checkbox4d").disabled = true;
            document.getElementById("checkbox5d").disabled = true;
            document.getElementById("checkbox6d").disabled = true;
            document.getElementById("checkbox7d").disabled = true;
            document.getElementById("checkbox8d").disabled = true;
            document.getElementById("checkbox9d").disabled = true;
            document.getElementById("checkbox10d").disabled = true;
            document.getElementById("checkbox11d").disabled = true;
            document.getElementById("checkbox12d").disabled = true;

            document.getElementById("checkbox1e").disabled = true;
            document.getElementById("checkbox2e").disabled = true;
            document.getElementById("checkbox3e").disabled = true;
            document.getElementById("checkbox4e").disabled = true;
            document.getElementById("checkbox5e").disabled = true;
            document.getElementById("checkbox6e").disabled = true;
            document.getElementById("checkbox7e").disabled = true;
            document.getElementById("checkbox8e").disabled = true;
            document.getElementById("checkbox9e").disabled = true;
            document.getElementById("checkbox10e").disabled = true;
            document.getElementById("checkbox11e").disabled = true;
            document.getElementById("checkbox12e").disabled = true;

            document.getElementById("checkbox1f").disabled = true;
            document.getElementById("checkbox2f").disabled = true;
            document.getElementById("checkbox3f").disabled = true;
            document.getElementById("checkbox4f").disabled = true;
            document.getElementById("checkbox5f").disabled = true;
            document.getElementById("checkbox6f").disabled = true;
            document.getElementById("checkbox7f").disabled = true;
            document.getElementById("checkbox8f").disabled = true;
            document.getElementById("checkbox9f").disabled = true;
            document.getElementById("checkbox10f").disabled = true;
            document.getElementById("checkbox11f").disabled = true;
            document.getElementById("checkbox12f").disabled = true;

            document.getElementById("checkbox1g").disabled = true;
            document.getElementById("checkbox2g").disabled = true;
            document.getElementById("checkbox3g").disabled = true;
            document.getElementById("checkbox4g").disabled = true;
            document.getElementById("checkbox5g").disabled = true;
            document.getElementById("checkbox6g").disabled = true;
            document.getElementById("checkbox7g").disabled = true;
            document.getElementById("checkbox8g").disabled = true;
            document.getElementById("checkbox9g").disabled = true;
            document.getElementById("checkbox10g").disabled = true;
            document.getElementById("checkbox11g").disabled = true;
            document.getElementById("checkbox12g").disabled = true;

            document.getElementById("checkbox1h").disabled = true;
            document.getElementById("checkbox2h").disabled = true;
            document.getElementById("checkbox3h").disabled = true;
            document.getElementById("checkbox4h").disabled = true;
            document.getElementById("checkbox5h").disabled = true;
            document.getElementById("checkbox6h").disabled = true;
            document.getElementById("checkbox7h").disabled = true;
            document.getElementById("checkbox8h").disabled = true;
            document.getElementById("checkbox9h").disabled = true;
            document.getElementById("checkbox10h").disabled = true;
            document.getElementById("checkbox11h").disabled = true;
            document.getElementById("checkbox12h").disabled = true;

            document.getElementById("checkbox1i").disabled = true;
            document.getElementById("checkbox2i").disabled = true;
            document.getElementById("checkbox3i").disabled = true;
            document.getElementById("checkbox4i").disabled = true;
            document.getElementById("checkbox5i").disabled = true;
            document.getElementById("checkbox6i").disabled = true;
            document.getElementById("checkbox7i").disabled = true;
            document.getElementById("checkbox8i").disabled = true;
            document.getElementById("checkbox9i").disabled = true;
            document.getElementById("checkbox10i").disabled = true;
            document.getElementById("checkbox11i").disabled = true;
            document.getElementById("checkbox12i").disabled = true;

            document.getElementById("checkbox1j").disabled = true;
            document.getElementById("checkbox2j").disabled = true;
            document.getElementById("checkbox3j").disabled = true;
            document.getElementById("checkbox4j").disabled = true;
            document.getElementById("checkbox5j").disabled = true;
            document.getElementById("checkbox6j").disabled = true;
            document.getElementById("checkbox7j").disabled = true;
            document.getElementById("checkbox8j").disabled = true;
            document.getElementById("checkbox9j").disabled = true;
            document.getElementById("checkbox10j").disabled = true;
            document.getElementById("checkbox11j").disabled = true;
            document.getElementById("checkbox12j").disabled = true;

            document.getElementById("checkbox1k").disabled = true;
            document.getElementById("checkbox2k").disabled = true;
            document.getElementById("checkbox3k").disabled = true;
            document.getElementById("checkbox4k").disabled = true;
            document.getElementById("checkbox5k").disabled = true;
            document.getElementById("checkbox6k").disabled = true;
            document.getElementById("checkbox7k").disabled = true;
            document.getElementById("checkbox8k").disabled = true;
            document.getElementById("checkbox9k").disabled = true;
            document.getElementById("checkbox10k").disabled = true;
            document.getElementById("checkbox11k").disabled = true;
            document.getElementById("checkbox12k").disabled = true;

            document.getElementById(t1_id).disabled = false;
            document.getElementById(t2_id).disabled = false;
            document.getElementById(t3_id).disabled = false;
            document.getElementById(t4_id).disabled = false;
            document.getElementById(t5_id).disabled = false;
        }

    } else {
        count -= 1;
        if (id == t1_id) {
            ticket_numb1 = ticket_numb2;
            ticket_numb2 = ticket_numb3;
            ticket_numb3 = ticket_numb4;
            ticket_numb4 = ticket_numb5;
            ticket_numb5 = "";

            t1_id = t2_id;
            t2_id = t3_id;
            t3_id = t4_id;
            t4_id = t5_id;
            t5_id = "";
        }
        if (id == t2_id) {
            ticket_numb2 = ticket_numb3;
            ticket_numb3 = ticket_numb4;
            ticket_numb4 = ticket_numb5;
            ticket_numb5 = "";

            t2_id = t3_id;
            t3_id = t4_id;
            t4_id = t5_id;
            t5_id = "";
        }
        if (id == t3_id) {
            ticket_numb3 = ticket_numb4;
            ticket_numb4 = ticket_numb5;
            ticket_numb5 = "";

            t3_id = t4_id;
            t4_id = t5_id;
            t5_id = "";
        }
        if (id == t4_id) {
            ticket_numb4 = ticket_numb5;
            ticket_numb5 = "";

            t4_id = t5_id;
            t5_id = "";
        }
        if (id == t5_id) {
            ticket_numb5 = "";

            t5_id = "";
        }

        document.getElementById("checkbox1").disabled = false;
        document.getElementById("checkbox2").disabled = false;
        document.getElementById("checkbox3").disabled = false;
        document.getElementById("checkbox4").disabled = false;
        document.getElementById("checkbox5").disabled = false;
        document.getElementById("checkbox6").disabled = false;
        document.getElementById("checkbox7").disabled = false;
        document.getElementById("checkbox8").disabled = false;
        document.getElementById("checkbox9").disabled = false;
        document.getElementById("checkbox10").disabled = false;
        document.getElementById("checkbox11").disabled = false;
        document.getElementById("checkbox12").disabled = false;

        document.getElementById("checkbox1b").disabled = false;
        document.getElementById("checkbox2b").disabled = false;
        document.getElementById("checkbox3b").disabled = false;
        document.getElementById("checkbox4b").disabled = false;
        document.getElementById("checkbox5b").disabled = false;
        document.getElementById("checkbox6b").disabled = false;
        document.getElementById("checkbox7b").disabled = false;
        document.getElementById("checkbox8b").disabled = false;
        document.getElementById("checkbox9b").disabled = false;
        document.getElementById("checkbox10b").disabled = false;
        document.getElementById("checkbox11b").disabled = false;
        document.getElementById("checkbox12b").disabled = false;

        document.getElementById("checkbox1c").disabled = false;
        document.getElementById("checkbox2c").disabled = false;
        document.getElementById("checkbox3c").disabled = false;
        document.getElementById("checkbox4c").disabled = false;
        document.getElementById("checkbox5c").disabled = false;
        document.getElementById("checkbox6c").disabled = false;
        document.getElementById("checkbox7c").disabled = false;
        document.getElementById("checkbox8c").disabled = false;
        document.getElementById("checkbox9c").disabled = false;
        document.getElementById("checkbox10c").disabled = false;
        document.getElementById("checkbox11c").disabled = false;
        document.getElementById("checkbox12c").disabled = false;

        document.getElementById("checkbox1d").disabled = false;
        document.getElementById("checkbox2d").disabled = false;
        document.getElementById("checkbox3d").disabled = false;
        document.getElementById("checkbox4d").disabled = false;
        document.getElementById("checkbox5d").disabled = false;
        document.getElementById("checkbox6d").disabled = false;
        document.getElementById("checkbox7d").disabled = false;
        document.getElementById("checkbox8d").disabled = false;
        document.getElementById("checkbox9d").disabled = false;
        document.getElementById("checkbox10d").disabled = false;
        document.getElementById("checkbox11d").disabled = false;
        document.getElementById("checkbox12d").disabled = false;

        document.getElementById("checkbox1e").disabled = false;
        document.getElementById("checkbox2e").disabled = false;
        document.getElementById("checkbox3e").disabled = false;
        document.getElementById("checkbox4e").disabled = false;
        document.getElementById("checkbox5e").disabled = false;
        document.getElementById("checkbox6e").disabled = false;
        document.getElementById("checkbox7e").disabled = false;
        document.getElementById("checkbox8e").disabled = false;
        document.getElementById("checkbox9e").disabled = false;
        document.getElementById("checkbox10e").disabled = false;
        document.getElementById("checkbox11e").disabled = false;
        document.getElementById("checkbox12e").disabled = false;

        document.getElementById("checkbox1f").disabled = false;
        document.getElementById("checkbox2f").disabled = false;
        document.getElementById("checkbox3f").disabled = false;
        document.getElementById("checkbox4f").disabled = false;
        document.getElementById("checkbox5f").disabled = false;
        document.getElementById("checkbox6f").disabled = false;
        document.getElementById("checkbox7f").disabled = false;
        document.getElementById("checkbox8f").disabled = false;
        document.getElementById("checkbox9f").disabled = false;
        document.getElementById("checkbox10f").disabled = false;
        document.getElementById("checkbox11f").disabled = false;
        document.getElementById("checkbox12f").disabled = false;

        document.getElementById("checkbox1g").disabled = false;
        document.getElementById("checkbox2g").disabled = false;
        document.getElementById("checkbox3g").disabled = false;
        document.getElementById("checkbox4g").disabled = false;
        document.getElementById("checkbox5g").disabled = false;
        document.getElementById("checkbox6g").disabled = false;
        document.getElementById("checkbox7g").disabled = false;
        document.getElementById("checkbox8g").disabled = false;
        document.getElementById("checkbox9g").disabled = false;
        document.getElementById("checkbox10g").disabled = false;
        document.getElementById("checkbox11g").disabled = false;
        document.getElementById("checkbox12g").disabled = false;

        document.getElementById("checkbox1h").disabled = false;
        document.getElementById("checkbox2h").disabled = false;
        document.getElementById("checkbox3h").disabled = false;
        document.getElementById("checkbox4h").disabled = false;
        document.getElementById("checkbox5h").disabled = false;
        document.getElementById("checkbox6h").disabled = false;
        document.getElementById("checkbox7h").disabled = false;
        document.getElementById("checkbox8h").disabled = false;
        document.getElementById("checkbox9h").disabled = false;
        document.getElementById("checkbox10h").disabled = false;
        document.getElementById("checkbox11h").disabled = false;
        document.getElementById("checkbox12h").disabled = false;

        document.getElementById("checkbox1i").disabled = false;
        document.getElementById("checkbox2i").disabled = false;
        document.getElementById("checkbox3i").disabled = false;
        document.getElementById("checkbox4i").disabled = false;
        document.getElementById("checkbox5i").disabled = false;
        document.getElementById("checkbox6i").disabled = false;
        document.getElementById("checkbox7i").disabled = false;
        document.getElementById("checkbox8i").disabled = false;
        document.getElementById("checkbox9i").disabled = false;
        document.getElementById("checkbox10i").disabled = false;
        document.getElementById("checkbox11i").disabled = false;
        document.getElementById("checkbox12i").disabled = false;

        document.getElementById("checkbox1j").disabled = false;
        document.getElementById("checkbox2j").disabled = false;
        document.getElementById("checkbox3j").disabled = false;
        document.getElementById("checkbox4j").disabled = false;
        document.getElementById("checkbox5j").disabled = false;
        document.getElementById("checkbox6j").disabled = false;
        document.getElementById("checkbox7j").disabled = false;
        document.getElementById("checkbox8j").disabled = false;
        document.getElementById("checkbox9j").disabled = false;
        document.getElementById("checkbox10j").disabled = false;
        document.getElementById("checkbox11j").disabled = false;
        document.getElementById("checkbox12j").disabled = false;

        document.getElementById("checkbox1k").disabled = false;
        document.getElementById("checkbox2k").disabled = false;
        document.getElementById("checkbox3k").disabled = false;
        document.getElementById("checkbox4k").disabled = false;
        document.getElementById("checkbox5k").disabled = false;
        document.getElementById("checkbox6k").disabled = false;
        document.getElementById("checkbox7k").disabled = false;
        document.getElementById("checkbox8k").disabled = false;
        document.getElementById("checkbox9k").disabled = false;
        document.getElementById("checkbox10k").disabled = false;
        document.getElementById("checkbox11k").disabled = false;
        document.getElementById("checkbox12k").disabled = false;
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

function send() {

}
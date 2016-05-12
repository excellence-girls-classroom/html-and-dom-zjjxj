function setEvent() {
    var submitButton = document.getElementsByTagName("button")[0];

    submitButton.onclick = function () {
        showAllGrade();
    }
}
window.onload = setEvent;

function showAllGrade() {
    var finalGrade = blankGrade() + choiceGrade() + judgeGrade() + shortAnswerGrade();
    var results = document.getElementsByName("allGrade");
    results[0].value = finalGrade;
}

function blankGrade() {
    var grades = 0;
    var firstResult = document.getElementsByName("firstBlank");
    var secondResult = document.getElementsByName("secondBlank");

    if (firstResult[0].value == answer[0].firstBlank) {
        grades += 15;
    }
    if (secondResult[0].value == answer[0].secondBlank) {
        grades += 15;
    }

    return grades;
}

function choiceGrade() {
    var grades = 0;
    var resultSelect1 = document.getElementsByName("firstSelect");
    var resultSelect2 = document.getElementsByName("secondSelect");
    var resultMoreSelect1 = document.getElementsByName("firstMoreSelect");
    var resultMoreSelect2 = document.getElementsByName("secondMoreSelect");

    if (resultSelect1[answer[1].firstSelect].checked == true) {
        grades += 5;
    }
    if (resultSelect2[answer[1].secondSelect].checked == true) {
        grades += 5;
    }
    if (resultMoreSelect1[answer[1].firstMoreSelect[0]].checked == true && resultMoreSelect1[answer[1].firstMoreSelect[1]].checked == true && resultMoreSelect1[answer[1].firstMoreSelect[2]].checked == true) {
        grades += 10;
    }
    if (resultMoreSelect2[answer[1].secondMoreSelect[0]].checked == true && resultMoreSelect2[answer[1].secondMoreSelect[1]].checked == true && resultMoreSelect2[answer[1].secondMoreSelect[2]].checked == true) {
        grades += 10;
    }

    return grades;
}

function judgeGrade() {
    var grades = 0;
    var resultJudge1 = document.getElementsByName("firstJudge")
    var resultJudge2 = document.getElementsByName("secondJudge");

    if (resultJudge1[answer[2].firstJudge].checked == true) {
        grades += 10;
    }
    if (resultJudge2[answer[2].secondJudge].checked == true) {
        grades += 10;
    }

    return grades;
}

function shortAnswerGrade() {
    var grades = 0;
    var lasttexts = document.getElementsByName("shortAnswer");

    if (lasttexts[0].value == answer[3].shortAnswer) {
        grades += 20;
    }

    return grades;
}


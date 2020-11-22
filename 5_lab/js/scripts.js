function checkTest()
{
    var points = 0;
    var mark = "";
    

    // вопрос номер 1
    var vopros1 = document.forms['quiz'].elements['vopros1'];
    for (var i = 0; i < vopros1.length; i++)
    {
        if (vopros1[i].checked)
        {
            if (vopros1[i].value=="yes") 
            { 
                points++;
            }
        }
    }

    // вопрос номер 2
    var wrongAnsws2 =0;
    var rightAnsws2=0;
    var vopros2 = document.forms['quiz'].elements['vopros2'];
    for (var i = 0; i < vopros2.length; i++)
    {
        if (vopros2[i].checked) 
        {
            if (vopros2[i].value == "yes") { rightAnsws2++; }
            if (vopros2[i].value == "no") { wrongAnsws2++; }
        }
    }
    if((rightAnsws2 == 2) && (wrongAnsws2 == 0)) { points++; }

    // вопрос номер 3
    var answ3 = "2";
    var vopros3 = document.forms['quiz'].elements['vopros3'];
    if(answ3 == vopros3.value)
    {
        points++
    }

    // вопрос номер 4
    let answ4 = ["Norco","norco","норко","Норко"];
    var vopros4 = document.forms['quiz'].elements['vopros4'];
    for(var i = 0; i < answ4.length; i++)
    {
        if(answ4[i] == vopros4.value)
        {
            points++
            break;
        }
    }

    // вопрос номер 5
    var vopros5mark = 0;
    let answ5 = [3,1,2];
    for(var i = 0; i < 3; i++)
    {
        var vopros5 = document.forms['quiz'].elements['vopros5.' + (i+1)];
        if(vopros5.value == answ5[i])
        {
            vopros5mark++;
        }
    }
    if(vopros5mark == 3)
    { 
        points++;
    }



    switch (true) {
        case (points == 2): mark = "3"; break;
        case (points == 3): mark="3"; break;
        case (points == 4): mark="4"; break;
        case (points == 5): mark="5"; break;
        default: mark = "плохо"; break;
    }


    var result = "";
    result = "Ваш результат: " + points + " , и оценка: " + mark + ".\n";
    if(points > 3){
        result += "Поздравляем! Вы справились с тестом :D ";
    } else if (points > 1){
        result += "Не хорошо, но и не ужасно! Может, стоит попробовать снова ...";
    } else {
        result += "Сделаю вид, что не видел этого ...";
    }

    //вставить result на страницу
    var resultWrapper = document.getElementById("result-container");
    resultWrapper.style.display = "block";
    var formResult = document.getElementById("test-result");
    formResult.innerText = result;
    resultWrapper.scrollIntoView();
}

function checkForm()
{

    //собрать все ответы про спорт
    let arrSport = [];
    var interesSport = document.forms['quiz'].elements['interesSport'];
    var sport = document.getElementById("sportsCheck");
    if (sport.checked == false) 
    {
        arrSport = [];
    } else {
        for (var i = 0; i < interesSport.length; i++)
        {
            if (interesSport[i].checked)
            {
                arrSport.push(" " + interesSport[i].value);
            }
        }
    }



    //собрать все ответы про катание
    let arrRiding = [];
    var interesRiding = document.forms['quiz'].elements['interesRiding'];
    var riding = document.getElementById("ridingCheck");
    if (riding.checked == false) 
    {
        arrRiding = [];
    } else {
        for (var i = 0; i < interesRiding.length; i++)
        {
            if (interesRiding[i].checked)
            {
                arrRiding.push(" " + interesRiding[i].value);
            }
        }
    }
    


    var choicePol="";
    //собрать ответ по полу
    var pol = document.forms['quiz'].elements['pol'];
    for (var i = 0; i < pol.length; i++)
    {
        if (pol[i].checked)
        {
            choicePol = pol[i].value;
        }
    }


    var result = "";
    result = document.getElementById("name").value + ", " +
        "ваша почта: " + document.getElementById("email").value + "\n" +
        "Ваш телефон: " + document.getElementById("phone").value + ".\n" +
        "Ваш любимый цвет: " + document.getElementById("color").value + "\n" +
        "Вы можете съесть конфет: " + document.getElementById("num").value + "\n" +
        "Ваш вес(кг): "+document.getElementById("weightout").value + "\n" +
        "Ваш пол: " + choicePol +"\n" +
        "День рождения : " + document.getElementById("dr").value + "\n";

    if(arrSport.length == 0){
        result += "Вы не увлекаетесь спортом. \n";
    } 
    else 
    {
        result += "Из спорта вам нравится:" + arrSport + "\n";
    }

    if(arrRiding.length == 0){
        result += "Вы не увлекаетесь велосипедами. :( \n"
    } 
    else 
    {
        result += "Из велосипедного спорта вам интересно:" + arrRiding;
    }


    //вставить result на страницу
    var resultWrapper = document.getElementById("result-container");
    resultWrapper.style.display = "block";
    var formResult = document.getElementById("form-result");
    formResult.innerText = result;
    resultWrapper.scrollIntoView();
}


function CheckSports() {
    var checkBox = document.getElementById("sportsCheck");
    var text = document.getElementById("sportsVariants");
    if (checkBox.checked == true){
        text.style.display = "block";
    } 
    else 
    {
        text.style.display = "none";
    }
}



function CheckRiding() {
    var checkBox = document.getElementById("ridingCheck");
    var text = document.getElementById("ridingVariants");
    if (checkBox.checked == true){
        text.style.display = "block";
    } 
    else 
    {
        text.style.display = "none";
    }
}
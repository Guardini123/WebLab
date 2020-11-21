function check()
{
    var points = 0;
    var mark = "";
    var choicePol="";

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


    
    //собрать все ответы про спорт
    let arrSport = [];
    var interesSport = document.forms['quiz'].elements['interesSport'];
    for (var i = 0; i < interesSport.length; i++)
    {
        if (interesSport[i].checked)
        {
            arrSport.push(interesSport[i].value);
        }
    }

    //собрать все ответы про катание
    let arrRiding = [];
    var interesRiding = document.forms['quiz'].elements['interesRiding'];
    for (var i = 0; i < interesRiding.length; i++)
    {
        if (interesRiding[i].checked)
        {
            arrRiding.push(interesRiding[i].value);
        }
    }
    
    //собрать ответ по полу
    var pol = document.forms['quiz'].elements['pol'];
    for (var i = 0; i < pol.length; i++)
    {
        if (pol[i].checked)
        {
            choicePol = pol[i].value;
        }
    }

    switch (true) {
        case (points == 2): mark = "оценка 3"; break;
        case (points == 3): mark="оценка 3"; break;
        case (points == 4): mark="оценка 4"; break;
        case (points == 5): mark="оценка 5"; break;
        default: mark = "очень плохо"; break;
    }

    alert(document.getElementById("name").value + ", Ваш результат: " + mark + "\n" +
        "Результаты не отправлены на вашу почту: " + document.getElementById("email").value + "\n" +
        "Ваш телефон: " + document.getElementById("phone").value + ".\n" +
        "Ваш любимый цвет: " + document.getElementById("color").value + "\n" +
        "Вы можете съесть конфет: " + document.getElementById("num").value + "\n" +
        "Ваш вес(кг): "+document.getElementById("weightout").value + "\n" +
        "Ваш пол: " + choicePol +"\n" +
        "День рождения : " + document.getElementById("dr").value + "\n" +
        "Вам нравится следующие виды спорта: " + arrSport + "\n" +
        "Из велосипедного спорта вам интересно: " + arrRiding);
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
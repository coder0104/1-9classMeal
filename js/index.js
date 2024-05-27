
var request1
var request
if (window.XMLHttpRequest) {
    request1 = new XMLHttpRequest;
    request = new XMLHttpRequest;
}




let today=new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var date = ('0' + today.getDate()).slice(-2);
const birthday = new Date(year+'-'+month+'-'+date);
const day1 = birthday.getDay();
const div = document.getElementById('hello');
const numdate = Number(date)+1

// 현재 반을 설정합니다. (예: 오늘은 8반)
let currentClass = 8;

// 하루가 지나면 반을 업데이트하는 함수
function nextClass(current) {
    if (current >= 10) {
        return 1; // 10반 이후에는 다시 1반으로 돌아갑니다.
    } else {
        return current + 1; // 그 외에는 반 번호를 1 증가시킵니다.
    }
}

// 자정을 체크하여 반을 업데이트하는 함수
function updateClassAtMidnight() {
    currentClass = nextClass(currentClass);
    console.log(`새로운 반: ${currentClass}반`);

    // 다음 자정까지 타이머를 다시 설정합니다.
    setMidnightTimer();
}

// 다음 자정까지 남은 시간을 계산하고 타이머를 설정하는 함수
function setMidnightTimer() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // 자정을 설정 (24시 0분 0초 0밀리초)
    
    const timeToMidnight = midnight - now; // 자정까지 남은 시간 계산
    
    // 자정에 반을 업데이트하도록 타이머 설정
    setTimeout(updateClassAtMidnight, timeToMidnight);
}

// 초기 설정
console.log(`오늘 반: ${currentClass}반`);
setMidnightTimer();


document.getElementById('ct').innerHTML = month + '월 '+ date +'일'
document.getElementById('ct1').innerHTML = month + '월 '+ numdate +'일'
console.log(day1)

request1.open("GET","https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430048&KEY=ef5c41c7fa004a8bb4e7ef6fb7ce58bc&MLSV_YMD=" + year + month + date);
request1.send();

request1.onreadystatechange = function() {
    if (request1.readyState == 4) {
    
        if (request1.status >= 200 && request1.status < 300) {
            var xml = request1.responseXML;
            
            var names = xml.getElementsByTagName("DDISH_NM");
            var ages = xml.getElementsByTagName("MMEAL_SC_NM");

            for (var i = 0; i < names.length; i++) {
                var value = names[i].childNodes[0].nodeValue;
                var time = ages[i].childNodes[0].nodeValue;
                console.log(time + ":" + value);
                console.log('hello' + i)
                document.getElementById('time' + i).innerHTML = time
                document.getElementById('value' + i).innerHTML = value
            }

            //요청하는게 xml이면 responseXML 일반텍스트면 response

        } else {
            alert("에러!");
        }
    }
}

request.open("GET","https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430048&KEY=ef5c41c7fa004a8bb4e7ef6fb7ce58bc&MLSV_YMD=" + year + month + numdate);
request.send();

request.onreadystatechange = function() {
    if (request1.readyState == 4) {
    
        if (request.status >= 200 && request.status < 300) {
            var xml = request.responseXML;
            
            var names = xml.getElementsByTagName("DDISH_NM");
            var ages = xml.getElementsByTagName("MMEAL_SC_NM");

            for (var i = 0; i < names.length; i++) {
                var value = names[i].childNodes[0].nodeValue;
                var time = ages[i].childNodes[0].nodeValue;
                console.log(time + ":" + value);
                console.log('hello' + i)
                document.getElementById('timee' + i).innerHTML = time
                document.getElementById('valval' + i).innerHTML = value
            }

            //요청하는게 xml이면 responseXML 일반텍스트면 response

        } else {
            alert("에러!");
        }
    }
}



mon = ['1. 체육(최경환 선생님)', '2. 회화(최대열 선생님)', '3. 수학(심소헌 선생님)', '4. 한국사(최장문 선생님)', '5. 국어(사선혜 선생님)', '6. 통사(김준호 선생님)', '7. 통과(이희택 선생님)']
tue = ['1. 국어(사선혜 선생님)', '2. 정보(김선규 선생님)', '3. 유도(김윤철 선생님)', '4. 영어(최대열 선생님)', '5. 한국사(최장문 선생님)', '6. 수학(심소헌 선생님)', '7. 미술(김현지 선생님)']
wed = ['1. 종교학(강준원 목사님)', '2. 영어(최대열 선생님)', '3. 인문학', '4. 한국사(최장문 선생님)', '5. 음악(정유진 선생님)', '6. 통사(남찬희 선생님)', '7. 수학(엄태호 선생님)']
thu = ['1. 과탐실(이진용 선생님)', '2. 국어(사선혜 선생님)', '3. 수학(심소헌 선생님)', '4. 통과(신용운 선생님)', '5. 진로(이진회 선생님)', '6. 회화(문가람 선생님)', '7. 영어(최대열 선생님)']
fri = ['1. 국어(사선혜 선생님)', '2. 정보(김선규 선생님)', '3. 통사(임정현 선생님)', '4. 통과(이희택 선생님)', '5. 자율', '6. 창체', '7.창체']

if (day1 == 1){
    document.getElementById('date').innerHTML = "월요일"
    for (i=0; i<=7; i++){
        document.getElementById('mon'+i).innerHTML = mon[i]
    }
}
if (day1 == 2){
    document.getElementById('date').innerHTML = "화요일"
    for (i=0; i<=7; i++){
    document.getElementById('mon'+i).innerHTML = tue[i]
    }
}
if (day1 == 3){
    document.getElementById('date').innerHTML = "수요일"
    for (i=0; i<=7; i++){
    document.getElementById('mon'+i).innerHTML = wed[i]
    }
}
if (day1 == 4){
    document.getElementById('date').innerHTML = "목요일"
    for (i=0; i<=7; i++){
    document.getElementById('mon'+i).innerHTML = thu[i]
    }
}
if (day1 == 5){
    document.getElementById('date').innerHTML = "금요일"
    document.getElementById('mon').remove();
    for (i=0; i<=7; i++){
    document.getElementById('mon' + i).innerHTML=fri[i]
    div.remove();

    }
}

if (day1 == 0 || day1 == 6){
    document.getElementById('date').innerHTML = "주말"
    document.getElementById('hellp').remove()
    document.getElementById('weekend').style.display = 'block';
}




// 시계
const timeDiv = document.getElementById("time");
const todayDiv = document.getElementById("today");

function getTime() {
    let now = new Date();
    let hour = padZero(now.getHours());
    let minute = padZero(now.getMinutes());
    let second = padZero(now.getSeconds());
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`;
    todayDiv.textContent = `${year}년 ${month}월 ${day}일`;
}

function padZero(data) {
    return data < 10 ? `0${data}` : data;
}

getTime();
setInterval(getTime, 1000);

// django 사이트로 이동
function redirectToDjangoDocs() {
    window.location.href = "https://docs.djangoproject.com/ko/4.2/intro/";
}

// mysql 사이트로 이동
function redirectToMySqlWebsite() {
    window.location.href = "https://www.mysql.com/";
}

// 내 깃허브 사이트로 이동
function redirectToMyGithub() {
    window.location.href = "https://github.com/sm4640/";
}

// 내 노션으로 이동
function redirectToMyNotion() {
    window.location.href =
        "https://www.notion.so/08102d01256e4e3e8246d1db43506537?pvs=4";
}

// index.p 내용이 타이핑 느낌나도록 구현
document.addEventListener("DOMContentLoaded", function () {
    var p = document.querySelector(".index_p");
    var fullHTML =
        'I’m steadily growing <span id="Backend">Backend</span> developer !!';
    var currentHTML = "";
    var charIndex = 0;

    function typeWriter() {
        if (charIndex < fullHTML.length) {
            currentHTML = fullHTML.slice(0, ++charIndex);
            p.innerHTML = currentHTML;
            setTimeout(typeWriter, 100); // 타이핑 속도 조절
        }
    }

    typeWriter();
});

// 개발자 밈이 번갈아가면서 나오도록 구현
var currentImageIndex = 0;
var images = document.getElementsByClassName("memeImage");
var totalImages = images.length;

function changeImage() {
    // 현재 이미지 숨김
    images[currentImageIndex].style.display = "none";
    // 다음 이미지로 인덱스 증가
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    // 다음 이미지 표시
    images[currentImageIndex].style.display = "block";
    // 2초 후 다시 함수 호출
    setTimeout(changeImage, 2000);
}

// 최초 함수 호출
setTimeout(changeImage, 2000);

// 현재 보는 페이지에 해당하는 리스트 보라색으로 표시
// document.addEventListener("DOMContentLoaded", function () {
//     // 모든 nav_list 클래스를 가진 li 태그 가져오기
//     var navListItems = document.querySelectorAll(".nav_list");

//     // 현재 페이지의 URL 가져오기
//     var currentUrl = window.location.href;

//     // 각 li 태그를 순회하며 현재 페이지와 링크 비교
//     navListItems.forEach(function (li) {
//         var link = li.querySelector("a"); // li 내부의 a 태그 찾기
//         var linkUrl = link.href;

//         if (currentUrl === linkUrl) {
//             link.style.color = "purple"; // a 태그의 스타일 변경
//         }
//     });
// });

// activities에서 클릭한 사진에 맞는 프로젝트로 이동
function redirectToHim() {
    window.location.href = "#Him";
}

function redirectToMul() {
    window.location.href = "#Mul";
}

function redirectToSe() {
    window.location.href = "#Se";
}

function redirectToWe() {
    window.location.href = "#We";
}

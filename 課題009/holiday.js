var holidays = ["正月", "成人の日", "建国記念日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"];

// for文を使用して祝日リストを出力
var holidayListFor = document.getElementById('holidayListFor');
for (var i = 0; i < holidays.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = holidays[i];
    holidayListFor.appendChild(listItem);
    console.log(holidays[i]);
}

// while文を使用して祝日リストを出力
var holidayListWhile = document.getElementById('holidayListWhile');
var j = 0;
while (j < holidays.length) {
    var listItem = document.createElement('li');
    listItem.textContent = holidays[j];
    holidayListWhile.appendChild(listItem);
    console.log(holidays[j]);
    j++;
}

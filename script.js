let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let days = document.getElementById('days');
let months = document.getElementById('months');
let years = document.getElementById('years');

let now = new Date();
let get_day = now.getDate();
let get_month = now.getMonth() + 1; // الأشهر تبدأ من 0 لذا نضيف 1
let get_year = now.getFullYear();

let allmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function CalcAge() {
    // التحقق من عدد الأيام في الشهر
    if (day.value > get_day) {
        get_day += allmonth[get_month - 1]; // الشهر السابق
        get_month -= 1;
    }

    if (month.value > get_month) {
        get_month += 12;
        get_year -= 1;
    }

    // حساب الفروقات
    let calculatedDays = get_day - day.value;
    let calculatedMonths = get_month - month.value;
    let calculatedYears = get_year - year.value;

    // عرض النتائج في العناصر
    days.innerHTML = calculatedDays;
    months.innerHTML = calculatedMonths;
    years.innerHTML = calculatedYears;
}

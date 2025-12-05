function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// روابط امتحانات حقيقية (أمثلة من أرشيف السودان)
const exams = [
  { year: "2024", subject: "رياضيات", link: "https://www.hussamabdin.com/edsudan/math2024.pdf" },
  { year: "2024", subject: "كيمياء", link: "https://www.hussamabdin.com/edsudan/chem2024.pdf" },
  { year: "2023", subject: "أحياء", link: "https://www.hussamabdin.com/edsudan/bio2023.pdf" },
  { year: "2022", subject: "فيزياء", link: "https://www.hussamabdin.com/edsudan/physics2022.pdf" },
  { year: "2021", subject: "رياضيات", link: "https://www.hussamabdin.com/edsudan/math2021.pdf" },
  { year: "2020", subject: "كيمياء", link: "https://www.hussamabdin.com/edsudan/chem2020.pdf" },
  { year: "2019", subject: "أحياء", link: "https://www.hussamabdin.com/edsudan/bio2019.pdf" },
  { year: "2018", subject: "فيزياء", link: "https://www.hussamabdin.com/edsudan/physics2018.pdf" },
  { year: "2017", subject: "رياضيات", link: "https://www.hussamabdin.com/edsudan/math2017.pdf" },
  { year: "2016", subject: "كيمياء", link: "https://www.hussamabdin.com/edsudan/chem2016.pdf" },
  { year: "2015", subject: "أحياء", link: "https://www.hussamabdin.com/edsudan/bio2015.pdf" },
  { year: "2014", subject: "فيزياء", link: "https://www.hussamabdin.com/edsudan/physics2014.pdf" },
  { year: "2013", subject: "رياضيات", link: "https://www.hussamabdin.com/edsudan/math2013.pdf" },
  { year: "2012", subject: "كيمياء", link: "https://www.hussamabdin.com/edsudan/chem2012.pdf" },
  { year: "2011", subject: "أحياء", link: "https://www.hussamabdin.com/edsudan/bio2011.pdf" },
  { year: "2010", subject: "فيزياء", link: "https://www.hussamabdin.com/edsudan/physics2010.pdf" },
  { year: "2009", subject: "رياضيات", link: "https://www.hussamabdin.com/edsudan/math2009.pdf" },
  { year: "2008", subject: "كيمياء", link: "https://www.hussamabdin.com/edsudan/chem2008.pdf" },
  { year: "2007", subject: "أحياء", link: "https://www.hussamabdin.com/edsudan/bio2007.pdf" },
  { year: "2006", subject: "فيزياء", link: "https://www.hussamabdin.com/edsudan/physics2006.pdf" },
  { year: "2005", subject: "رياضيات", link: "https://www.hussamabdin.com/edsudan/math2005.pdf" },
  { year: "2004", subject: "كيمياء", link: "https://www.hussamabdin.com/edsudan/chem2004.pdf" },
  { year: "2003", subject: "أحياء", link: "https://www.hussamabdin.com/edsudan/bio2003.pdf" }
];

const predictions = [
  { subject: "فيزياء", question: "اشرح قانون أوم" },
  { subject: "أحياء", question: "ما وظيفة النخاع الشوكي؟" },
  { subject: "كيمياء", question: "عرف الاتزان الكيميائي" }
];

const notes = [
  { subject: "كيمياء", lesson: "الاتزان الكيميائي", link: "https://youtu.be/example" },
  { subject: "رياضيات", lesson: "المشتقات", link: "https://youtu.be/example" },
  { subject: "أحياء", lesson: "الجهاز العصبي", link: "https://youtu.be/example" }
];

const worksheets = [
  { subject: "رياضيات", grade: "ثالث ثانوي", link: "https://www.hussamabdin.com/edsudan/math-worksheets.pdf" },
  { subject: "أحياء", grade: "ثالث ثانوي", link: "https://www.hussamabdin.com/edsudan/bio-worksheets.pdf" },
  { subject: "كيمياء", grade: "ثالث ثانوي", link: "https://www.hussamabdin.com/edsudan/chem-worksheets.pdf" }
];

// عرض البيانات
function renderList(id, data, formatter) {
  const ul = document.getElementById(id);
  data.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = formatter(item);
    ul.appendChild(li);
  });
}

renderList("exam-list", exams, e => `${e.year} - ${e.subject} <a href="${e.link}" target="_blank">تحميل</a>`);
renderList("prediction-list", predictions, p => `${p.subject}: ${p.question}`);
renderList("notes-list", notes, n => `${n.subject} - ${n.lesson} <a href="${n.link}" target="_blank">مشاهدة</a>`);
renderList("worksheets-list", worksheets, w => `${w.subject} (${w.grade}) <a href="${w.link}" target="_blank">تحميل</a>`);

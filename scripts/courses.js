const courses = [
  { code: "CSE110", name: "Introduction to Programming", credits: 3, completed: true },
  { code: "WDD130", name: "Web Frontend Development I", credits: 3, completed: false },
  { code: "CSE111", name: "JavaScript Language", credits: 3, completed: true },
  { code: "CSE210", name: "Object-Oriented Programming", credits: 3, completed: false },
  { code: "WDD131", name: "Web Frontend Development II", credits: 3, completed: true },
  { code: "WDD231", name: "Web Backend Development", credits: 3, completed: false },
];

const courseContainer = document.getElementById('course-cards');
const totalCreditsElement = document.getElementById('total-credits');

function displayCourses(filter = "all") {
  courseContainer.innerHTML = "";
  let filteredCourses = courses;

  if (filter === "CSE") {
    filteredCourses = courses.filter(course => course.code.startsWith("CSE"));
  } else if (filter === "WDD") {
    filteredCourses = courses.filter(course => course.code.startsWith("WDD"));
  }

  filteredCourses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    if (course.completed) courseCard.classList.add('completed');
    courseCard.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p><strong>Credits:</strong> ${course.credits}</p>
    `;
    courseContainer.appendChild(courseCard);
  });

  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}

document.getElementById('filter-all').addEventListener('click', () => displayCourses("all"));
document.getElementById('filter-cse').addEventListener('click', () => displayCourses("CSE"));
document.getElementById('filter-wdd').addEventListener('click', () => displayCourses("WDD"));

displayCourses();
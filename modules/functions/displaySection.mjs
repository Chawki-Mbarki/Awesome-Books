export default function displaySection(sectionNumber) {

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach(section => section.classList.contains("invisible") ? null : section.classList.add('invisible'));
  navLinks.forEach(link => link.classList.contains("active") ? link.classList.remove('active') : null);

  sections[sectionNumber-1].classList.remove('invisible');
  navLinks[sectionNumber-1].classList.add('active'); 
}

// Get references to elements
const generateResumeBtn = document.getElementById(
  "generate-resume-btn"
) as HTMLButtonElement;
const generatedResumeModal = document.getElementById(
  "generated-resume-modal"
) as HTMLElement;
const generatedResumeContent = document.getElementById(
  "generated-resume-content"
) as HTMLElement;
const closeGeneratedResumeBtn = generatedResumeModal.querySelector(
  ".close-btn"
) as HTMLElement;

// Personal Information Section IDs
const personalInfoIds = ["name", "email", "phone", "profile-summary"];

// Show generated resume modal when "Generate Resume" button is clicked
generateResumeBtn.addEventListener("click", () => {
  // Gather all the content from the editable sections
  const personalInfo = personalInfoIds
    .map((id) => {
      const element = document.getElementById(id) as HTMLElement;
      return `<strong>${id.replace("-", " ").toUpperCase()}:</strong> ${
        element.innerHTML
      }`;
    })
    .join("<br><br>");

  const education = (
    document.querySelector("#education-section .editable") as HTMLElement
  ).innerHTML;
  const workExperience = (
    document.querySelector("#work-experience-section .editable") as HTMLElement
  ).innerHTML;
  const skills = (
    document.querySelector("#skills-section .editable") as HTMLElement
  ).innerHTML;

  // Combine all sections into a formatted resume
  const resumeHTML = `
    <h3>Personal Information</h3>
    ${personalInfo}
    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Work Experience</h3>
    <p>${workExperience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
  `;

  // Display the formatted resume in the modal
  generatedResumeContent.innerHTML = resumeHTML;
  generatedResumeModal.style.display = "flex";
});

// Close modal when "X" button is clicked
closeGeneratedResumeBtn.addEventListener("click", () => {
  generatedResumeModal.style.display = "none";
});

// Get references to elements
var generateResumeBtn = document.getElementById("generate-resume-btn");
var generatedResumeModal = document.getElementById("generated-resume-modal");
var generatedResumeContent = document.getElementById("generated-resume-content");
var closeGeneratedResumeBtn = generatedResumeModal.querySelector(".close-btn");
// Personal Information Section IDs
var personalInfoIds = ["name", "email", "phone", "profile-summary"];
// Show generated resume modal when "Generate Resume" button is clicked
generateResumeBtn.addEventListener("click", function () {
    // Gather all the content from the editable sections
    var personalInfo = personalInfoIds
        .map(function (id) {
        var element = document.getElementById(id);
        return "<strong>".concat(id.replace("-", " ").toUpperCase(), ":</strong> ").concat(element.innerHTML);
    })
        .join("<br><br>");
    var education = document.querySelector("#education-section .editable").innerHTML;
    var workExperience = document.querySelector("#work-experience-section .editable").innerHTML;
    var skills = document.querySelector("#skills-section .editable").innerHTML;
    // Combine all sections into a formatted resume
    var resumeHTML = "\n    <h3>Personal Information</h3>\n    ".concat(personalInfo, "\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Work Experience</h3>\n    <p>").concat(workExperience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    // Display the formatted resume in the modal
    generatedResumeContent.innerHTML = resumeHTML;
    generatedResumeModal.style.display = "flex";
});
// Close modal when "X" button is clicked
closeGeneratedResumeBtn.addEventListener("click", function () {
    generatedResumeModal.style.display = "none";
});

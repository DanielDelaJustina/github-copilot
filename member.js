function skillsMember() {
    var member = document.getElementById('member');
    var skills = document.getElementById('skills');
    var project = document.getElementById('project');
    var memberButton = document.getElementById('memberButton');
    var skillsButton = document.getElementById('skillsButton');
    var projectButton = document.getElementById('projectButton');
    member.style.display = 'block';
    skills.style.display = 'none';
    project.style.display = 'none';
    memberButton.style.backgroundColor = '#fff';
    skillsButton.style.backgroundColor = '#e0e0e0';
    projectButton.style.backgroundColor = '#e0e0e0';
}
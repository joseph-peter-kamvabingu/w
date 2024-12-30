// Handle form submission and download feature
document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const formData = new FormData(document.getElementById('job-application-form'));
    const applicationData = {};

    formData.forEach((value, key) => {
        applicationData[key] = value;
    });

    alert("Your application has been submitted successfully.");
    console.log(applicationData);
});

document.getElementById('download-btn').addEventListener('click', function() {
    const formData = new FormData(document.getElementById('job-application-form'));
    let downloadContent = "";

    formData.forEach((value, key) => {
        downloadContent += `${key}: ${value}\n`;
    });

    const blob = new Blob([downloadContent], { type: 'PDF' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'application.txt';
    link.click();
});

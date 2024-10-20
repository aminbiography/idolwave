/*==========

//////////////////////////////////////////////////////
final author start
//////////////////////////////////////////////////////
Final Author @ Mohammad Aminul Islam
//////////////////////////////////////////////////////
final author end
//////////////////////////////////////////////////////

==========*/



function checkHealth() {
    const url = document.getElementById('websiteUrl').value;
    const resultDiv = document.getElementById('result');

    if (url) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<p>Checking health for: ${url}</p>`;
        
        // simulate a delay for the check
        setTimeout(() => {
            // simulated health check result
            resultDiv.innerHTML = `
                <p>Website: ${url}</p>
                <p>Status: <span style="color: green;">Healthy</span></p>
                <p>Performance: <span style="color: orange;">Good</span></p>
                <p>SEO: <span style="color: red;">Needs Improvement</span></p>
            `;
        }, 2000);
    } else {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: red;">Please enter a valid URL.</p>';
    }
}

function refreshPage(formId) {
    const form = document.getElementById(formId);
    form.reset();
    if (formId === 'healthCheckForm') {
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'none';
        resultDiv.innerHTML = '';
    }
}
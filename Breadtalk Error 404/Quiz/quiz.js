document.addEventListener("DOMContentLoaded", function() {
    const currentQuestion = document.querySelector("input[name^='q']").name;
    const nextQuestionPage = {
      q1: "question2.html",
      q2: "question3.html",
      q3: "question4.html",
      q4: null // No more questions, result calculation
    };
  
    // Load saved answer from localStorage
    const savedAnswer = localStorage.getItem(currentQuestion);
    if (savedAnswer) {
      document.querySelector(`input[name="${currentQuestion}"][value="${savedAnswer}"]`).checked = true;
    }
  
    // Save answer and go to the next question or result page
    document.getElementById("quizForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const selectedOption = document.querySelector(`input[name="${currentQuestion}"]:checked`);
      if (selectedOption) {
        localStorage.setItem(currentQuestion, selectedOption.value);
  
        if (currentQuestion === "q4") {
          // Calculate result and navigate to the appropriate result page
          const q1Answer = localStorage.getItem("q1");
          const q2Answer = localStorage.getItem("q2");
          const q3Answer = localStorage.getItem("q3");
          const q4Answer = localStorage.getItem("q4");
  
          let resultPage = "result1.html"; // Default result page
  
          // Example logic for determining which result page to navigate to
          if (q1Answer === "Paris" && q2Answer === "Jupiter" && q3Answer === "Cheetah" && q4Answer === "Oxygen") {
            resultPage = "result1.html";
          } else if (q1Answer === "London" && q2Answer === "Mars" && q3Answer === "Lion" && q4Answer === "Gold") {
            resultPage = "result2.html";
          } else {
            resultPage = "result3.html"; // Default result page for other combinations
          }
  
          window.location.href = resultPage;
  
        } else {
          window.location.href = nextQuestionPage[currentQuestion];
        }
  
      } else {
        alert("Please select an answer before proceeding.");
      }
    });
  });
  
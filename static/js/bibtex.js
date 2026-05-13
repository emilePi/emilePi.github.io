function openBibtex(id) {
    document.getElementById("bibtex-" + id).style.display = "block";
  }
  
  function closeBibtex(id) {
    document.getElementById("bibtex-" + id).style.display = "none";
  }
  
  function copyBibtex(id) {
    const text = document.getElementById("bibtex-text-" + id).innerText;
  
    navigator.clipboard.writeText(text);
  
    // Petit feedback visuel optionnel
    alert("Citation copied to clipboard!");
  }
  
  window.onclick = function(event) {
    document.querySelectorAll(".bibtex-modal").forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }
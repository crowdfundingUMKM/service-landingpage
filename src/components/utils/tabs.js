// tabs.js
function setupTabs() {
    document.querySelectorAll(".tab-content .tab-pane").forEach(function(tabPane, idx, tabPanes) {
      var navTabs = tabPane.closest(".code-tabs").querySelector(".nav-tabs");
      var title = tabPane.getAttribute("title");

      var existingTab = Array.from(navTabs.children).find(tab => tab.textContent === title);
      if (existingTab) {
        return; // Jika tab sudah ada, tidak perlu menambahkannya lagi
      }
      
  

      var tabItem = document.createElement("li");
      tabItem.className = "nav-item";
      var tabLink = document.createElement("a");
      tabLink.className = "nav-link";
      tabLink.href = "#";
      tabLink.textContent = title;
  
      tabLink.addEventListener("click", function(e) {
        e.preventDefault();
        var tabPanel = this.closest(".code-tabs");
        var tabIndex = Array.from(tabPanel.querySelectorAll(".nav-link")).indexOf(this);
  
        tabPanel.querySelectorAll(".active").forEach(function(activeItem) {
          activeItem.classList.remove("active");
        });
  
        tabItem.classList.add("active");
        tabPanel.querySelectorAll(".tab-pane")[tabIndex].classList.add("active");
      });
  
      tabItem.appendChild(tabLink);
      navTabs.appendChild(tabItem);
  
      if (idx === 0) {
        tabItem.classList.add("active");
        tabPane.classList.add("active");
      }
    });
  }
  
  export default setupTabs;
  
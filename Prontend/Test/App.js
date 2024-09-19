document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const emailInput = document.getElementById('email');
    const errorBanner = document.getElementById('error');
    const contactsList = window.contactsList;
    const summaryTable = document.getElementById('summaryTable').querySelector('tbody');
    const searchInput = document.getElementById('search');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = nameInput.value.trim();
      const mobile = mobileInput.value.trim();
      const email = emailInput.value.trim();
  
      if (!validateInputs(name, mobile, email)) {
        errorBanner.style.display = 'block';
        return;
      }
  
      errorBanner.style.display = 'none';
      addContact(name, mobile, email);
      updateTable();
    });
  
    function validateInputs(name, mobile, email) {
      const nameRegex = /^[A-Za-z\s]{2,20}$/;
      const mobileRegex = /^\d{10}$/;
      const emailRegex = /^[A-Za-z][A-Za-z0-9.]{1,9}@[A-Za-z]{2,20}\.[A-Za-z]{2,10}$/;
  
      if (!nameRegex.test(name)) {
        console.log("Invalid name")
        return false;
      }
  
      if (!mobileRegex.test(mobile)) {
        console.log("Invalid mobile number")
        return false;
      }
  
      if (!emailRegex.test(email)) {
        console.log("Invalid email")
        return false;
      }
  
      return true;
    }
  
    function addContact(name, mobile, email) {
      // Duplicate value check not added 
      contactsList.push({ name, mobile, email });
    }
  
    function updateTable(filteredContacts = contactsList) {
      summaryTable.innerHTML = '';
      filteredContacts.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${contact.name}</td>
          <td>${contact.mobile}</td>
          <td>${contact.email}</td>
        `;
        summaryTable.appendChild(row);
      });
    }
  
    searchInput.addEventListener('input', function() {
      console.log("Searching . . . ")
      const searchTerm = searchInput.value.trim();
      const filteredContacts = contactsList.filter(contact => contact.mobile.includes(searchTerm));
      updateTable(filteredContacts);
    });
  });
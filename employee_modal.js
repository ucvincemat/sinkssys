const employees = {
    ivan: {
      name: "Ivan Petrov",
      jobTitle: "Software Engineer",
      department: "IT",
      email: "ivan.petrov@sinksrus.com",
      contact: "555-6789",
      address: "12 Red Square, Moscow",
      sex: "Male",
      maritalStatus: "Single"
    },
    pedro: {
      name: "Pedro Los Baños",
      jobTitle: "Marketing Manager",
      department: "Marketing",
      email: "pedro_los_banos@sinksrus.com",
      contact: "555-6789",
      address: "123 Mabini St",
      sex: "Male",
      maritalStatus: "Married"
    },
    ana: {
      name: "Ana Gómez",
      jobTitle: "HR Specialist",
      department: "HR",
      email: "ana.gomez@sinksrus.com",
      contact: "555-1526",
      address: "456 Rizal St",
      sex: "Female",
      maritalStatus: "Divorced"
    },
    john: {
      name: "John Wu",
      jobTitle: "Sales Associate",
      department: "Sales",
      email: "john.wu@sinksrus.com",
      contact: "555-6925",
      address: "456 Rizal St",
      sex: "Male",
      maritalStatus: "Single"
    },
    emma: {
      name: "Emma Wilson",
      jobTitle: "CEO",
      department: "Admin",
      email: "emma@sinksrus.com",
      contact: "555-1111",
      address: "456 Rizal St",
      sex: "Female",
      maritalStatus: "Married"
    }
  };

  function openModal(employeeKey) {
    const employee = employees[employeeKey];
    document.getElementById('modal-title').innerText = employee.name;
    document.getElementById('modal-content').innerHTML = `
      <strong>Job Title:</strong> ${employee.jobTitle}<br>
      <strong>Department:</strong> ${employee.department}<br>
      <strong>Email:</strong> ${employee.email}<br>
      <strong>Contact No:</strong> ${employee.contact}<br>
      <strong>Address:</strong> ${employee.address}<br>
      <strong>Sex:</strong> ${employee.sex}<br>
      <strong>Marital Status:</strong> ${employee.maritalStatus}
    `;
    document.getElementById('modal').classList.remove('hidden');
  }

  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
  }
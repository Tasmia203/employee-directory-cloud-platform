const API = "http://localhost:3000/api/employees";

const container = document.getElementById("employees");
const search = document.getElementById("search");

const addEmployeeBtn = document.getElementById("addEmployee");

const nameInput = document.getElementById("name");
const positionInput = document.getElementById("position");
const departmentInput = document.getElementById("department");
const emailInput = document.getElementById("email");

let employees = [];

let editingId = null;

// Load employees from backend
async function fetchEmployees() {

    try {

        const response = await fetch(API);

        employees = await response.json();

        displayEmployees(employees);

    } catch (error) {

        console.error("Error loading employees:", error);

    }

}

// Display employees
function displayEmployees(list) {

    container.innerHTML = "";

    list.forEach(employee => {

        container.innerHTML += `
        <div class="employee-card">

            <div class="employee-info">

                <h3>${employee.name}</h3>

                <p><strong>Position:</strong> ${employee.position}</p>

                <p><strong>Department:</strong> ${employee.department}</p>

                <p><strong>Email:</strong> ${employee.email}</p>

            </div>

            <div class="actions">

                <button onclick="editEmployee(${employee.id})" class="edit">
                    Edit
                </button>

                <button onclick="deleteEmployee(${employee.id})" class="delete">
                    Delete
                </button>

            </div>

        </div>
        `;

    });

}

// Search employees
search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    const filtered = employees.filter(employee =>

        employee.name.toLowerCase().includes(value) ||

        employee.position.toLowerCase().includes(value) ||

        employee.department.toLowerCase().includes(value) ||

        employee.email.toLowerCase().includes(value)

    );

    displayEmployees(filtered);

});

// Add employee
addEmployeeBtn.addEventListener("click", async () => {

    const employee = {

        name: nameInput.value,
        position: positionInput.value,
        department: departmentInput.value,
        email: emailInput.value

    };

    if (
        employee.name === "" ||
        employee.position === "" ||
        employee.department === "" ||
        employee.email === ""
    ) {

        alert("Please fill in all fields.");

        return;

    }

    try {

        if (editingId === null) {

            await fetch(API, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(employee)

            });

        } else {

            await fetch(`${API}/${editingId}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(employee)

            });

            editingId = null;

            addEmployeeBtn.textContent = "Add Employee";

        }

        nameInput.value = "";
        positionInput.value = "";
        departmentInput.value = "";
        emailInput.value = "";

        fetchEmployees();

    } catch (error) {

        console.error(error);

    }

});

// Initial load
fetchEmployees();

async function deleteEmployee(id) {

    if (!confirm("Delete this employee?")) {
        return;
    }

    try {

        await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        fetchEmployees();

    } catch (error) {

        console.error("Error deleting employee:", error);

    }

}

function editEmployee(id) {

    const employee = employees.find(emp => emp.id == id);

    if (!employee) return;

    nameInput.value = employee.name;
    positionInput.value = employee.position;
    departmentInput.value = employee.department;
    emailInput.value = employee.email;

    editingId = id;

    addEmployeeBtn.textContent = "Update Employee";
}
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
}
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London"
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');

for (let student of studentsList){
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    row.appendChild(nameCell);
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);

}
document.body.appendChild(table);

/*

1. Crear la base con document.createElement('table');


1.a Iterar sobre la lista:

for (const student of studentsList) {
    2. Crear la fila
    const row = document.createElement('tr');

    3. Crear y llenar celda de Nombre

    const nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    row.appendChild(nameCell);

    4. Crear y llenar celda de Ubicación

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    5. Agregar la fila terminada a la tabla

    table.appendChild(row);
}

    6. Finalmente, poner la tabla en el HTML

    document.body.appendChild(table);

*/
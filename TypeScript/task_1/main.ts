interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Esta propiedad funciona gracias al [key: string]: any =)
};

console.log(teacher3);

interface Directors extends Teacher{
    numberOfReports: number;
}

interface printTeacher{
    (firstName: string, lastName: string):void 
}

const inicialApellido: printTeacher = (first, last) => {
    console.log(`${first[0]}. ${last}`);
}

inicialApellido(teacher3.firstName, teacher3.lastName);
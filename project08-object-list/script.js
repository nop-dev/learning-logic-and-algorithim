const pacients = [
    {
        nome: "Yuri",
        age: 17,
        weight: 70,
        height: 170,
    },
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190,
      },
      {
        name: "Alexandra",
        age: 27,
        weight: 70,
        height: 170,
      },
      {
        name: "Carlos",
        age: 42,
        weight: 90,
        height: 180,
      },
    ]

    // Acessar um dado, dentro de um objeto, dentro de um array:
    alert(pacients[0].age)
    
let patientsNames = []

for(let patient of patients) { // Para um paciente, dos pacientes faça o que está no bloco...
  patientsNames.push(patient.name)
}

alert(patientsNames)
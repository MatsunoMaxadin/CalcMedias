
// declarando variáveis
//unidades
let uni1 = document.getElementById("uni1");
let uni2 = document.getElementById("uni2");
let uni3 = document.getElementById("uni3");
let uni4 = document.getElementById("uni4");
let uni5 = document.getElementById("uni5");

//displays

let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");

//inputs gerais

let turma = document.getElementById("turma");
let matéria = document.getElementById("materia");
let media = document.getElementById("media");
let nome = document.getElementById("nome");

//variáveis para funções

let a = 3;
let result = document.getElementById("result");
let form = document.getElementById("form");
//funções

//changeUni 
const changeUni = (num) => {
    
    switch(num) {
        
        case '3':
        fourth.style.display = "none";
        fifth.style.display =  "none";
        a = 3;
        break;
        
        case '4':
        
        fourth.style.display = "flex";
        fifth.style.display =  "none";
        a = 4;
        break;
        
        case '5':
        
        fourth.style.display =  "flex";
        fifth.style.display =  "flex";
        a = 5;
        break;
        
    };
    
    
};

//getMedia

const getAvg = () => {
    let uni1 = document.getElementById("uni1");
    let uni2 = document.getElementById("uni2");
    let uni3 = document.getElementById("uni3");
    let uni4 = document.getElementById("uni4");
    let uni5 = document.getElementById("uni5");
    
    let notas = [
    uni1.value, uni2.value, uni3.value, uni4.value, uni5.value,
    
    ];
    let notasValue = []
    let sum = 0;
    
    for (let i = 1; i <= a; i++) {
        
        notasValue.push(Number(notas[i - 1]));
        console.log(notasValue);
    }
    
    for (let i in notasValue) {
        
        sum += notasValue[i];
        
    }
    
    
    console.log(sum/a);
    
    return sum / a;
    
    
    
};

// getValues


const getValues = () => {
    
    let student = {
        
        turma: turma.value,
        matéria: matéria.value,
        med: Number(media.value),
        nome: nome.value,
        media: getAvg(),
        
    };
    
    
    return student;
    
};


// cleanUp

const cleanUp = () => {
    
    uni1.value = '';
    uni2.value = '';
    uni3.value = '';
    uni4.value = '';
    uni5.value = '';
    nome.value = '';
    
    
};


// displayResults


const displayResults = () => {
    
    let student = getValues();
    let text = student.media >= student.med ? 'Aprovado' : 'reprovado';
    
    let unis = [
    
      student.turma, student.nome, student.matéria,
      student.media, student.med,
    ];
    
    if (unis.includes('')) {
        
        alert ('faltam dados!');
        return;
        
    };
        
        const resultDiv = document.createElement('div');
    resultDiv.className = 'resultdiv';
    
    resultDiv.innerHTML = `
    <h2> Aluno: ${student.nome} </h2>
    <p> Turma: ${student.turma} </p>
    <p> Matéria: ${student.matéria} </p>
    <p> A média final foi de: ${student.media.toFixed(1)} </p>
    <p> status: ${text} </p>
    
    `;
    
    result.appendChild(resultDiv);
    
    resultDiv.style.backgroundColor = text === 'Aprovado'? 'lightGreen' : 'lightCoral';
    cleanUp();
    };
    


//dataConfirm

/*
const dataConfirm = () => {
    
    let student = getValues();
    let unis = [
      document.getElementById("uni1").value,
      document.getElementById("uni2").value,
      document.getElementById("uni3").value,
      document.getElementById("uni4").value,
      document.getElementById("uni5").value,
      student.turma, student.nome, student.matéria,
      student.media, student.med,
    ]
    
    console.log(unis);
    
    if (unis.indexOf(' ') !== -1) {
        
        alert ('faltam dados!');
    } else {
        
        displayResults();
        
    };

    
    
    
    
    
    
};
*/ 


//event

form.addEventListener('click', displayResults);




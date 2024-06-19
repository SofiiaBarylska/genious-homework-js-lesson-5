 /*   ==1==

1)написати об * єкт студента який буде виводити ім * я, спеціальнісь, середній
бал і кількість пропущених занять
2) написати метод який буде виводити цю інформацію
3) написати три варіанти студентів
4) прикріпити знначення за допомогою call apply bind */
/* 
==Bind==
const students = {
    info: function () { 
    
        console.log(`Name is ${this.name}`);
        console.log(`Special is ${this.special}`);
        console.log(`Secondary Score is ${this.secondaryScore}`);
        console.log(`Classed missed id ${this.classesMissed}`);
    },

};

const student1 = {
    name: "Oleh",
    special: "layer",
    secondaryScore: 7.7,
    classesMissed: 3,
};
const student2 = {
    name: "Valey",
    special: "judge",
    secondaryScore: 8.0,
    classesMissed: 0,
};
const student3 = {
    name: "Andrey",
    special: "policy",
    secondaryScore: 5.7,
    classesMissed: 7,
};

students.info.bind(student1)();
students.info.bind(student2)();
students.info.bind(student3)(); */

//==Call==
/* const students = {
    info: function (name, special,secondaryScore, classesMissed) { 
        console.group("Info:");
        console.log(`Name is ${name}`);
        console.log(`Special is ${special}`);
        console.log(`Secondary Score is ${secondaryScore}`);
        console.log(`Classed missed id ${classesMissed}`);
        console.groupEnd();
    },

};
const student1 = { };

const student2 = {
};
const student3 = {
};
students.info.call(student1,"Oleh","layer", 7.7, 3);
students.info.call(student2, "Valey","judge",8.0, 0);
students.info.call(student3, "Andrey","policy", 5.7, 7); */

//Apply

 /* const students = {
    info: function (name, special,secondaryScore, classesMissed) { 
        console.group("Info:");
        console.log(`Name is ${name}`);
        console.log(`Special is ${special}`);
        console.log(`Secondary Score is ${secondaryScore}`);
        console.log(`Classed missed id ${classesMissed}`);
        console.groupEnd();
    },

};
const student1 = { };

const student2 = {
};
const student3 = {
};
students.info.apply(student1,["Oleh","layer", 7.7, 3]);
students.info.apply(student2, ["Valey","judge",8.0, 0]);
students.info.apply(student3, ["Andrey","policy", 5.7, 7]); */
   /*  --2--
Написати дві кнопки і закріпити на них функції
при натисканні на кнопку html - має видати коротке визначення що це таке
при натисканні на кнопку css - має видати коротке визначення що це таке */

/* const button = {
    showItems() {
        console.log("Ця кнопка це:", this.definition );
    },
};

const button1 = {
    definition: "html - стандартизована мова розмітки документів для перегляду вебсторінок у браузері.",
};
const button2 = {
    definition: "css - це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду. ",
};
document.querySelector('#htmlButton').addEventListener("click", button.showItems.bind(button1));
document.querySelector('#cssButton').addEventListener("click", button.showItems.bind(button2)); */
/* --3--
Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
функція має повертати назву товару і вартість
перевірити на варіантах:
1) banana 30, 4,5
2) cherry 58, 1,3
3) jrange 89. 3,4 */

/* const magazine = {
    showInfo: function () {
        console.log(`Name is ${this.name}`);
        console.log(`Price per kg is ${this.pricePerKg}`);
        
    },
    getTotalCost: function () {
        return `The total cost of ${this.name} is ${this.pricePerKg * this.quantity}`;
    }
};
let tovar1 = {
    name: "banana",
    pricePerKg: 30,
    quantity: 4.5,
    
};
let tovar2 = {
    name: "cherry",
    pricePerKg: 58,
    quantity: 1.3,
};
let tovar3 = {
    name: "jrange",
    pricePerKg: 89,
    quantity: 3.4,
};

magazine.showInfo.apply(tovar1);
console.log(magazine.getTotalCost.apply(tovar1));
magazine.showInfo.apply(tovar2);
console.log(magazine.getTotalCost.apply(tovar2));
magazine.showInfo.apply(tovar3);
console.log(magazine.getTotalCost.apply(tovar3)); */
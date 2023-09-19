import dataBase from "./CarDataBase";

// 1. Obtener el costo total de los carros en inventario

function costoTotal(db) {
  const total = db.reduce((acc, carro) => acc + carro.cost ,0);
  return [total];
}

costoTotal(dataBase);

// 2. Obtener el promedio de los precios de los carros pares

function promedio(db) {
  const soloparess = db.filter((carro, index) => index % 2 === 0);

  const costototalsoloPARES = solopares.reduce{
    (acc, carro) => acc+ carro.test , 0
  };
  const costopromedioPARES => costototalsoloPARES / solopares.length;
  return [costopromedioPARES];
}

promedio(dataBase);

// ### 3. Obtener los carros Híbridos

function carrosHibridos(db) {
  const solohibridos = db.filter((carro) => carro.fuel_type === "Hybrid");
    return solohibridos;
}


carrosHibridos(dataBase);

// ### 4. Obtener el producto más caro

function carroMasCaro(db) {
 const carrocostoso =db.reduce{
        (acc, carro) => {
            if (acc?.cost < carro?.cost) {
                return carro;
            }
            else {
                return acc;
            }
        },
        { cost: 0 }
    };
    return carrocostoso;
}

carroMasCaro(dataBase);

// ## 5. Agregar un nuevo producto

function nuevoCarro(db) {
   const newcar =[
        ...db,
        {
            car_name: "Mercedes-Benz",
            cost: 98089,
            model: "sedan",
            manufacturer: "Honda",
            color: "Red",
            num_doors: 2,
            cylinder_capacity: 5307,
            fuel_type: "Hybrid",
            transmission: "Manual",
            drive_type: "Rear_wheel drive",
            horsepower: 787,
        },
    ];
    return newcar;
}

nuevoCarro(dataBase);

// ### 6. Eliminar el carro mas económico

function eliminarCarro(db) {
  const menoscostoso = db.reduce{
        (acc.carro) => {
            if (acc?.cost > carro?.cost) {
                return carro;
            } else {
                return acc;
            }
        },
        {cost: 99999999999}
    };
    const sinElMenoscostoso = db.filter{
        (carro) => carro.cost != menoscostoso.cost
    };
    return sinElMenoscostoso;
}

eliminarCarro(dataBase);

// aca se exportan todas las funciones para realizar el testing sobre tu solución
export {
  costoTotal,
  promedio,
  carrosHibridos,
  carroMasCaro,
  nuevoCarro,
  eliminarCarro,
};

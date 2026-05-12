const cars = [
    {
        id: "porsche_911",
        name: "Porsche 911",
        brand: "Porsche",
        image: "assets/porsche.png",
        price: "R$ 850.000",
        tagline: "A Máquina Atemporal",
        specs: {
            engine: "3.0L Twin-Turbo Boxer 6",
            horsepower: "379 cv",
            acceleration: "0-100 km/h em 4.0s",
            top_speed: "293 km/h",
            drivetrain: "RWD (Traseira)",
            transmission: "8 marchas PDK"
        },
        description: "O Porsche 911 é o carro esportivo por excelência. Com sua silhueta inconfundível, motor traseiro e dirigibilidade telepática, ele continua sendo a referência em performance e usabilidade diária."
    },
    {
        id: "ferrari_red",
        name: "Ferrari F8 Tributo",
        brand: "Ferrari",
        image: "assets/ferrari.png",
        price: "R$ 3.500.000",
        tagline: "Uma Celebração à Excelência",
        specs: {
            engine: "3.9L Twin-Turbo V8",
            horsepower: "720 cv",
            acceleration: "0-100 km/h em 2.9s",
            top_speed: "340 km/h",
            drivetrain: "RWD (Traseira)",
            transmission: "7 marchas dupla embreagem"
        },
        description: "A F8 Tributo é a expressão máxima da berlinetta de dois lugares com motor central-traseiro. É um carro com características únicas e presta homenagem ao motor V8 mais potente da história da Ferrari."
    },
    {
        id: "tesla_model_s",
        name: "Tesla Model S Plaid",
        brand: "Tesla",
        image: "assets/tesla.png",
        price: "R$ 1.200.000",
        tagline: "Além do Absurdo",
        specs: {
            engine: "3 Motores Elétricos",
            horsepower: "1.020 cv",
            acceleration: "0-100 km/h em 2.1s",
            top_speed: "322 km/h",
            drivetrain: "AWD (Integral)",
            transmission: "1 marcha direta"
        },
        description: "Com a maior autonomia e a aceleração mais rápida de qualquer veículo elétrico em produção, o Model S Plaid é o sedã de maior desempenho já construído."
    }
];

export default cars;

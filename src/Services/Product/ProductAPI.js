const ProductList = [{
        span: {
            tag: 'NUEVA',
            year: 2022,
        },
        name: 'X-Caliber 8',
        description: 'La X-Caliber 8 es una bicicleta de cross country diseñada para rodar rápido y recorrer rutas largas por senderos. Se ha fabricado prestando especial atención a la calidad, al precio y a los componentes que marcan realmente una diferencia en el rendimiento. La transmisión Shimano 1x, la horquilla RockShox y los frenos de disco hidráulico la convierten en una excelente elección para los nuevos ciclistas de montaña y corredores de cross country que buscan velocidad y diversión en sus aventuras por los singletrack.',
        price: 1349.00,
        img: {
            src: 'https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber8_22_35069_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
            alt: 'X-Caliber 8',
        },
        variants: [{
            name: 'Satin Lithium Grey',
            color: 'grey',
            img: 'https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber8_22_35069_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440'
        }, {
            name: 'Crystal White',
            color: 'white',
            img: 'https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber8_22_35069_B_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440'
        }],
        itemStore: {
            initial: 1,
            stock: 2
        }
    },
    {
        name: 'Supercaliber 9.9 XX1 AXS',
        img: {
            src: 'https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber8_22_35069_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
            alt: 'Supercaliber 9.9 XX1 AXS',
        },
        itemStore: {
            initial: 5,
            stock: 5
        }
    },
    {
        name: 'Top Fuel 9.9 XX1 AXS',
        img: {
            src: 'https://trek.scene7.com/is/image/TrekBicycleProducts/TopFuel99XX1AXS_22_35326_B_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
            alt: 'Top Fuel 9.9 XX1 AXS',
        },
        itemStore: {
            initial: 4,
            stock: 15
        }
    },
    {
        name: 'Procaliber 9.8',
        img: {
            src: 'https://trek.scene7.com/is/image/TrekBicycleProducts/Procaliber98_22_35115_A_Primary?$responsive-pjpg$&cache=on,on&wid=1024&hei=768',
            alt: 'Procaliber 9.8',
        },
        itemStore: {
            initial: 13,
            stock: 12
        }
    },
];

const getProductList = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve(ProductList);
        }, 2000);

    });
const getProduct = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve(ProductList[0]);
        }, 2000);

    });

export { getProductList, getProduct }
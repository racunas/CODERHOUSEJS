class Product {
    constructor(image,soapName,description,price,relevant) {
        this.image = image;
        this.soapName = soapName;
        this.description = description;
        this.price = price;
        this.relevant = relevant;
    }
}

const Products = [];

Products.push(new Product("vista/assets/images/soap-product.jpg","Tea Totaler","Para una piel limpia y sin impurezas","200",false));
Products.push(new Product("vista/assets/images/soap-product.jpg","Jason And The Argan Oil","Una melena sedosa y con aroma a rosas","255",true));
Products.push(new Product("vista/assets/images/soap-product.jpg","Aromaco","Refrescante y efectivo","175",false));
Products.push(new Product("vista/assets/images/soap-product.jpg","Outback Mate","El que quiere azul celeste, que Outback Mate pruebe","170",true));
Products.push(new Product("vista/assets/images/soap-product.jpg","Aromaco","Refrescante y efectivo","175",false));
Products.push(new Product("vista/assets/images/soap-product.jpg","Avo Good Easter","El Millennial de los baños","240",true));
Products.push(new Product("vista/assets/images/soap-product.jpg","Sleepy","Una nube de ensueño","150",true));
Products.push(new Product("vista/assets/images/soap-product.jpg","Sultana Of Soap","Suavidad majestuosa","155",true));
Products.push(new Product("vista/assets/images/soap-product.jpg","Respect Your Elders","Tu ritual diario","139",false));
Products.push(new Product("vista/assets/images/soap-product.jpg","Sea Vegetable","Piel suave a la vista","150",false));
Products.push(new Product("vista/assets/images/soap-product.jpg","Sexy Peel","Seducción a flor de piel.","140",false));

localStorage.setItem("products", JSON.stringify(Products));
//console.log(Products)

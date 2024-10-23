let bolosJson = [
    {
        id: 1,
        name: 'Delícia de Chocolate',
        img: 'src/imagens_dos_bolos/bolo1.png',
        price: [20.00, 23.00, 25.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Bolo de massa de chocolate, recheio de trufado de chocolate ao leite Dois Frades®, cobertura de trufado meio amargo, raspas de chocolate ao leite Dois Frades® e cerejas (decorativas).'
      },
      {
        id: 2,
        name: 'Maracujá',
        img: 'src/imagens_dos_bolos/bolo2.png',
        price: [21.00, 24.00, 26.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Bolo de massa branca, recheio de mousse de maracujá, cobertura de mousse de maracujá e polpa.'
      },
      {
        id: 3,
        name: 'Bolo Pistache',
        img: 'src/imagens_dos_bolos/bolo3.png',
        price: [23.00, 26.00, 28.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Bolo de massa branca, recheios de trufado e aerado de pistache, cobertura de trufado de pistache e pistache granulado.'
      },
      {
        id: 4,
        name: 'Morango com NUTELLA',
        img: 'src/imagens_dos_bolos/bolo4.png',
        price: [25.00, 28.00, 30.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Bolo de massa de chocolate, recheio de trufado com NUTELLA® e morangos, cobertura de trufado de chocolate ao leite e finalizado com NUTELLA® e morangos.'
      },
      {
        id: 5,
        name: 'Crocante',
        img: 'src/imagens_dos_bolos/bolo5.png',
        price: [24.00, 27.00, 29.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Bolo de massa branca, recheio de creme gelado e doce de leite com crocante de amendoim, cobertura de marshmallow, crocante de amendoim e cerejas (decorativas).'
      }
];

let salgadosJson = [
  {
      id: 1,
      name: 'Torta de Frango',
      img: 'src/foto_dos_salgados/tortaDeFrango.png',
      price: [24.00, 32.00, 48.00],
      sizes: [
        '6 unidades',
        '8 unidades',
        '12 unidades'
      ],
      description: 'Prepare-se para se deliciar com a nossa torta de frango assada! A combinação entre massa dourada, recheio de frango desfiado e temperos especiais irresistíveis vai te conquistar.'
    },
    {
      id: 2,
      name: 'Torta de Carne Seca com Requeijão',
      img: 'src/foto_dos_salgados/tortaDeCarneSecaComRequeijão.png',
      price: [24.00, 32.00, 48.00],
      sizes: [
        '6 unidades',
        '8 unidades',
        '12 unidades'
      ],
      description: 'Massa dourada e crocante, recheio generoso de carne seca desfiada e requeijão cremoso. Hummm. Cada mordida é uma experiência de sabor intensa e prazerosa.'
    },
    {
      id: 3,
      name: 'Torta de Calabresa com Requeijão',
      img: 'src/foto_dos_salgados/calabresa.png',
      price: [24.00, 32.00, 48.00],
      sizes: [
        '6 6 unidades',
        '8 unidades',
        '12 unidades'
      ],
      description: 'Recompense seu paladar com nossa deliciosa torta de calabresa com requeijão! Com massa crocante e dourada, à base de farinha de trigo, recheada com pedaços suculentos de calabresa e um cremoso requeijão que derrete na boca.'
    },
    {
      id: 4,
      name: 'Pastel de Carne',
      img: 'src/foto_dos_salgados/torta.png',
      price: [24.00, 32.00, 48.00],
      sizes: [
        '6 6 unidades',
        '8 unidades',
        '12 unidades'
      ],
      description: 'O clássico queridinho! Massa assada, com base de farinha de trigo, recheio de carne moída e temperos especiais.'
    },
    {
      id: 5,
      name: 'Pastel de Presunto e Queijo',
      img: 'src/foto_dos_salgados/torta.png',
      price: [24.00, 32.00, 48.00],
      sizes: [
        '6 unidades',
        '8 unidades',
        '12 unidades'
      ],
      description: 'Renda-se à perfeita harmonia entre o presunto suculento e o queijo derretido, envoltos em uma massa dourada e crocante, feita à base de farinha de trigo. Uma escolha clássica que nunca decepciona os paladares mais exigentes.'
    }
];

let bebidasJson = [
  {
      id: 1,
      name: 'Água',
      img: 'src/bebidas/agua.webp',
      price: [2.00, 4.00, 6.00],
      sizes: [
        '500ml',
        '8 fatias',
        '12 fatias'
      ],
    },
    {
      id: 2,
      name: 'Coca-cola',
      img: 'src/bebidas/coca.jpg',
      price: [5.00, 7.00, 10.00],
      sizes: [
        '6 fatias',
        '8 fatias',
        '12 fatias'
      ],
    },
    {
      id: 3,
      name: 'Chocolate Quente',
      img: 'src/bebidas/chocolate.jpeg',
      price: [6.00, 8.00, 12.00],
      sizes: [
        '6 fatias',
        '8 fatias',
        '12 fatias'
      ],
    },
    {
      id: 4,
      name: 'Suco de Laranja Natural',
      img: 'src/bebidas/laranja.jpg',
      price: [8.00, 11.00, 15.00],
      sizes: [
        '6 fatias',
        '8 fatias',
        '12 fatias'
      ],
    },
    {
      id: 5,
      name: 'Café',
      img: 'src/bebidas/cafe.png',
      price: [6.00, 7.00, 8.00],
      sizes: [
        '6 fatias',
        '8 fatias',
        '12 fatias'
      ],
    }
];
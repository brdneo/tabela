/*/ Modal /*/
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal-details");

function showModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

overlay.addEventListener("click", hideModal);
modal.addEventListener("click", hideModal);

function hideModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

/*/ Listagem do Produtos /*/

const produtos = {
    atum: [
        {
            nome: "Atum CELLIER 500g",
            preco: "17,69",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 8702,
        },
        {
            nome: "Atum Ralado em Lata Marsul 400g",
            preco: "15,29",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 659,
        },
    ],
    bobina: [
        {
            nome: "Bobina 20x30 - 1kg",
            preco: "14,49",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 234234,
        },
        {
            nome: "Bobina 25x35 - 2kg",
            preco: "14,49",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 234235,
        },
        {
            nome: "Bobina 30x40 - 3kg",
            preco: "14,49",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 234236,
        },
        {
            nome: "Bobina 35x50 - 5kg",
            preco: "14,49",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 234237,
        },
        {
            nome: "Bobina 40x60 - 10kg",
            preco: "14,49",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 234238,
        },
        {
            nome: "Bobina 50x70 - 15kg",
            preco: "14,49",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 234239,
        },
        {
            nome: "Bobina 60x80 - 20kg",
            preco: "14,49",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 234240,
        },
        {
            nome: "Sacola 25x35 - PP",
            preco: "13,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 234241,
        },
        {
            nome: "Sacola 30x40 - P",
            preco: "13,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 234242,
        },
        {
            nome: "Sacola 40x50 - M",
            preco: "13,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 234243,
        },
        {
            nome: "Sacola 50x60 - G",
            preco: "13,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 234244,
        },
    ],
    calabresa: [
        {
            nome: "Linguiça Calabresa Reta Sadia 2,5kg",
            preco: "19,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 18770,
        },
        {
            nome: "Linguiça Calabresa Reta Prieto",
            preco: "14,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 120254,
        },
        {
            nome: "Linguiça Toscana Congelada Prieto",
            preco: "13,69",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 110106,
        },
        {
            nome: "Linguiça Calabresa Perdigão 2,5kg",
            preco: "18,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 135,
        },
    ],
    carne: [
        {
            nome: "Banha Aurora 1kg",
            preco: "10,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 5,
        },
        {
            nome: "Banha Aurora Nobre 1kg",
            preco: "10,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 6,
        },
        {
            nome: "Paleta Embutido Deligourmet",
            preco: "19,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 7,
        },
        {
            nome: "Lombinho Canadense Prieto",
            preco: "25,50",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 78,
        },
        {
            nome: "Frango Empanado Seara 100g",
            preco: "1,19",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 79,
        },
        {
            nome: "Bacon de Paleta Prieto 2,5kg",
            preco: "19,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 80,
        },
        {
            nome: "Paleta em Cubo Deligourmet 1kg",
            preco: "19,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 81,
        },
        {
            nome: "Peito de Peru Defumado",
            preco: "36,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 82,
        },
        {
            nome: "Lombinho Canadense Seara",
            preco: "31,99",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 83,
        },
    ],
    charque: [
        {
            nome: "Ponta de Agulha Curada JA 6x5",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 32,
            preco: "31,99",
        },
        {
            nome: "Ponta de Agulha Normal JA 6x5",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 33,
            preco: "29,99",
        },
        {
            nome: "Dianteiro Normal JA 6x5",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 34,
            preco: "31,00",
        },
        {
            nome: "Ponta de Agulha Manta Curado JA 1x30",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 35,
            preco: "30,99",
        },
        {
            nome: "Coxão Duro JA 6x5",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 363,
            preco: "38,00",
        },
    ],
    diversos: [
        {
            nome: "Molho de Tomate Pizza Bonare 1,7kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 536,
            preco: "9,99",
        },
        {
            nome: "Molho de Tomate Trad BONARE 1,7kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 356,
            preco: "9.99",
        },
        {
            nome: "Farinha de Trigo FINNA 10X1KG",
            unidade_medida: "FD",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 7737,
            preco: "44.99",
        },
        {
            nome: "Orégano CAMPOMESA 1kg",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 33338,
            preco: "18.99",
        },
        {
            nome: "Pimenta Calabresa 1kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 33339,
            preco: "27.49",
        },
        {
            nome: "Milho Verde PREDILECTA 1,7Kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 40,
            preco: "26.39",
        },
        {
            nome: "Ervilha BONARE 1,7Kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 41,
            preco: "24.49",
        },
        {
            nome: "Milho Verde GOIALLI Lata 170g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 42,
            preco: "2.69",
        },
        {
            nome: "Ervilha OLE 170g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 43,
            preco: "2.65",
        },
    ],
    doce: [
        {
            nome: "Doce de Leite Mucuri Tradicional 350g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 123,
            preco: "8,49",
        },
        {
            nome: "Goiabada Cremosa Popular Balde 4,6kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 223,
            preco: "26,99",
        },
    ],
    insumo: [
        {
            nome: "Azeitona Verde Fatiada Camponesa 2kg",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 233,
            preco: "37,99",
        },
        {
            nome: "Azeitona Verde c/ Caroço 2kg",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "10/04/2024",
            codigo_venda: 23333,
            preco: "26,49",
        },
        {
            nome: "Azeitona Verde s/ Caroço 2kg",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "10/04/2024",
            codigo_venda: 22233,
            preco: "37,99",
        },
        {
            nome: "Azeitona Preta Fatiada 2kg",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 233233,
            preco: "47.99",
        },
        {
            nome: "Azeitona Preta s/ Caroço 2kg",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 234324,
            preco: "48.49",
        },
        {
            nome: "Azeitona Preta c/ Caroço 2kg",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 23545,
            preco: "42.99",
        },
        {
            nome: "Cebolinha Marinada CAMPOMESA 2kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 236,
            preco: "32.79",
        },
        {
            nome: "Tomate Seco Balde 2kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 237,
            preco: "33.49",
        },
    ],
    "manteiga-margarina": [
        {
            nome: "balde diminas 9,6kg",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 309,
            preco: "33,99",
        },
        {
            nome: "balde oriente com sal 10kg",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 903,
            preco: "32,99",
        },
        {
            nome: "balde fazenda (10, 12 ou 15kg)",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 380,
            preco: "24,99",
        },
        {
            nome: "pote diminas 500g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 308,
            preco: "17,49",
        },
        {
            nome: "pote diminas 200g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 563,
            preco: "6,99",
        },
        {
            nome: "pote cotoches 500g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 453,
            preco: "18,99",
        },
    ],
    "presunto-apresuntado": [
        {
            nome: "Presunto Imperio",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 5463,
            preco: "13,49",
        },
        {
            nome: "Presunto Frico",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 103,
            preco: "14,49",
        },
        {
            nome: "Apresuntado Ouro Prieto",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 102,
            preco: "12,99",
        },
        {
            nome: "Apresuntado Deligourmet",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 101203,
            preco: "12,49",
        },
        {
            nome: "Apresuntado Frico",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 106503,
            preco: "13,29",
        },
        {
            nome: "Mortadela Defumada Seara",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 123003,
            preco: "14,99",
        },
    ],
    fresco: [
        {
            nome: "Queijo Parmesão Fracionado Oxente",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1043,
            preco: "39,99",
        },
        {
            nome: "Queijo Parmesão Peça ORIENTE",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1054343,
            preco: "37.99",
        },
        {
            nome: "Queijo Parmesão Fracionado DIMINAS",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1044,
            preco: "58.99",
        },
        {
            nome: "Queijo Provolone Mini OXENTE",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1045,
            preco: "39.49",
        },
        {
            nome: "Queijo Provolone OXENTE 2kg",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1046,
            preco: "38.99",
        },
        {
            nome: "Queijo Provolone Defumado DEALE",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1047,
            preco: "38.99",
        },
        {
            nome: "Queijo Reino Cry TINA ROLF",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1048,
            preco: "56.99",
        },
        {
            nome: "Queijo Gouda DONA ROSA (+- 1kg)",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1049,
            preco: "50.99",
        },
        {
            nome: "Queijo Gouda DONA ROSA (+- 500g)",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1050,
            preco: "51.49",
        },
        {
            nome: "Queijo Coalho DONA ROSA 3kg",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1051,
            preco: "32.99",
        },
        {
            nome: "Queijo Ricota ORIENTE",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1052,
            preco: "14.99",
        },
        {
            nome: "Queijo Ricota OXENTE",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1053,
            preco: "14.49",
        },
        {
            nome: "Queijo Minas Padrão DIMINAS",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1054,
            preco: "42.79",
        },
        {
            nome: "Creme de Ricota TIROLEZ 200g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1055,
            preco: "5.99",
        },
        {
            nome: "Creme de Minas Frescal TIROLEZ 150g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1056,
            preco: "6.99",
        },
        {
            nome: "Queijo Cottage TIROLEZ 200g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1057,
            preco: "9.49",
        },
        {
            nome: "Queijo Gouda SÃO VICENTE",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 1058,
            preco: "58,99",
        },
    ],
    mussarela: [
        {
            nome: "Tirolez",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 139,
            preco: "34,99",
        },
        {
            nome: "DIMINAS",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 139,
            preco: "30.99",
        },
        {
            nome: "LATVIDA",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 140,
            preco: "26.79",
        },
        {
            nome: "SÃO FELIPE",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 141,
            preco: "26.49",
        },
        {
            nome: "ESTRELA DO SERTÃO",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 142,
            preco: "25.99",
        },
        {
            nome: "OUROBOM",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 143,
            preco: "25.49",
        },
        {
            nome: "JUNIOR",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 144,
            preco: "24.99",
        },
        {
            nome: "MORRO ALTO",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 145,
            preco: "27.50",
        },
        {
            nome: "MUCURI",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 146,
            preco: "30,49",
        },
        {
            nome: "CEDRAZ",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "11/04/2024",
            codigo_venda: 147,
            preco: "24,99",
        },
    ],
    prato: [
        {
            nome: "DIMINAS",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 953,
            preco: "31,99",
        },
        {
            nome: "TIROLEZ",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3,
            preco: "31,49",
        },
        {
            nome: "REAL MINAS",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 20433,
            preco: "28,49",
        },
        {
            nome: "OUROBOM",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 298713,
            preco: "27,99",
        },
        {
            nome: "MORRO ALTO",
            unidade_medida: "KG",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 21673,
            preco: "28,50",
        },
    ],
    seco: [
        {
            nome: "Queijo Ralado Ravi 1kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 4113,
            preco: "33,49",
        },
        {
            nome: "Queijo Ralado Keijao 20x40g",
            unidade_medida: "CX",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 4593,
            preco: "35,99",
        },
    ],
    requeijao: [
        {
            nome: "Bisnaga Mucuri 1,5kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3032,
            preco: "29,99",
        },
        {
            nome: "DUPRATA com Amido 1,5kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3876032,
            preco: "17.29",
        },
        {
            nome: "Bisnaga MUCURI 400g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 30433,
            preco: "8.99",
        },
        {
            nome: "Bisnaga TIROLEZ 250g Trad.",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3034,
            preco: "8.49",
        },
        {
            nome: "Copo TIROLEZ 200g LIGHT",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3035,
            preco: "5.39",
        },
        {
            nome: "Copo TIROLEZ 200g Trad.",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3036,
            preco: "5.39",
        },
        {
            nome: "Bisnaga Cheddar DUPRATA 1,5kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3038,
            preco: "17.49",
        },
        {
            nome: "Bisnaga Cheddar TIROLEZ 1,5kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3039,
            preco: "42.99",
        },
        {
            nome: "Requeijão Bisnaga TIROLEZ 1,5kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3040,
            preco: "41.49",
        },
        {
            nome: "Requeijão Cremoso SOFFICE 1,5kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3041,
            preco: "42.49",
        },
        {
            nome: "Cream Cheese VALE DO PARDO 1,01kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3042,
            preco: "18.69",
        },
        {
            nome: "Recheio Sabor Chocolate LACTOVIDA 1,01kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3043,
            preco: "13.89",
        },
        {
            nome: "Requeijão CREMILLE 1,5kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3044,
            preco: "11.49",
        },
        {
            nome: "Requeijão TOP MILK 1,8kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3045,
            preco: "15.99",
        },
        {
            nome: "Requeijão TOP MILK 250g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3046,
            preco: "3.19",
        },
        {
            nome: "Requeijão CREMILLE 200g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3047,
            preco: "3.15",
        },
        {
            nome: "Bisnaga Cheddar TOP CHEDDAR 1,2kg",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3048,
            preco: "12.79",
        },
        {
            nome: "Cheddar TOP CHEDDAR 250g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3049,
            preco: "3.19",
        },
        {
            nome: "Copo MUCURI 200g",
            unidade_medida: "UN",
            estoque_atual: 20,
            ultima_atualizacao: "07/04/2024",
            codigo_venda: 3050,
            preco: "5.19",
        },
    ],
};

const selectCategoria = document.getElementById("categoria");
const produtoContainer = document.querySelector(".product-info");
const produtoWrapper = document.querySelector(".product-wrapper");
const produtoTitulo = document.querySelector(".product-title");

selectCategoria.addEventListener("change", (e) => {
    const optionValue = e.target.value;
    const optionTexto = e.target.options[e.target.selectedIndex].textContent;

    if (optionValue !== "") {
        produtoContainer.classList.add("active");
        produtoTitulo.textContent = optionTexto;

        const produtosDaCategoria = produtos[optionValue];
        produtoWrapper.innerHTML = ""; // Limpa produtos anteriores

        if (produtosDaCategoria) {
            produtosDaCategoria.forEach(function (prod) {
                const productItem = document.createElement("div");
                productItem.classList.add("product-item");
                productItem.id = prod.codigo_venda;

                const productName = document.createElement("p");
                productName.classList.add("product-name", "border-box");
                productName.textContent = prod.nome;

                const productUnit = document.createElement("input"); // Novo input para a unidade de medida
                productUnit.classList.add("product-unit", "border-box");
                productUnit.type = "text";
                productUnit.value = prod.unidade_medida;

                const productPrice = document.createElement("p");
                productPrice.classList.add("product-price", "border-box");
                productPrice.textContent = `R$${prod.preco}`;

                productItem.appendChild(productName);
                productItem.appendChild(productUnit); // Adiciona o input da unidade de medida
                productItem.appendChild(productPrice);

                produtoWrapper.appendChild(productItem);

                productItem.addEventListener("click", (e) => {
                    const modalDetails =
                        document.querySelector(".modal-details");
                    modalDetails.innerHTML = "";

                    const p = search(e.target.parentNode.id); // busca pelo id da tag .product-item e retorna o produto que tem o codigo_venda com esse mesmo valor
                    console.log(p);

                    const nome = document.createElement("p");
                    nome.textContent = `Produto: ${p.nome}`;

                    const preco = document.createElement("p");
                    preco.textContent = `Valor: ${p.preco}`;

                    const medida = document.createElement("p");
                    medida.textContent = `unidade de medida: ${p.unidade_medida}`;

                    const estoque = document.createElement("p");
                    estoque.textContent = `estoque atual: ${p.estoque_atual}`;

                    const atualizacao = document.createElement("p");
                    atualizacao.textContent = `ultima atualização: ${p.ultima_atualizacao}`;

                    const codigo = document.createElement("p");
                    codigo.textContent = `código de venda: ${p.codigo_venda}`;

                    modalDetails.appendChild(nome);
                    modalDetails.appendChild(preco);
                    modalDetails.appendChild(medida);
                    // modalDetails.appendChild(estoque);
                    modalDetails.appendChild(atualizacao);
                    // modalDetails.appendChild(codigo);

                    showModal();
                });
            });
        }
    } else {
        produtoContainer.classList.remove("active");
    }
});

function search(id) {
    for (const categoria in produtos) {
        for (const item of produtos[categoria]) {
            if (item.codigo_venda == id) {
                return item;
            }
        }
    }
}

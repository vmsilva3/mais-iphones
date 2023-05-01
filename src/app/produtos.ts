export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "iPhone 12 128GB", preco: 3970.00, descricaoPreco: "À vista no PIX", imagem: "./assets/iphone-12.jpg", quantidadeEstoque: 59 },
    { id: 2, descricao: "iPhone 13 128GB", preco: 4370.00, descricaoPreco: "À vista no PIX", imagem: "./assets/iphone-13.jpg", quantidadeEstoque: 74 },
    { id: 3, descricao: "iPhone 14 Pro Max 128GB", preco: 7370.00, descricaoPreco: "À vista no PIX", imagem: "./assets/iphone-14pm.jpg", quantidadeEstoque: 19 },
    { id: 4, descricao: "Apple Watch Ultra 49mm - GPS + Cellular", preco: 5470.00, descricaoPreco: "À vista no PIX", imagem: "./assets/ultra.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Apple Watch Series 8 41mm - GPS", preco: 2870.00, descricaoPreco: "À vista no PIX", imagem: "./assets/series8.jpg", quantidadeEstoque: 17 },
    { id: 6, descricao: "iPad 9ª Geração 64GB", preco: 2170.00, descricaoPreco: "À vista no PIX", imagem: "./assets/ipad-9.jpg", quantidadeEstoque: 43 },
    { id: 7, descricao: "iPad Pro 4ª Geração Chip M2 128GB - Tela de 11 pol.", preco: 5670.00, descricaoPreco: "À vista no PIX", imagem: "./assets/ipad-1.jpg", quantidadeEstoque: 15 },
    { id: 8, descricao: "iPad Pro 6ª Geração Chip M2 128GB - Tela de 12.9 pol.", preco: 7670.00, descricaoPreco: "À vista no PIX", imagem: "./assets/ipad-2.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Apple Pencil 2ª Geração", preco: 897.00, descricaoPreco: "À vista no PIX", imagem: "./assets/pencil.jpg", quantidadeEstoque: 89 },
    { id: 10, descricao: "AirPods Pro 2ª Geração", preco: 1770.00, descricaoPreco: "À vista no PIX", imagem: "./assets/airpods-pro-2.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "AirPods Max", preco: 4170.00, descricaoPreco: "À vista no PIX", imagem: "./assets/airpods-max.jpg", quantidadeEstoque: 12 },
    { id: 12, descricao: "Macbook Air Chip M1 8GB 256GB SSD", preco: 6070.00, descricaoPreco: "À vista no PIX", imagem: "./assets/macbook-air-m1.jpg", quantidadeEstoque: 10 },
    { id: 13, descricao: "Macbook Air Chip M2 16GB 512GB SSD", preco: 12270.00, descricaoPreco: "À vista no PIX", imagem: "./assets/macbook-air-m2.jpg", quantidadeEstoque: 49 },
    { id: 14, descricao: "Macbook Pro Chip M2 8GB 256GB SSD", preco: 9270.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mac-pro-m2.jpg", quantidadeEstoque: 22 },
    { id: 15, descricao: "Macbook Pro Chip M2 Pro 16GB 512GB SSD - Tela 14 pol.", preco: 13870.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mac-pro-m2pro.jpg", quantidadeEstoque: 37 },
]
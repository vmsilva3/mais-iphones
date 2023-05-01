"use strict";(self.webpackChunkmais_iphones=self.webpackChunkmais_iphones||[]).push([[769],{1769:(M,u,i)=>{i.r(u),i.d(u,{ProdutosModule:()=>x});var p=i(6895),s=i(9541),o=i(1571);const g=[{id:1,descricao:"iPhone 12 128GB",preco:3970,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/iphone-12.jpg",quantidadeEstoque:59},{id:2,descricao:"iPhone 13 128GB",preco:4370,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/iphone-13.jpg",quantidadeEstoque:74},{id:3,descricao:"iPhone 14 Pro Max 128GB",preco:7370,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/iphone-14pm.jpg",quantidadeEstoque:19},{id:4,descricao:"Apple Watch Ultra 49mm - GPS + Cellular",preco:5470,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/ultra.jpg",quantidadeEstoque:10},{id:5,descricao:"Apple Watch Series 8 41mm - GPS",preco:2870,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/series8.jpg",quantidadeEstoque:17},{id:6,descricao:"iPad 9\xaa Gera\xe7\xe3o 64GB",preco:2170,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/ipad-9.jpg",quantidadeEstoque:43},{id:7,descricao:"iPad Pro 4\xaa Gera\xe7\xe3o Chip M2 128GB - Tela de 11 pol.",preco:5670,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/ipad-1.jpg",quantidadeEstoque:15},{id:8,descricao:"iPad Pro 6\xaa Gera\xe7\xe3o Chip M2 128GB - Tela de 12.9 pol.",preco:7670,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/ipad-2.jpg",quantidadeEstoque:10},{id:9,descricao:"Apple Pencil 2\xaa Gera\xe7\xe3o",preco:897,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/pencil.jpg",quantidadeEstoque:89},{id:10,descricao:"AirPods Pro 2\xaa Gera\xe7\xe3o",preco:1770,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/airpods-pro-2.jpg",quantidadeEstoque:10},{id:11,descricao:"AirPods Max",preco:4170,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/airpods-max.jpg",quantidadeEstoque:12},{id:12,descricao:"Macbook Air Chip M1 8GB 256GB SSD",preco:6070,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/macbook-air-m1.jpg",quantidadeEstoque:10},{id:13,descricao:"Macbook Air Chip M2 16GB 512GB SSD",preco:12270,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/macbook-air-m2.jpg",quantidadeEstoque:49},{id:14,descricao:"Macbook Pro Chip M2 8GB 256GB SSD",preco:9270,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mac-pro-m2.jpg",quantidadeEstoque:22},{id:15,descricao:"Macbook Pro Chip M2 Pro 16GB 512GB SSD - Tela 14 pol.",preco:13870,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mac-pro-m2pro.jpg",quantidadeEstoque:37}];let l=(()=>{class t{constructor(){this.produtos=g}getAll(){return this.produtos}getOne(e){return this.produtos.find(r=>r.id==e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function m(t,n){if(1&t&&(o.TgZ(0,"div",2)(1,"a",3),o._UZ(2,"img",4),o.TgZ(3,"h2",5),o._uU(4),o.qZA(),o.TgZ(5,"p",6),o._uU(6),o.ALo(7,"currency"),o.qZA(),o.TgZ(8,"p",7),o._uU(9),o.qZA(),o.TgZ(10,"button",8),o._uU(11,"Comprar"),o.qZA()()()),2&t){const e=n.$implicit;o.xp6(1),o.MGl("routerLink","/produtos/",e.id,""),o.xp6(1),o.Q6J("src",e.imagem,o.LSH),o.xp6(2),o.hij(" ",e.descricao," "),o.xp6(2),o.hij(" ",o.xi3(7,5,e.preco,"BRL")," "),o.xp6(3),o.hij(" ",e.descricaoPreco," ")}}let P=(()=>{class t{constructor(e,r){this.produtosService=e,this.route=r}ngOnInit(){const e=this.produtosService.getAll();this.route.queryParamMap.subscribe(r=>{const c=r.get("descricao")?.toLowerCase();this.produtos=c?e.filter(d=>d.descricao.toLowerCase().includes(c)):e})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(l),o.Y36(s.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(e,r){1&e&&(o.TgZ(0,"section",0),o.YNc(1,m,12,8,"div",1),o.qZA()),2&e&&(o.xp6(1),o.Q6J("ngForOf",r.produtos))},dependencies:[p.sg,s.rH,p.H9],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:5px;flex:0 1 270px;height:520px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;border-radius:5px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]}),t})();var h=i(8881);let _=(()=>{class t{constructor(e){this.snackBar=e}notificar(e){this.snackBar.open(e,"Ok",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(h.ux))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=i(5087),a=i(433);const v=[{path:"",component:P},{path:":id",component:(()=>{class t{constructor(e,r,c,d){this.produtosService=e,this.route=r,this.notificacaoService=c,this.carrinhoService=d,this.quantidade=1}ngOnInit(){const r=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtosService.getOne(r)}adicionarAoCarrinho(){this.notificacaoService.notificar("O produto foi adicionado ao carrinho");const e={...this.produto,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(l),o.Y36(s.gz),o.Y36(_),o.Y36(f.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-detalhes-produto"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],[3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"product__avaiability"],[3,"click"]],template:function(e,r){1&e&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h2",4),o._uU(5),o.qZA(),o.TgZ(6,"h3",5),o._uU(7),o.ALo(8,"currency"),o.qZA(),o.TgZ(9,"p"),o._uU(10,"Estoque dispon\xedvel:"),o.qZA(),o.TgZ(11,"label"),o._uU(12," Quantidade: "),o.TgZ(13,"input",6),o.NdJ("ngModelChange",function(d){return r.quantidade=d}),o.qZA(),o._uU(14," unidade (s) "),o.qZA(),o.TgZ(15,"p",7),o._uU(16),o.qZA(),o.TgZ(17,"button",8),o.NdJ("click",function(){return r.adicionarAoCarrinho()}),o._uU(18,"Adicionar ao carrinho"),o.qZA()()()),2&e&&(o.xp6(2),o.Q6J("src",null==r.produto?null:r.produto.imagem,o.LSH),o.xp6(3),o.Oqu(null==r.produto?null:r.produto.descricao),o.xp6(2),o.Oqu(o.xi3(8,5,null==r.produto?null:r.produto.preco,"BRL")),o.xp6(6),o.Q6J("ngModel",r.quantidade),o.xp6(3),o.hij(" ",null==r.produto?null:r.produto.quantidadeEstoque," unidade(s) em etoque "))},dependencies:[a.Fj,a.wV,a.JJ,a.qQ,a.On,p.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.Bz.forChild(v),s.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.ez,C,a.u5]}),t})()}}]);
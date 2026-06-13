/* SKP full menu data — EN / ES / RU. Prices as printed (€). */
window.SKP_MENU = {
  legend: [
    {sym:"◆", en:"Chef's recommendation", es:"Recomendación del chef", ru:"Рекомендация шефа", cls:"rec"},
    {sym:"♨", en:"Served on hot stone", es:"Servido a la piedra", ru:"На горячем камне", cls:"stone"},
    {sym:"▲", en:"Spicy", es:"Picante", ru:"Острое", cls:"spicy"},
    {sym:"❋", en:"Vegetarian / Vegan", es:"Vegetariano / Vegano", ru:"Вегетарианское / Веганское", cls:"veg"}
  ],
  sections: [
    { id:"starters", en:"Starters", es:"Entrantes", ru:"Закуски", kicker:"01", tab:"food",
      note_en:"To share, to begin, to keep the table talking.", note_es:"Para compartir, para empezar, para que la mesa no pare.", note_ru:"Для совместного наслаждения, для начала, чтобы разговор не умолкал.",
      items:[
        {en:"Iberian Ham Croquette", es:"Croqueta de jamón", ru:"Крокет с Хамоном", de:"Per unit · golden crust, molten centre", ds:"Por unidad · corteza dorada, corazón fundente", dr:"По штуке · хрустящая корочка, тающая начинка", p:"2,50€", alg:"gluten, frutos secos, huevo, lácteos"},
        {en:"Boletus Croquette", es:"Croqueta de boletus", ru:"Крокет с Белыми Грибами", de:"Per unit · wild mushroom", ds:"Por unidad · seta de temporada", dr:"По штуке · лесные грибы", p:"2,50€", alg:"gluten, frutos secos, huevo, lácteos"},
        {en:"Pork Cheek Croquette", es:"Croqueta de carrillada", ru:"Крокет со Щековиной", de:"Per unit · slow-braised Iberian cheek", ds:"Por unidad · carrillada ibérica guisada", dr:"По штуке · тушёная иберийская щековина", p:"2,95€", alg:"gluten, frutos secos, huevo, lácteos"},
        {en:"Bread, Aioli & Tomato", es:"Pan con alioli y tomate", ru:"Хлеб с Айоли и Томатом", p:"2,95€", alg:"gluten, huevo, lácteos, sulfitos", tags:["veg"]},
        {en:"Chicken Empanada", es:"Empanada de pollo", ru:"Эмпанада с Курицей", de:"Argentinian, with chimichurri", ds:"Argentina, con chimichurri", dr:"Аргентинская, с чимичурри", p:"3,25€", alg:"gluten, huevo, lácteos"},
        {en:"Beef Empanada", es:"Empanada de ternera", ru:"Эмпанада с Говядиной", de:"Argentinian, with chimichurri", ds:"Argentina, con chimichurri", dr:"Аргентинская, с чимичурри", p:"3,25€", alg:"gluten, huevo, lácteos"},
        {en:"Edamame", es:"Edamame", ru:"Эдамаме", p:"4,50€", tags:["veg"]},
        {en:"Prawn Bao Bun", es:"Pan bao de gambas", ru:"Бао с Креветками", p:"5,95€", alg:"gluten, crustáceos, soja, sésamo, sulfitos"},
        {en:"Pulled Pork Bao Bun", es:"Pan bao de cerdo desmechado", ru:"Бао со Свининой", p:"5,95€", alg:"gluten, mostaza, sésamo, sulfitos"},
        {en:"Crispy Chicken Bao Bun", es:"Pan bao de pollo crispi", ru:"Бао с Хрустящей Курицей", p:"5,95€", alg:"gluten, huevo, mostaza, soja", img:"assets/pan-bao.jpeg"},
        {en:"Chicken Wings", es:"Alitas de pollo", ru:"Куриные Крылышки", de:"3 / 5 / 9 pcs", ds:"3 / 5 / 9 uds.", dr:"3 / 5 / 9 шт.", p:"4,50 · 5,95 · 9,95€", alg:"gluten, soja, mostaza"},
        {en:"Baked Provolone", es:"Provolone al horno", ru:"Запечённый Проволоне", p:"5,95€", alg:"lácteos", tags:["veg"]},
        {en:"Fried Cheese", es:"Queso frito", ru:"Жареный Сыр", de:"With tomato jam", ds:"Con mermelada de tomate", dr:"С томатным конфитюром", p:"5,95€", alg:"gluten, lácteos", tags:["veg"]},
        {en:"Mozzarella Sticks", es:"Palitos de mozzarella", ru:"Палочки Моцареллы", p:"3,95€", alg:"gluten, lácteos", tags:["veg"]},
        {en:"Korean Pork Belly", es:"Panceta estilo coreano", ru:"Грудинка По-Корейски", de:"Finished on the hot stone", ds:"Terminada en la piedra caliente", dr:"Доводится на горячем камне", p:"6,95€", tags:["stone"]},
        {en:"Beef Rock & Roll", es:"Ternera Rock and Roll", ru:"Говядина Рок-н-Ролл", p:"9,95€", alg:"gluten, pescado, soja, sésamo, sulfitos", img:"assets/ternera-rock-roll.jpeg"},
        {en:"Chicken Rock & Roll", es:"Pollo Rock and Roll", ru:"Курица Рок-н-Ролл", p:"8,95€", alg:"gluten, pescado, soja, sésamo, sulfitos"},
        {en:"SKP Nachos", es:"Nachos SKP", ru:"Начос SKP", de:"House chilli sauce", ds:"Salsa chilli casera", dr:"Домашний острый соус", p:"9,50€", alg:"gluten, huevo, lácteos, sulfitos", tags:["spicy"]},
        {en:"Angus Beef Carpaccio", es:"Carpaccio de ternera Angus", ru:"Карпаччо из Говядины Ангус", p:"12,95€", alg:"sulfitos, lácteos", tags:["rec"]},
        {en:"Salmon Tartare", es:"Tartar de salmón", ru:"Тартар из Лосося", p:"12,95€", alg:"pescado, soja, sésamo, sulfitos", tags:["rec"]},
        {en:"Garlic Prawns", es:"Gambas al ajillo", ru:"Креветки с Чесноком", p:"12,95€", alg:"gluten, crustáceos, lácteos, huevo"},
        {en:"Prawns Marinara", es:"Gambas a la marinara", ru:"Креветки Маринара", p:"12,95€", alg:"gluten, crustáceos"},
        {en:"Prawn Tempura", es:"Tempura de gambón", ru:"Темпура из Королевских Креветок", p:"12,95€", alg:"gluten, crustáceos"}
      ]},
    { id:"salads", en:"Salads", es:"Ensaladas", ru:"Салаты", kicker:"02", tab:"food",
      items:[
        {en:"Burrata", es:"Burrata", ru:"Буррата", de:"Iberian chorizo & peach", ds:"Chorizo ibérico y melocotón", dr:"Иберийский чорисо и персик", p:"9,50€", alg:"huevo, frutos secos, lácteos", tags:["rec"]},
        {en:"Goat Cheese Salad", es:"Ensalada de queso de cabra", ru:"Салат с Козьим Сыром", p:"11,95€", alg:"huevo, frutos secos, lácteos, sulfitos", tags:["veg"]},
        {en:"House Salad", es:"Ensalada de la casa", ru:"Домашний Салат", p:"6,50€", tags:["veg"]},
        {en:"Caesar Salad", es:"Ensalada César", ru:"Салат Цезарь", de:"Chicken, house Caesar dressing", ds:"Pollo, salsa césar casera", dr:"Курица, домашний соус Цезарь", p:"11,95€", alg:"gluten, pescado, lácteos, frutos secos"}
      ]},
    { id:"rice", en:"Rice", es:"Arroz", ru:"Рис", kicker:"03", tab:"food",
      items:[
        {en:"SKP Truffle Risotto", es:"Risotto SKP", ru:"Ризотто SKP", de:"Ham, mushroom & truffle", ds:"Jamón, champiñones y trufa", dr:"Хамон, грибы и трюфель", p:"11,95€", alg:"gluten, lácteos", tags:["rec"]},
        {en:"Prawn Risotto", es:"Risotto de gambas", ru:"Ризотто с Креветками", p:"13,95€", alg:"gluten, crustáceos, pescado, lácteos"}
      ]},
    { id:"burgers", en:"Burgers", es:"Hamburguesas", ru:"Бургеры", kicker:"04", tab:"food",
      items:[
        {en:"I Love Juice Burger", es:"I Love Juice Burger", ru:"Бургер I Love Juice", de:"Beef, lettuce, tomato, red onion, pickle, basil sauce", ds:"Ternera, lechuga, tomate, cebolla roja, pepinillo, salsa de albahaca", dr:"Говядина, салат, томат, красный лук, корнишоны, соус из базилика", p:"13,45€", alg:"gluten, huevo, lácteos, mostaza"},
        {en:"SKP Burger", es:"SKP Burger", ru:"Бургер SKP", de:"Beef, cheddar, bacon, tomato, lettuce, house sauce", ds:"Ternera, chédar, bacon, tomate, lechuga, salsa de la casa", dr:"Говядина, чеддер, бекон, томат, салат, фирменный соус", p:"13,45€", alg:"gluten, huevo, lácteos", tags:["rec"], img:"assets/hamburguesa.jpeg"},
        {en:"SKP Spicy Burger", es:"SKP Spicy Burger", ru:"Острый Бургер SKP", de:"Beef, cheddar, bacon, tomato, lettuce, homemade hot sauce", ds:"Ternera, chédar, bacon, tomate, lechuga, salsa picante casera", dr:"Говядина, чеддер, бекон, томат, салат, домашний острый соус", p:"13,45€", alg:"gluten, huevo, lácteos", tags:["spicy"]},
        {en:"Kikiri Burger", es:"Kikiri Burger", ru:"Бургер Кикири", de:"Crispy chicken, tomato, lettuce, special house sauce", ds:"Pollo crispi, tomate, lechuga, salsa especial de la casa", dr:"Хрустящая курица, томат, салат, фирменный соус", p:"13,45€", alg:"gluten, huevo, pescado, lácteos"},
        {en:"Pork Burger", es:"Pork Burger", ru:"Свиной Бургер", de:"Pulled pork, crispy onion, pickled onion, BBQ", ds:"Cerdo desmechado, cebolla crispi, cebolla encurtida, salsa BBQ", dr:"Тянутая свинина, хрустящий лук, маринованный лук, BBQ", p:"13,45€", alg:"gluten, huevo, lácteos, mostaza"},
        {en:"Vegan Beef", es:"Vegan Beef", ru:"Веганский Бифштекс", de:"Vegan patty, lettuce, tomato, red onion, pickle, basil sauce", ds:"Carne vegana, lechuga, tomate, cebolla roja, pepinillo, salsa de albahaca", dr:"Веганская котлета, салат, томат, красный лук, корнишоны, соус из базилика", p:"13,45€", alg:"gluten, huevo, lácteos, mostaza", tags:["veg"]},
        {en:"Vegan Chicken Burger", es:"Vegan Chicken Burger", ru:"Веганский Куриный Бургер", de:"Vegan chicken, lettuce, tomato, special house sauce", ds:"Pollo vegano, lechuga, tomate, salsa especial de la casa", dr:"Веганская курица, салат, томат, фирменный соус", p:"13,45€", alg:"gluten, huevo, lácteos, mostaza", tags:["veg"]}
      ]},
    { id:"skewers", en:"Super Skewers", es:"Super Pinchos", ru:"Супер Шашлыки", kicker:"05", tab:"food",
      items:[
        {en:"Super Chicken Skewer", es:"Super pincho de pollo", ru:"Супер Шашлык с Курицей", p:"9,95€", alg:"gluten, mostaza, sésamo, frutos secos, soja", img:"assets/super-pincho-pollo.jpeg"},
        {en:"Super Pork Skewer", es:"Super pincho de cerdo", ru:"Супер Шашлык со Свининой", p:"15,95€", alg:"gluten, sésamo, soja"},
        {en:"Super Prawn Skewer", es:"Super pincho de gambas", ru:"Супер Шашлык с Креветками", p:"9,95€", alg:"crustáceos", img:"assets/super-pincho-gambas.jpeg"}
      ]},
    { id:"mains", en:"From the Kitchen", es:"Otras Opciones", ru:"Из Кухни", kicker:"06", tab:"food",
      items:[
        {en:"½ Baked Chicken", es:"½ Pollo al horno", ru:"½ Запечённой Курицы", p:"11,95€", alg:"gluten, sésamo, soja, huevo, mostaza", img:"assets/pollo-asado.jpeg"},
        {en:"Asturian Cachopo", es:"Cachopo asturiano", ru:"Качопо По-Астурийски", de:"Cured cheese, Serrano ham, beef", ds:"Queso curado, jamón serrano, ternera", dr:"Выдержанный сыр, ветчина серрано, говядина", p:"14,95€", alg:"gluten, huevo, lácteos"},
        {en:"Cordon Bleu", es:"Cordon Bleu", ru:"Кордон Блю", de:"Cheese, York ham, chicken", ds:"Queso, jamón york, pollo", dr:"Сыр, ветчина, курица", p:"12,95€", alg:"gluten, huevo, lácteos"},
        {en:"Beef Ribs", es:"Costilla de ternera", ru:"Говяжьи Рёбрышки", p:"—", alg:"gluten, apio, lácteos, frutos secos, sulfitos"},
        {en:"Salmon", es:"Salmón", ru:"Лосось", de:"Fresh fillet, simply grilled", ds:"Lomo fresco, a la plancha", dr:"Свежее филе на гриле", p:"15,50€", alg:"pescado"}
      ]},
    { id:"ribs", en:"Ribs", es:"Costillas", ru:"Рёбрышки", kicker:"07", tab:"food",
      items:[
        {en:"½ BBQ Ribs", es:"½ Costilla BBQ", ru:"½ Рёбрышки BBQ", p:"9,95€", alg:"gluten, mostaza, frutos secos, sulfitos"},
        {en:"BBQ Ribs", es:"Costilla BBQ", ru:"Рёбрышки BBQ", p:"15,95€", alg:"gluten, mostaza, frutos secos, sulfitos", tags:["rec"]},
        {en:"½ Spicy Ribs", es:"½ Costilla picante", ru:"½ Острые Рёбрышки", de:"House hot sauce", ds:"Salsa picante casera", dr:"Домашний острый соус", p:"9,95€", alg:"gluten, mostaza, frutos secos, sulfitos", tags:["spicy"]},
        {en:"Spicy Ribs", es:"Costilla picante", ru:"Острые Рёбрышки", de:"House hot sauce", ds:"Salsa picante casera", dr:"Домашний острый соус", p:"15,95€", alg:"gluten, mostaza, frutos secos, sulfitos", tags:["spicy"]}
      ]},
    { id:"stone", en:"Meat on a Stone", es:"Carnes a la Piedra", ru:"Мясо на Камне", kicker:"08", tab:"food", featured:true,
      note_en:"Brought to your table on 350°C volcanic stone. You set the doneness, cut by cut.", note_es:"Servido en tu mesa sobre piedra volcánica a 350°C. Tú marcas el punto, corte a corte.", note_ru:"Подаётся к вашему столу на вулканическом камне при 350°C. Вы сами определяете степень прожарки, кусок за куском.",
      items:[
        {en:"Iberian Secret", es:"Secreto ibérico", ru:"Иберийский Секрет", p:"17,95€", tags:["stone"]},
        {en:"Sirloin", es:"Solomillo", ru:"Сирлойн", p:"20,95€", tags:["stone"], img:"assets/solomillo.jpeg"},
        {en:"Filet Mignon", es:"Filet Mignon", ru:"Филе Миньон", p:"21,95€", tags:["stone"], img:"assets/fillet-mignon.jpeg"},
        {en:"Rib Eye", es:"Ojo de costilla", ru:"Рибай", p:"17,95€", tags:["stone"]},
        {en:"Entrecôte", es:"Entrecot", ru:"Антрекот", p:"15,95€", tags:["stone"], img:"assets/entrecot-normal.jpeg"},
        {en:"Matured Entrecôte", es:"Entrecot madurado", ru:"Выдержанный Антрекот", p:"17,95€", tags:["stone"], img:"assets/entrecot-madrado.jpeg"},
        {en:"Lamb", es:"Cordero", ru:"Баранина", p:"25,95€", tags:["stone"]},
        {en:"Mixed Grill", es:"Parrilla mixta", ru:"Мясное Ассорти", p:"20,95€", tags:["stone","rec"]},
        {en:"Tomahawk", es:"Tomahawk", ru:"Томагавк", de:"Bone-in, dry-aged — to share", ds:"Madurado al hueso — para compartir", dr:"На кости, выдержанный — на двоих", p:"49,95€", tags:["stone","rec"], img:"assets/tomahawk.jpeg"},
        {en:"Matured Rib Steak", es:"Chuletón madurado", ru:"Выдержанный Стейк на Кости", p:"24,95€", tags:["stone","rec"], img:"assets/chuleton-madurado.jpeg"},
        {en:"T-Bone", es:"T-Bone", ru:"Ти-Бон", p:"29,95€", tags:["stone"], img:"assets/t-bone.jpeg"}
      ]},
    { id:"sides", en:"Sides", es:"Guarniciones", ru:"Гарниры", kicker:"09", tab:"food",
      items:[
        {en:"French Fries", es:"Patatas fritas", ru:"Картофель Фри", p:"3,95€", alg:"gluten", tags:["veg"]},
        {en:"Gratin Potatoes", es:"Patatas gratinadas", ru:"Картофель Гратен", p:"4,50€", alg:"sulfitos, lácteos", tags:["veg"]},
        {en:"Iberian Potatoes", es:"Patatas ibéricas", ru:"Иберийский Картофель", p:"4,50€", alg:"gluten, sulfitos, soja"},
        {en:"Mashed Potato", es:"Puré de patata", ru:"Пюре из Картофеля", p:"4,25€", alg:"soja, lácteos", tags:["veg"]},
        {en:"Jacket Potato", es:"Patata Jack", ru:"Картофель Джек", p:"2,25€", alg:"soja, lácteos", tags:["veg"]},
        {en:"Padrón Peppers", es:"Pimientos de padrón", ru:"Перец Падрон", p:"3,95€", alg:"gluten", tags:["veg"]},
        {en:"Garlic Mushrooms", es:"Champiñones al ajillo", ru:"Шампиньоны с Чесноком", p:"3,95€", alg:"gluten, lácteos", tags:["veg"]},
        {en:"Creamed Spinach", es:"Espinaca cremosa", ru:"Шпинат в Сливочном Соусе", p:"4,50€", alg:"lácteos", tags:["veg"]},
        {en:"Grilled Tomatoes", es:"Tomates al grill", ru:"Томаты Гриль", p:"4,25€", tags:["veg"]},
        {en:"Onion Rings", es:"Aros de cebolla", ru:"Луковые Кольца", p:"3,95€", alg:"gluten", tags:["veg"]}
      ]},
    { id:"sauces", en:"Sauces", es:"Salsas", ru:"Соусы", kicker:"10", tab:"food", inline:true,
      items:[
        {en:"Blue Cheese", es:"Queso azul", ru:"Голубой Сыр", p:"1,95€"},
        {en:"Béarnaise", es:"Bernesa", ru:"Беарнез", p:"1,95€"},
        {en:"Black Pepper", es:"Pimienta negra", ru:"Чёрный Перец", p:"1,95€"},
        {en:"Mushroom", es:"Champiñones", ru:"Грибной", p:"1,95€"},
        {en:"Bacon", es:"Bacon", ru:"Бекон", p:"1,95€"},
        {en:"Chimichurri", es:"Chimichurri", ru:"Чимичурри", p:"1,95€"}
      ]},
    { id:"kids", en:"Kids Menu", es:"Menú Infantil", ru:"Детское Меню", kicker:"11", tab:"food",
      items:[
        {en:"Kikiri Kids", es:"Menú Kikiri Kids", ru:"Детское Меню Кикири", de:"Grilled chicken, fries & dessert", ds:"Pechuga a la plancha, patatas y postre", dr:"Курица на гриле, картофель фри и десерт", p:"6,95€", alg:"frutos secos"},
        {en:"Burger Kids", es:"Menú Burger Kids", ru:"Детское Меню Бургер", de:"Beef burger, fries & dessert", ds:"Hamburguesa, patatas y postre", dr:"Бургер из говядины, картофель фри и десерт", p:"6,95€", alg:"gluten, huevo, lácteos"},
        {en:"Frankfurt Kids", es:"Menú Frankfurt Kids", ru:"Детское Меню Франкфурт", de:"Frankfurt, fries & dessert", ds:"Frankfurt, patatas y postre", dr:"Сосиска, картофель фри и десерт", p:"6,95€", alg:"gluten, apio"}
      ]},
    { id:"desserts", en:"Desserts", es:"Postres", ru:"Десерты", kicker:"12", tab:"food",
      items:[
        {en:"Crepe with Ice Cream", es:"Crepes con helado", ru:"Блины с Мороженым", de:"Vanilla, strawberry or chocolate", ds:"Vainilla, fresa o chocolate", dr:"Ваниль, клубника или шоколад", p:"5,50€", alg:"gluten, huevo, lácteos"},
        {en:"Panna Cotta", es:"Panna cotta", ru:"Панна-Котта", p:"5,50€", alg:"lácteos"},
        {en:"Crème Brûlée", es:"Crème brûlée", ru:"Крем-Брюле", p:"5,50€", alg:"huevo, lácteos"},
        {en:"Chocolate Coulant", es:"Coulant de chocolate", ru:"Шоколадный Фондан", de:"With ice cream", ds:"Con helado", dr:"С мороженым", p:"5,50€", alg:"gluten, huevo, lácteos, frutos secos", tags:["rec"], img:"assets/postre3.jpeg"},
        {en:"Brownie with Ice Cream", es:"Brownie con helado", ru:"Брауни с Мороженым", p:"5,50€", alg:"gluten, huevo, lácteos, frutos secos"},
        {en:"Ice Cream", es:"Helados", ru:"Мороженое", de:"Vanilla, chocolate, strawberry", ds:"Vainilla, chocolate, fresa", dr:"Ваниль, шоколад, клубника", p:"2,50€", alg:"gluten, huevo, lácteos, frutos secos"},
        {en:"Coffee Mousse", es:"Mousse de café", ru:"Кофейный Мусс", p:"4,50€", alg:"huevo, lácteos"},
        {en:"Apple & Pear Crumble", es:"Crumble de manzana y pera", ru:"Яблочно-Грушевый Крамбл", p:"5,50€", alg:"gluten, huevo, lácteos", img:"assets/postre2.jpeg"},
        {en:"Cheesecake", es:"Tarta de queso", ru:"Чизкейк", de:"With red berry coulis", ds:"Con coulis de frutos rojos", dr:"С соусом из красных ягод", p:"5,50€", alg:"gluten, huevo, lácteos", img:"assets/postre1.jpeg"}
      ]},
    { id:"coffee", en:"Coffee", es:"Cafés", ru:"Кофе", kicker:"13", tab:"drinks", inline:true,
      items:[
        {en:"Espresso", es:"Solo", ru:"Эспрессо", p:"1,50€"},
        {en:"Americano", es:"Americano", ru:"Американо", p:"1,50€"},
        {en:"Cortado", es:"Cortado", ru:"Кортадо", p:"1,60€"},
        {en:"Latte", es:"Café con leche", ru:"Кофе с Молоком", p:"1,75€"},
        {en:"Tea / Infusion", es:"Infusión o té", ru:"Чай / Травяной Чай", p:"1,50€"},
        {en:"Bombón", es:"Bombón", ru:"Кофе Бомбон", p:"1,90€"},
        {en:"Cappuccino", es:"Capuccino", ru:"Капучино", p:"2,50€"},
        {en:"Carajillo", es:"Carajillo", ru:"Кофе с Ликёром", p:"2,75€"},
        {en:"Irish / Spanish / French", es:"Irlandés / Español / Francés", ru:"Ирландский / Испанский / Французский", p:"6,50€"}
      ]},
    { id:"drinks", en:"Drinks", es:"Bebidas", ru:"Напитки", kicker:"14", tab:"drinks", inline:true,
      items:[
        {en:"Soft drinks", es:"Refrescos", ru:"Газированные напитки", de:"Coca-Cola, Fanta, Sprite, Aquarius, Nestea", ds:"Coca-Cola, Fanta, Sprite, Aquarius, Nestea", dr:"Coca-Cola, Fanta, Sprite, Aquarius, Nestea", p:"2,95€"},
        {en:"Tonic", es:"Tónica", ru:"Тоник", p:"2,50€"},
        {en:"Juice", es:"Zumo", ru:"Сок", de:"Orange, pineapple or apple", ds:"Naranja, piña o manzana", dr:"Апельсин, ананас или яблоко", p:"2,50€"},
        {en:"Mineral water", es:"Agua mineral", ru:"Минеральная Вода", de:"Solán de Cabras", ds:"Solán de Cabras", dr:"Solán de Cabras", p:"2,75€"},
        {en:"Sparkling water", es:"Agua con gas", ru:"Газированная Вода", de:"Perrier", ds:"Perrier", dr:"Perrier", p:"2,75€"},
        {en:"Budweiser draught", es:"Caña Budweiser", ru:"Пиво Budweiser", de:"Tank 4,50€ · 1L jug 7,95€", ds:"Tanque 4,50€ · Jarra 1L 7,95€", dr:"Танк 4,50€ · Кувшин 1L 7,95€", p:"2,95€"},
        {en:"Mahou Cinco Estrellas", es:"Tercio Mahou 5 Estrellas", ru:"Mahou Cinco Estrellas", p:"3,25€"},
        {en:"Guinness / Corona / Stella", es:"Guinness / Corona / Stella", ru:"Гиннесс / Корона / Стелла", p:"3,50€"},
        {en:"Tinto de Verano", es:"Tinto de verano", ru:"Тинто де Верано", de:"1L jug 8,95€", ds:"Jarra 1L 8,95€", dr:"Кувшин 1L 8,95€", p:"3,50€"},
        {en:"Sangría", es:"Sangría", ru:"Сангрия", de:"Glass · 1L 10,95€ · Cava 1L 12,95€", ds:"Copa · 1L 10,95€ · de cava 1L 12,95€", dr:"Бокал · 1L 10,95€ · Кава 1L 12,95€", p:"4,50€"}
      ]},
    { id:"wines", en:"Wine", es:"Vinos", ru:"Вина", kicker:"15", tab:"drinks", columns:true,
      groups:[
        {en:"Red", es:"Tintos", ru:"Красные", items:[
          {en:"Aula — Utiel-Requena", es:"Aula — Utiel-Requena", ru:"Aula — Утьель-Ренья", de:"Glass 3,50€ · Bottle", ds:"Copa 3,50€ · Botella", dr:"Бокал 3,50€ · Бутылка", p:"11,50€"},
          {en:"Cepa Madre — Rioja", es:"Cepa Madre — Rioja", ru:"Cepa Madre — Риоха", p:"12,95€"},
          {en:"Barahonda Organic — Yecla", es:"Barahonda Organic — Yecla", ru:"Barahonda Organic — Йекла", p:"13,75€"},
          {en:"Alcorta Ágil — Ribera", es:"Alcorta Ágil — Ribera", ru:"Alcorta Ágil — Рибера", p:"16,50€"},
          {en:"Embocadero — Ribera", es:"Embocadero — Ribera", ru:"Embocadero — Рибера", p:"17,50€"},
          {en:"Chianti — Italy", es:"Chianti — Italia", ru:"Кьянти — Италия", p:"17,95€"},
          {en:"Luis Cañas — Rioja", es:"Luis Cañas — Rioja", ru:"Luis Cañas — Риоха", p:"18,95€"},
          {en:"Doña Paula Estate — Argentina", es:"Doña Paula Estate — Argentina", ru:"Doña Paula Estate — Аргентина", p:"19,50€"},
          {en:"J.P. Moueix — Saint Émilion", es:"J.P. Moueix — Saint Émilion", ru:"J.P. Moueix — Сент-Эмильон", p:"24,50€"},
          {en:"Pago de los Capellanes", es:"Pago de los Capellanes", ru:"Pago de los Capellanes", p:"43,95€", tags:["rec"]}
        ]},
        {en:"Rosé & Sparkling", es:"Rosados y Espumosos", ru:"Розовые и Игристые", items:[
          {en:"Aula Rosado — Utiel-Requena", es:"Aula Rosado — Utiel-Requena", ru:"Aula Rosado — Утьель-Ренья", de:"Glass 3,50€ · Bottle", ds:"Copa 3,50€ · Botella", dr:"Бокал 3,50€ · Бутылка", p:"11,50€"},
          {en:"Viña Real Blush — Rioja", es:"Viña Real Blush — Rioja", ru:"Viña Real Blush — Риоха", p:"16,25€"},
          {en:"Cava Sierra Salinas", es:"Cava Sierra Salinas", ru:"Cava Sierra Salinas", p:"12,95€"},
          {en:"Mas Codina — Cava", es:"Mas Codina — Cava", ru:"Mas Codina — Кава", p:"15,25€"},
          {en:"Bellese — Prosecco", es:"Bellese — Prosecco", ru:"Bellese — Просекко", p:"16,50€"},
          {en:"Louis Roederer — Champagne", es:"Louis Roederer — Champagne", ru:"Louis Roederer — Шампань", p:"68,50€", tags:["rec"]}
        ]}
      ]},
    { id:"cocktails", en:"Cocktails", es:"Cócteles", ru:"Коктейли", kicker:"16", tab:"drinks",
      note_en:"Also available alcohol-free — Mojito, Piña Colada, San Francisco · 5,00€",
      note_es:"También sin alcohol — Mojito, Piña Colada, San Francisco · 5,00€",
      note_ru:"Также без алкоголя — Мохито, Пинья Колада, Сан-Франциско · 5,00€",
      items:[
        {en:"Mojito / Strawberry Mojito", es:"Mojito / Mojito de fresa", ru:"Мохито / Клубничный Мохито", de:"Rum, lime, mint, brown sugar, soda", ds:"Ron, lima, hierbabuena, azúcar moreno, soda", dr:"Ром, лайм, мята, коричневый сахар, содовая", p:"6,00€"},
        {en:"Caipirinha / Caipiroska", es:"Caipiriña / Caipiroska", ru:"Кайпиринья / Кайпироска", de:"Cachaça or vodka, lime, sugar", ds:"Cachaça o vodka, lima, azúcar", dr:"Кашаса или водка, лайм, сахар", p:"7,50€"},
        {en:"Piña Colada", es:"Piña colada", ru:"Пинья Колада", de:"Rum, Malibu, pineapple, coconut cream, lime", ds:"Ron, Malibú, piña, leche de coco, lima", dr:"Ром, Малибу, ананас, кокосовые сливки, лайм", p:"7,50€"},
        {en:"Blue Lagoon", es:"Blue Lagoon", ru:"Голубая Лагуна", de:"Blue curaçao, vodka, lemonade", ds:"Blue curaçao, vodka, refresco de limón", dr:"Блу Кюрасао, водка, лимонад", p:"7,50€"},
        {en:"Sex on the Beach", es:"Sex on the Beach", ru:"Секс на Пляже", de:"Vodka, peach & orange, grenadine", ds:"Vodka, melocotón y naranja, granadina", dr:"Водка, персик и апельсин, гренадин", p:"7,50€"},
        {en:"Tequila Sunrise", es:"Tequila Sunrise", ru:"Текила Санрайз", de:"Tequila, orange, grenadine", ds:"Tequila, naranja, granadina", dr:"Текила, апельсин, гренадин", p:"7,50€"},
        {en:"Aperol Spritz", es:"Aperol Spritz", ru:"Апероль Шпритц", de:"Aperol, cava, soda", ds:"Aperol, cava, soda", dr:"Апероль, кава, содовая", p:"7,50€", tags:["rec"]},
        {en:"Long Island Iced Tea", es:"Long Island Iced Tea", ru:"Лонг Айленд Айс Ти", de:"Triple sec, tequila, gin, rum, vodka, lime, cola", ds:"Triple seco, tequila, ginebra, ron, vodka, lima, cola", dr:"Трипл сек, текила, джин, ром, водка, лайм, кола", p:"9,00€"}
      ]}
  ],
  daily: {
    en:"Daily Menu", es:"Menú del Día", ru:"Меню Дня", price:"12,00€",
    sub_en:"Lunch · Monday to Friday · starter, main, dessert or coffee",
    sub_es:"Mediodía · de lunes a viernes · primero, segundo, postre o café",
    sub_ru:"Обед · с понедельника по пятницу · первое, второе, десерт или кофе",
    cols:[
      {en:"Starters", es:"Primeros", ru:"Первые блюда",
       items:["House salad","Quesadilla","Nachos","Chicken empanada","Duo of croquettes","Prawn tempura","Salmon tartare","Japanese-style nuggets"],
       items_es:["Ensalada de la casa","Quesadilla","Nachos","Empanada de pollo","Dúo de croquetas","Tempura de gambón","Tartar de salmón","Nuggets al estilo japonés"],
       items_ru:["Домашний салат","Кесадилья","Начос","Эмпанада с курицей","Дуэт крокет","Темпура с креветками","Тартар из лосося","Наггетсы по-японски"]},
      {en:"Mains", es:"Segundos", ru:"Вторые блюда",
       items:["Salmon","Burger of the day","½ baked chicken","Super chicken skewer","Super pork skewer","Cordon Bleu","½ BBQ ribs","Beef ribs"],
       items_es:["Salmón","Hamburguesa del día","½ pollo al horno","Súper pincho de pollo","Súper pincho de cerdo","Cordon Bleu","½ Costilla BBQ","Costilla de ternera"],
       items_ru:["Лосось","Гамбургер дня","½ запечённой курицы","Супер шашлык с курицей","Супер шашлык со свининой","Кордон Блю","½ рёбрышки BBQ","Говяжьи рёбрышки"]},
      {en:"To finish", es:"Para terminar", ru:"На завершение",
       items:["Dessert of the day","Mousse","Ice cream (chocolate, strawberry, vanilla)"],
       items_es:["Postre del día","Mousse","Helado (chocolate, fresa, vainilla)"],
       items_ru:["Десерт дня","Мусс","Мороженое (шоколад, клубника, ваниль)"]}
    ]
  }
};

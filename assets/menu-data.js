/* SKP full menu data — EN primary, ES parallel. Prices as printed (€). */
window.SKP_MENU = {
  legend: [
    {sym:"◆", en:"Chef's recommendation", es:"Recomendación del chef", cls:"rec"},
    {sym:"♨", en:"Served on hot stone", es:"Servido a la piedra", cls:"stone"},
    {sym:"▲", en:"Spicy", es:"Picante", cls:"spicy"},
    {sym:"❋", en:"Vegetarian / Vegan", es:"Vegetariano / Vegano", cls:"veg"}
  ],
  sections: [
    { id:"starters", en:"Starters", es:"Entrantes", kicker:"01",
      note_en:"To share, to begin, to keep the table talking.", note_es:"Para compartir, para empezar, para que la mesa no pare.",
      items:[
        {en:"Iberian Ham Croquette", es:"Croqueta de jamón", de:"Per unit · golden crust, molten centre", ds:"Por unidad · corteza dorada, corazón fundente", p:"2,50€", alg:"gluten, frutos secos, huevo, lácteos"},
        {en:"Boletus Croquette", es:"Croqueta de boletus", de:"Per unit · wild mushroom", ds:"Por unidad · seta de temporada", p:"2,50€", alg:"gluten, frutos secos, huevo, lácteos"},
        {en:"Pork Cheek Croquette", es:"Croqueta de carrillada", de:"Per unit · slow-braised Iberian cheek", ds:"Por unidad · carrillada ibérica guisada", p:"2,95€", alg:"gluten, frutos secos, huevo, lácteos"},
        {en:"Bread, Aioli & Tomato", es:"Pan con alioli y tomate", p:"2,95€", alg:"gluten, huevo, lácteos, sulfitos", tags:["veg"]},
        {en:"Chicken Empanada", es:"Empanada de pollo", de:"Argentinian, with chimichurri", ds:"Argentina, con chimichurri", p:"3,25€", alg:"gluten, huevo, lácteos"},
        {en:"Beef Empanada", es:"Empanada de ternera", de:"Argentinian, with chimichurri", ds:"Argentina, con chimichurri", p:"3,25€", alg:"gluten, huevo, lácteos"},
        {en:"Edamame", es:"Edamame", p:"4,50€", tags:["veg"]},
        {en:"Prawn Bao Bun", es:"Pan bao de gambas", p:"5,95€", alg:"gluten, crustáceos, soja, sésamo, sulfitos"},
        {en:"Pulled Pork Bao Bun", es:"Pan bao de cerdo desmechado", p:"5,95€", alg:"gluten, mostaza, sésamo, sulfitos"},
        {en:"Crispy Chicken Bao Bun", es:"Pan bao de pollo crispi", p:"5,95€", alg:"gluten, huevo, mostaza, soja"},
        {en:"Chicken Wings", es:"Alitas de pollo", de:"3 / 5 / 9 pcs", ds:"3 / 5 / 9 uds.", p:"4,50 · 5,95 · 9,95€", alg:"gluten, soja, mostaza"},
        {en:"Baked Provolone", es:"Provolone al horno", p:"5,95€", alg:"lácteos", tags:["veg"]},
        {en:"Fried Cheese", es:"Queso frito", de:"With tomato jam", ds:"Con mermelada de tomate", p:"5,95€", alg:"gluten, lácteos", tags:["veg"]},
        {en:"Mozzarella Sticks", es:"Palitos de mozzarella", p:"3,95€", alg:"gluten, lácteos", tags:["veg"]},
        {en:"Korean Pork Belly", es:"Panceta estilo coreano", de:"Finished on the hot stone", ds:"Terminada en la piedra caliente", p:"6,95€", tags:["stone"]},
        {en:"Beef Rock & Roll", es:"Ternera Rock and Roll", p:"9,95€", alg:"gluten, pescado, soja, sésamo, sulfitos"},
        {en:"Chicken Rock & Roll", es:"Pollo Rock and Roll", p:"8,95€", alg:"gluten, pescado, soja, sésamo, sulfitos"},
        {en:"SKP Nachos", es:"Nachos SKP", de:"House chilli sauce", ds:"Salsa chilli casera", p:"9,50€", alg:"gluten, huevo, lácteos, sulfitos", tags:["spicy"]},
        {en:"Angus Beef Carpaccio", es:"Carpaccio de ternera Angus", p:"12,95€", alg:"sulfitos, lácteos", tags:["rec"]},
        {en:"Salmon Tartare", es:"Tartar de salmón", p:"12,95€", alg:"pescado, soja, sésamo, sulfitos", tags:["rec"]},
        {en:"Garlic Prawns", es:"Gambas al ajillo", p:"12,95€", alg:"gluten, crustáceos, lácteos, huevo"},
        {en:"Prawns Marinara", es:"Gambas a la marinara", p:"12,95€", alg:"gluten, crustáceos"},
        {en:"Prawn Tempura", es:"Tempura de gambón", p:"12,95€", alg:"gluten, crustáceos"}
      ]},
    { id:"salads", en:"Salads", es:"Ensaladas", kicker:"02",
      items:[
        {en:"Burrata", es:"Burrata", de:"Iberian chorizo & peach", ds:"Chorizo ibérico y melocotón", p:"9,50€", alg:"huevo, frutos secos, lácteos", tags:["rec"]},
        {en:"Goat Cheese Salad", es:"Ensalada de queso de cabra", p:"11,95€", alg:"huevo, frutos secos, lácteos, sulfitos", tags:["veg"]},
        {en:"House Salad", es:"Ensalada de la casa", p:"6,50€", tags:["veg"]},
        {en:"Caesar Salad", es:"Ensalada César", de:"Chicken, house Caesar dressing", ds:"Pollo, salsa césar casera", p:"11,95€", alg:"gluten, pescado, lácteos, frutos secos"}
      ]},
    { id:"rice", en:"Rice", es:"Arroz", kicker:"03",
      items:[
        {en:"SKP Truffle Risotto", es:"Risotto SKP", de:"Ham, mushroom & truffle", ds:"Jamón, champiñones y trufa", p:"11,95€", alg:"gluten, lácteos", tags:["rec"]},
        {en:"Prawn Risotto", es:"Risotto de gambas", p:"13,95€", alg:"gluten, crustáceos, pescado, lácteos"}
      ]},
    { id:"burgers", en:"Burgers", es:"Hamburguesas", kicker:"04",
      items:[
        {en:"I Love Juice Burger", es:"I Love Juice Burger", de:"Beef, lettuce, tomato, red onion, pickle, basil sauce", ds:"Ternera, lechuga, tomate, cebolla roja, pepinillo, salsa de albahaca", p:"13,45€", alg:"gluten, huevo, lácteos, mostaza"},
        {en:"SKP Burger", es:"SKP Burger", de:"Beef, cheddar, bacon, tomato, lettuce, house sauce", ds:"Ternera, chédar, bacon, tomate, lechuga, salsa de la casa", p:"13,45€", alg:"gluten, huevo, lácteos", tags:["rec"]},
        {en:"SKP Spicy Burger", es:"SKP Spicy Burger", de:"Beef, cheddar, bacon, tomato, lettuce, homemade hot sauce", ds:"Ternera, chédar, bacon, tomate, lechuga, salsa picante casera", p:"13,45€", alg:"gluten, huevo, lácteos", tags:["spicy"]},
        {en:"Kikiri Burger", es:"Kikiri Burger", de:"Crispy chicken, tomato, lettuce, special house sauce", ds:"Pollo crispi, tomate, lechuga, salsa especial de la casa", p:"13,45€", alg:"gluten, huevo, pescado, lácteos"},
        {en:"Pork Burger", es:"Pork Burger", de:"Pulled pork, crispy onion, pickled onion, BBQ", ds:"Cerdo desmechado, cebolla crispi, cebolla encurtida, salsa BBQ", p:"13,45€", alg:"gluten, huevo, lácteos, mostaza"},
        {en:"Vegan Beef", es:"Vegan Beef", de:"Vegan patty, lettuce, tomato, red onion, pickle, basil sauce", ds:"Carne vegana, lechuga, tomate, cebolla roja, pepinillo, salsa de albahaca", p:"13,45€", alg:"gluten, huevo, lácteos, mostaza", tags:["veg"]},
        {en:"Vegan Chicken Burger", es:"Vegan Chicken Burger", de:"Vegan chicken, lettuce, tomato, special house sauce", ds:"Pollo vegano, lechuga, tomate, salsa especial de la casa", p:"13,45€", alg:"gluten, huevo, lácteos, mostaza", tags:["veg"]}
      ]},
    { id:"skewers", en:"Super Skewers", es:"Super Pinchos", kicker:"05",
      items:[
        {en:"Super Chicken Skewer", es:"Super pincho de pollo", p:"9,95€", alg:"gluten, mostaza, sésamo, frutos secos, soja"},
        {en:"Super Pork Skewer", es:"Super pincho de cerdo", p:"15,95€", alg:"gluten, sésamo, soja"},
        {en:"Super Prawn Skewer", es:"Super pincho de gambas", p:"9,95€", alg:"crustáceos"}
      ]},
    { id:"mains", en:"From the Kitchen", es:"Otras Opciones", kicker:"06",
      items:[
        {en:"Confit Chicken Thigh", es:"Pernil de pollo confitado", p:"—", alg:"gluten, soja"},
        {en:"½ Baked Chicken", es:"½ Pollo al horno", p:"11,95€", alg:"gluten, sésamo, soja, huevo, mostaza"},
        {en:"Asturian Cachopo", es:"Cachopo asturiano", de:"Cured cheese, Serrano ham, beef", ds:"Queso curado, jamón serrano, ternera", p:"14,95€", alg:"gluten, huevo, lácteos"},
        {en:"Cordon Bleu", es:"Cordon Bleu", de:"Cheese, York ham, chicken", ds:"Queso, jamón york, pollo", p:"12,95€", alg:"gluten, huevo, lácteos"},
        {en:"Beef Ribs", es:"Costilla de ternera", p:"—", alg:"gluten, apio, lácteos, frutos secos, sulfitos"},
        {en:"Salmon", es:"Salmón", de:"Fresh fillet, simply grilled", ds:"Lomo fresco, a la plancha", p:"15,50€", alg:"pescado"}
      ]},
    { id:"ribs", en:"Ribs", es:"Costillas", kicker:"07",
      items:[
        {en:"½ BBQ Ribs", es:"½ Costilla BBQ", p:"9,95€", alg:"gluten, mostaza, frutos secos, sulfitos"},
        {en:"BBQ Ribs", es:"Costilla BBQ", p:"15,95€", alg:"gluten, mostaza, frutos secos, sulfitos", tags:["rec"]},
        {en:"½ Spicy Ribs", es:"½ Costilla picante", de:"House hot sauce", ds:"Salsa picante casera", p:"9,95€", alg:"gluten, mostaza, frutos secos, sulfitos", tags:["spicy"]},
        {en:"Spicy Ribs", es:"Costilla picante", de:"House hot sauce", ds:"Salsa picante casera", p:"15,95€", alg:"gluten, mostaza, frutos secos, sulfitos", tags:["spicy"]}
      ]},
    { id:"stone", en:"Meat on a Stone", es:"Carnes a la Piedra", kicker:"08", featured:true,
      note_en:"Brought to your table on 350°C volcanic stone. You set the doneness, cut by cut.", note_es:"Servido en tu mesa sobre piedra volcánica a 350°C. Tú marcas el punto, corte a corte.",
      items:[
        {en:"Iberian Secret", es:"Secreto ibérico", p:"17,95€", tags:["stone"]},
        {en:"Sirloin", es:"Solomillo", p:"20,95€", tags:["stone"]},
        {en:"Filet Mignon", es:"Filet Mignon", p:"21,95€", tags:["stone"]},
        {en:"Rib Eye", es:"Ojo de costilla", p:"17,95€", tags:["stone"]},
        {en:"Entrecôte", es:"Entrecot", p:"15,95€", tags:["stone"]},
        {en:"Matured Entrecôte", es:"Entrecot madurado", p:"17,95€", tags:["stone"]},
        {en:"Lamb", es:"Cordero", p:"25,95€", tags:["stone"]},
        {en:"Mixed Grill", es:"Parrilla mixta", p:"20,95€", tags:["stone","rec"]},
        {en:"Tomahawk", es:"Tomahawk", de:"Bone-in, dry-aged — to share", ds:"Madurado al hueso — para compartir", p:"49,95€", tags:["stone","rec"]},
        {en:"Matured Rib Steak", es:"Chuletón madurado", p:"24,95€", tags:["stone","rec"]},
        {en:"T-Bone", es:"T-Bone", p:"29,95€", tags:["stone"]}
      ]},
    { id:"sides", en:"Sides", es:"Guarniciones", kicker:"09",
      items:[
        {en:"French Fries", es:"Patatas fritas", p:"3,95€", alg:"gluten", tags:["veg"]},
        {en:"Gratin Potatoes", es:"Patatas gratinadas", p:"4,50€", alg:"sulfitos, lácteos", tags:["veg"]},
        {en:"Iberian Potatoes", es:"Patatas ibéricas", p:"4,50€", alg:"gluten, sulfitos, soja"},
        {en:"Mashed Potato", es:"Puré de patata", p:"4,25€", alg:"soja, lácteos", tags:["veg"]},
        {en:"Jacket Potato", es:"Patata Jack", p:"2,25€", alg:"soja, lácteos", tags:["veg"]},
        {en:"Padrón Peppers", es:"Pimientos de padrón", p:"3,95€", alg:"gluten", tags:["veg"]}
      ]},
    { id:"sauces", en:"Sauces", es:"Salsas", kicker:"10", inline:true,
      items:[
        {en:"Blue Cheese", es:"Queso azul", p:"1,95€"},
        {en:"Béarnaise", es:"Bernesa", p:"1,95€"},
        {en:"Black Pepper", es:"Pimienta negra", p:"1,95€"},
        {en:"Mushroom", es:"Champiñones", p:"1,95€"},
        {en:"Bacon", es:"Bacon", p:"1,95€"},
        {en:"Chimichurri", es:"Chimichurri", p:"1,95€"}
      ]},
    { id:"kids", en:"Kids Menu", es:"Menú Infantil", kicker:"11",
      items:[
        {en:"Kikiri Kids", es:"Menú Kikiri Kids", de:"Grilled chicken, fries & dessert", ds:"Pechuga a la plancha, patatas y postre", p:"6,95€", alg:"frutos secos"},
        {en:"Burger Kids", es:"Menú Burger Kids", de:"Beef burger, fries & dessert", ds:"Hamburguesa, patatas y postre", p:"6,95€", alg:"gluten, huevo, lácteos"},
        {en:"Frankfurt Kids", es:"Menú Frankfurt Kids", de:"Frankfurt, fries & dessert", ds:"Frankfurt, patatas y postre", p:"6,95€", alg:"gluten, apio"}
      ]},
    { id:"desserts", en:"Desserts", es:"Postres", kicker:"12",
      items:[
        {en:"Crepe with Ice Cream", es:"Crepes con helado", de:"Vanilla, strawberry or chocolate", ds:"Vainilla, fresa o chocolate", p:"5,50€", alg:"gluten, huevo, lácteos"},
        {en:"Panna Cotta", es:"Panna cotta", p:"5,50€", alg:"lácteos"},
        {en:"Crème Brûlée", es:"Crème brûlée", p:"5,50€", alg:"huevo, lácteos"},
        {en:"Chocolate Coulant", es:"Coulant de chocolate", de:"With ice cream", ds:"Con helado", p:"5,50€", alg:"gluten, huevo, lácteos, frutos secos", tags:["rec"]},
        {en:"Brownie with Ice Cream", es:"Brownie con helado", p:"5,50€", alg:"gluten, huevo, lácteos, frutos secos"},
        {en:"Ice Cream", es:"Helados", de:"Vanilla, chocolate, strawberry", ds:"Vainilla, chocolate, fresa", p:"2,50€", alg:"gluten, huevo, lácteos, frutos secos"},
        {en:"Coffee Mousse", es:"Mousse de café", p:"4,50€", alg:"huevo, lácteos"},
        {en:"Apple & Pear Crumble", es:"Crumble de manzana y pera", p:"5,50€", alg:"gluten, huevo, lácteos"}
      ]},
    { id:"coffee", en:"Coffee", es:"Cafés", kicker:"13", inline:true,
      items:[
        {en:"Espresso", es:"Solo", p:"1,50€"},
        {en:"Americano", es:"Americano", p:"1,50€"},
        {en:"Cortado", es:"Cortado", p:"1,60€"},
        {en:"Latte", es:"Café con leche", p:"1,75€"},
        {en:"Tea / Infusion", es:"Infusión o té", p:"1,50€"},
        {en:"Bombón", es:"Bombón", p:"1,90€"},
        {en:"Cappuccino", es:"Capuccino", p:"2,50€"},
        {en:"Carajillo", es:"Carajillo", p:"2,75€"},
        {en:"Irish / Spanish / French", es:"Irlandés / Español / Francés", p:"6,50€"}
      ]},
    { id:"drinks", en:"Drinks", es:"Bebidas", kicker:"14", inline:true,
      items:[
        {en:"Soft drinks", es:"Refrescos", de:"Coca-Cola, Fanta, Sprite, Aquarius, Nestea", ds:"Coca-Cola, Fanta, Sprite, Aquarius, Nestea", p:"2,95€"},
        {en:"Tonic", es:"Tónica", p:"2,50€"},
        {en:"Juice", es:"Zumo", de:"Orange, pineapple or apple", ds:"Naranja, piña o manzana", p:"2,50€"},
        {en:"Mineral water", es:"Agua mineral", de:"Solán de Cabras", ds:"Solán de Cabras", p:"2,75€"},
        {en:"Sparkling water", es:"Agua con gas", de:"Perrier", ds:"Perrier", p:"2,75€"},
        {en:"Budweiser draught", es:"Caña Budweiser", de:"Tank 4,50€ · 1L jug 7,95€", ds:"Tanque 4,50€ · Jarra 1L 7,95€", p:"2,95€"},
        {en:"Mahou Cinco Estrellas", es:"Tercio Mahou 5 Estrellas", p:"3,25€"},
        {en:"Guinness / Corona / Stella", es:"Guinness / Corona / Stella", p:"3,50€"},
        {en:"Tinto de Verano", es:"Tinto de verano", de:"1L jug 8,95€", ds:"Jarra 1L 8,95€", p:"3,50€"},
        {en:"Sangría", es:"Sangría", de:"Glass · 1L 10,95€ · Cava 1L 12,95€", ds:"Copa · 1L 10,95€ · de cava 1L 12,95€", p:"4,50€"}
      ]},
    { id:"wines", en:"Wine", es:"Vinos", kicker:"15", columns:true,
      groups:[
        {en:"Red", es:"Tintos", items:[
          {en:"Aula — Utiel-Requena", es:"Aula — Utiel-Requena", de:"Glass 3,50€ · Bottle", ds:"Copa 3,50€ · Botella", p:"11,50€"},
          {en:"Cepa Madre — Rioja", es:"Cepa Madre — Rioja", p:"12,95€"},
          {en:"Barahonda Organic — Yecla", es:"Barahonda Organic — Yecla", p:"13,75€"},
          {en:"Alcorta Ágil — Ribera", es:"Alcorta Ágil — Ribera", p:"16,50€"},
          {en:"Embocadero — Ribera", es:"Embocadero — Ribera", p:"17,50€"},
          {en:"Chianti — Italy", es:"Chianti — Italia", p:"17,95€"},
          {en:"Luis Cañas — Rioja", es:"Luis Cañas — Rioja", p:"18,95€"},
          {en:"Doña Paula Estate — Argentina", es:"Doña Paula Estate — Argentina", p:"19,50€"},
          {en:"J.P. Moueix — Saint Émilion", es:"J.P. Moueix — Saint Émilion", p:"24,50€"},
          {en:"Pago de los Capellanes", es:"Pago de los Capellanes", p:"43,95€", tags:["rec"]}
        ]},
        {en:"Rosé & Sparkling", es:"Rosados y Espumosos", items:[
          {en:"Aula Rosado — Utiel-Requena", es:"Aula Rosado — Utiel-Requena", de:"Glass 3,50€ · Bottle", ds:"Copa 3,50€ · Botella", p:"11,50€"},
          {en:"Viña Real Blush — Rioja", es:"Viña Real Blush — Rioja", p:"16,25€"},
          {en:"Cava Sierra Salinas", es:"Cava Sierra Salinas", p:"12,95€"},
          {en:"Mas Codina — Cava", es:"Mas Codina — Cava", p:"15,25€"},
          {en:"Bellese — Prosecco", es:"Bellese — Prosecco", p:"16,50€"},
          {en:"Louis Roederer — Champagne", es:"Louis Roederer — Champagne", p:"68,50€", tags:["rec"]}
        ]}
      ]},
    { id:"cocktails", en:"Cocktails", es:"Cócteles", kicker:"16",
      note_en:"Also available alcohol-free — Mojito, Piña Colada, San Francisco · 5,00€", note_es:"También sin alcohol — Mojito, Piña Colada, San Francisco · 5,00€",
      items:[
        {en:"Mojito / Strawberry Mojito", es:"Mojito / Mojito de fresa", de:"Rum, lime, mint, brown sugar, soda", ds:"Ron, lima, hierbabuena, azúcar moreno, soda", p:"6,00€"},
        {en:"Caipirinha / Caipiroska", es:"Caipiriña / Caipiroska", de:"Cachaça or vodka, lime, sugar", ds:"Cachaça o vodka, lima, azúcar", p:"7,50€"},
        {en:"Piña Colada", es:"Piña colada", de:"Rum, Malibu, pineapple, coconut cream, lime", ds:"Ron, Malibú, piña, leche de coco, lima", p:"7,50€"},
        {en:"Blue Lagoon", es:"Blue Lagoon", de:"Blue curaçao, vodka, lemonade", ds:"Blue curaçao, vodka, refresco de limón", p:"7,50€"},
        {en:"Sex on the Beach", es:"Sex on the Beach", de:"Vodka, peach & orange, grenadine", ds:"Vodka, melocotón y naranja, granadina", p:"7,50€"},
        {en:"Tequila Sunrise", es:"Tequila Sunrise", de:"Tequila, orange, grenadine", ds:"Tequila, naranja, granadina", p:"7,50€"},
        {en:"Aperol Spritz", es:"Aperol Spritz", de:"Aperol, cava, soda", ds:"Aperol, cava, soda", p:"7,50€", tags:["rec"]},
        {en:"Long Island Iced Tea", es:"Long Island Iced Tea", de:"Triple sec, tequila, gin, rum, vodka, lime, cola", ds:"Triple seco, tequila, ginebra, ron, vodka, lima, cola", p:"9,00€"}
      ]}
  ],
  daily: {
    en:"Daily Menu", es:"Menú Diario", price:"12,00€",
    sub_en:"Lunch · Monday to Friday · starter, main, dessert or coffee",
    sub_es:"Mediodía · de lunes a viernes · primero, segundo, postre o café",
    cols:[
      {en:"Starters", es:"Primeros", items:["House salad","Quesadilla","Prawns marinara","Chicken or beef empanada","Duo of croquettes","Prawn tempura","Salmon tartare"], items_es:["Ensalada de la casa","Quesadilla","Gambas marinara","Empanada de pollo o ternera","Dúo de croquetas","Tempura de gambón","Tartar de salmón"]},
      {en:"Mains", es:"Segundos", items:["Salmon","Burger of the day","½ baked chicken","Super chicken or pork skewer","Cordon Bleu","½ BBQ ribs","Beef ribs"], items_es:["Salmón","Hamburguesa del día","½ pollo al horno","Súper pincho de pollo o cerdo","Cordon Bleu","½ Costilla BBQ","Costilla de ternera"]},
      {en:"To finish", es:"Para terminar", items:["Dessert of the day","Coffee mousse","Ice cream"], items_es:["Postre del día","Mousse de café","Helado"]}
    ]
  }
};

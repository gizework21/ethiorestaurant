import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const menuCategories = {
    appetizers: [
      {
    id: 12,
    tag: "vegetarianEntrees",
    name: "Shiro Wot",
    description: "Spiced chickpea stew",
    price: 14,
    image: "https://www.chefspencil.com/wp-content/uploads/Ethiopian-Shiro-Wat.jpg.webp",
  },
  {
    id: 13,
    tag: "vegetarianEntrees",
    name: "Atkilt Wot",
    description: "Cabbage, carrots, and potatoes in turmeric sauce",
    price: 14,
    image: "/88.jpg",
  },
  {
    id: 14,
    tag: "vegetarianEntrees",
    name: "Gomen",
    description: "Collard greens sautéed with garlic and onions",
    price: 14,
    image: "https://healthiersteps.com/wp-content/uploads/2021/10/close-up-gomen-ethiopian-collard-greens.jpg",
  },
  {
    id: 15,
    tag: "vegetarianEntrees",
    name: "Fosolia",
    description: "Green beans and carrots sautéed with onions",
    price: 14,
    image: "https://spicebreeze.com/wp-content/uploads/2023/12/Ethiopian-Fasolia.png",
  },
  {
    id: 16,
    tag: "vegetarianEntrees",
    name: "Misir Wot",
    description: "Red lentils in spicy berbere sauce",
    price: 14,
    image: "https://i0.wp.com/www.spicechronicles.com/wp-content/uploads/2020/04/Misir_3.jpg?w=640",
  },
  {
    id: 17,
    tag: "vegetarianEntrees",
    name: "Kik Alicha",
    description: "Yellow split peas in mild turmeric sauce",
    price: 14,
    image: "https://thumbs.dreamstime.com/b/bowl-ater-kik-alicha-ethiopian-food-view-280272301.jpg?w=992",
  },
  {
    id: 18,
    tag: "vegetarianEntrees",
    name: "Vegetarian Combo",
    description: "Selection of 3 vegetarian items served with injera or rice",
    price: 15,
    image: "/10.jpg",
  },
  {
    id: 1,
    tag: "lambEntrees",
    name: "Lamb Alicha",
    description: "Mild lamb stew with turmeric, garlic, and onion",
    price: 18,
    image: "https://tarasmulticulturaltable.com/wp-content/uploads/2023/02/Ye-Beg-Alicha-Wot-Mild-Lamb-Stew-4-of-4-1024x683.jpg",
  },
  {
    id: 2,
    tag: "lambEntrees",
    name: "Lamb Key Wot",
    description: "Spicy lamb stew with berbere sauce",
    price: 18,
    image: "https://iliveinafryingpan.com/wp-content/uploads/2013/03/MG_7687.jpg",
  },
  {
    id: 3,
    tag: "lambEntrees",
    name: "Lamb Tibs",
    description: "Sautéed lamb cubes with onions, tomatoes, and jalapeños",
    price: 18,
    image: "https://preview.redd.it/does-anyone-know-a-recipe-for-this-v0-bbt9900luwu91.jpg?width=1080&crop=smart&auto=webp&s=caa913dae47cd6a4bb207a815058535df73e550f",
  },
  {
    id: 4,
    tag: "chickenEntrees",
    name: "Doro Wot",
    description: "Spicy chicken stew with hard-boiled egg",
    price: 17,
    image: "https://samracooks.com/wp-content/uploads/2023/06/20230618_124055-1024x577.jpg",
  },
  {
    id: 5,
    tag: "chickenEntrees",
    name: "Doro Alicha",
    description: "Mild chicken stew with garlic and ginger",
    price: 17,
    image: "https://www.eatingwell.com/thmb/u5YWYVd1iwcPyr6qVodXcZj2BTc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4784672-a90b569eb8104e38a3cbe7d928d3e33e.jpg",
  },
  {
    id: 6,
    tag: "chickenEntrees",
    name: "Chicken Tibs",
    description: "Sautéed chicken with onions, tomatoes, and jalapeños",
    price: 17,
    image: "https://img.apmcdn.org/fb34a622d9dee52bddbe25b85a7a41285e6e7ee9/uncropped/91b977-splendid-table-doro-alicha-tibs-c-steven-joyce-lede.jpg",
  },
  {
    id: 7,
    tag: "sideDishes",
    name: "Injera",
    description: "Traditional Ethiopian sour flatbread",
    price: 2,
    image: "https://hips.hearstapps.com/hmg-prod/images/lula-20201119-injera-hr-64f7722ec460e.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
  },
  {
    id: 8,
    tag: "sideDishes",
    name: "Rice",
    description: "Steamed white rice",
    price: 3,
    image: "https://nigerianfoodiehub.com/wp-content/uploads/2023/04/70321789117__B783162E-0867-4145-B2AE-DDA190A476E9-2-800x1022.jpg",
  },
  {
    id: 9,
    tag: "sideDishes",
    name: "Salad",
    description: "Fresh mixed greens with house dressing",
    price: 4,
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/07/avocado-salad-1-580x810.jpg",
  },
  {
    id: 10,
    tag: "appetizers",
    name: "Sambusa",
    description: "Pastry filled with lentils or beef",
    price: 6,
    image: "https://demandafrica.com/wp-content/uploads/2017/09/LentilSambusas.jpg",
  },
  {
    id: 11,
    tag: "appetizers",
    name: "Azifa",
    description: "Cold lentil salad with mustard and onions",
    price: 5,
    image: "https://adamantkitchen.com/wp-content/uploads/2018/12/Azifa-8.jpg",
  },
  {
    id: 19,
    tag: "combos",
    name: "Meat Combo",
    description: "Choice of 2 meat dishes and 2 vegetarian sides",
    price: 20,
    image: "https://popmenucloud.com/cdn-cgi/image/width%3D768%2Cheight%3D768%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/hexzprmf/73ba615b-05ad-40bc-9e03-98a31bf3d971.jpg",
  },
  {
    id: 20,
    tag: "combos",
    name: "Family Combo",
    description: "Assortment of meat and vegetarian dishes for 3–4 people",
    price: 55,
    image: "https://lowcarbafrica.com/wp-content/uploads/2023/10/Sega-Wat-Spicy-Ethiopian-Beef-Stew-1.jpg",
  },
  {
    id: 21,
    tag: "beefEntrees",
    name: "Key Sega Wot",
    description: "Spicy beef stew with berbere",
    price: 18,
    image: "https://lh3.googleusercontent.com/proxy/Hu4XCOmOrrQdSq2C3J8XAEJlAXQOMtj3hIGnTsqf3lOwP6DNsDSXUtjzBMu96uPj_XAkUchKAv3St7TQZLR3Ivqki_wEeQPXHgFmCC7MU650DpRTUKptHjIUZig-iBiEluAVSEA",
  },
  {
    id: 22,
    tag: "beefEntrees",
    name: "Alicha Sega Wot",
    description: "Mild beef stew with garlic and ginger",
    price: 18,
    image: "https://tanushreeghoshdelicacies.wordpress.com/wp-content/uploads/2015/07/dscn1828.jpg?w=687",
  },
  {
    id: 23,
    tag: "beefEntrees",
    name: "Beef Tibs",
    description: "Sautéed beef cubes with onions, tomatoes, and jalapeños",
    price: 18,
    image: "https://simshomekitchen.com/wp-content/uploads/2024/02/Tib-recipe.jpg",
  },
    ],
     hot: [
    {
      name: "Special Ethiopian Coffee",
      description: "",
      price: "10.00",
      image: "https://lifeboostcoffee.com/cdn/shop/articles/feature_image_5_e84296cd-ea02-4123-9f29-7b09886bda51.jpg?v=1738915173"
    },
    {
      name: "Cup of Coffee",
      description: "",
      price: "3.00",
      image:"https://cdn.mos.cms.futurecdn.net/ZZKgZkZZNFFABG2B4J66HF.jpg"
    },
    {
      name: "Cup of Tea",
      description: "",
      price: "2.50",
      image: "https://worldteadirectory.com/wp-content/uploads/cache/images/2025/07/Image_1-1/Image_1-1-3884277128.jpg"
    },
  ],
  juices: [
    {
      name: "Homemade Ethio Special Mango",
      description: "with Strawberry and Avocado",
      price: "7.00",
      image:""
    },
    {
      name: "Mango Regular",
      description: "",
      price: "5.50",
      image:""
    },
    {
      name: "Apple",
      description: "",
      price: "2.50",
      image:""
    },
    {
      name: "Orange",
      description: "",
      price: "2.00",
      image:""
    },
    {
      name: "Sunny",
      description: "",
      price: "2.00",
      image:""
    },
  ],
    // mains: [
    //   {
    //     name: "Wagyu Beef Tenderloin",
    //     description:
    //       "Premium Japanese wagyu with truffle reduction, roasted vegetables, and red wine jus",
    //     price: "$85",
    //     dietary: ["GF"],
    //     image:
    //       "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   },
    //   {
    //     name: "Dover Sole Meunière",
    //     description:
    //       "Whole Dover sole with brown butter, capers, lemon, and seasonal vegetables",
    //     price: "$68",
    //     dietary: ["GF"],
    //     image:
    //       "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   },
    //   {
    //     name: "Duck Confit",
    //     description:
    //       "Slow-cooked duck leg with potato gratin, cherry gastrique, and winter greens",
    //     price: "$58",
    //     dietary: [],
    //     image:
    //       "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   },
    //   {
    //     name: "Lobster Risotto",
    //     description:
    //       "Maine lobster with saffron risotto, peas, and fresh herbs",
    //     price: "$72",
    //     dietary: ["GF"],
    //     image:
    //       "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   },
    // ],
    // desserts: [
    //   {
    //     name: "Chocolate Soufflé",
    //     description:
    //       "Dark chocolate soufflé with vanilla bean ice cream and gold leaf",
    //     price: "$24",
    //     dietary: ["V"],
    //     image:
    //       "https://images.unsplash.com/photo-1541783245831-57d6fb0d54c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   },
    //   {
    //     name: "Crème Brûlée Trio",
    //     description:
    //       "Vanilla, lavender, and coffee crème brûlée with seasonal berries",
    //     price: "$18",
    //     dietary: ["V", "GF"],
    //     image:
    //       "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   },
    //   {
    //     name: "Lemon Tart",
    //     description:
    //       "Meyer lemon curd tart with Italian meringue and candied lemon zest",
    //     price: "$16",
    //     dietary: ["V"],
    //     image:
    //       "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   },
    // ],
  };

  const getDietaryBadgeVariant = (dietary: string) => {
    switch (dietary) {
      case "V":
        return "secondary";
      case "GF":
        return "outline";
      default:
        return "default";
    }
  };

  const getDietaryLabel = (dietary: string) => {
    switch (dietary) {
      case "V":
        return "Vegetarian";
      case "GF":
        return "Gluten-Free";
      default:
        return dietary;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url('/E2.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            Our Menu
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Culinary artistry meets exceptional ingredients
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">
              Seasonal <span className="text-primary">Selections</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our menu changes with the seasons to showcase the finest
              ingredients at their peak
            </p>
          </div>

          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="appetizers" className="text-lg">
                Appetizers
              </TabsTrigger>
              <TabsTrigger value="hot" className="text-lg">
                Hot Drinks
              </TabsTrigger>
              <TabsTrigger value="juices" className="text-lg">
                juices
              </TabsTrigger>
              {/* <TabsTrigger value="desserts" className="text-lg">
                Desserts
              </TabsTrigger> */}
            </TabsList>

            {Object.entries(menuCategories).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {items.map((item, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="md:flex">
                        <div className="relative md:w-1/3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 md:h-full object-cover"
                          />
                          {item?.tag && (
                            <Badge className="absolute top-2 left-2 bg-primary text-white">
                              {item.tag}
                            </Badge>
                          )}
                        </div>

                        <CardContent className="md:w-2/3 p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-display font-semibold">
                              {item.name}
                            </h3>
                            <span className="text-xl font-bold text-primary ml-4">
                              ${item.price}
                            </span>
                          </div>

                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {item.description}
                          </p>

                          {/* {item.dietary.length > 0 && (
                            <div className="flex gap-2">
                              {item.dietary.map((diet) => (
                                <Badge
                                  key={diet}
                                  variant={getDietaryBadgeVariant(diet)}
                                >
                                  {getDietaryLabel(diet)}
                                </Badge>
                              ))}
                            </div>
                          )} */}
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Wine Pairing Note */}
          <div className="mt-16 text-center bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Wine Pairings Available
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our sommelier has carefully selected wines to complement each
              dish. Ask your server about our wine pairing recommendations or
              explore our extensive wine list.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;

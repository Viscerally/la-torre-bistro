import { motion } from "framer-motion"; // Make sure to npm install framer-motion

export default function MenuSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  const menuItems = [
    { name: "Tagliatelle al Tartufo", desc: "Fresh house-made egg pasta, black truffle shavings, aged 24-month Parmigiano-Reggiano.", price: "28" },
    { name: "Osso Buco alla Milanese", desc: "Slow-braised veal shank, aromatic saffron risotto, zesty lemon-herb gremolata.", price: "34" },
    { name: "Branzino al Forno", desc: "Roasted whole Mediterranean sea bass, wild artichokes, buttery lemon-caper emulsion.", price: "32" },
    { name: "Fiori di Zucca", desc: "Tempura-fried zucchini blossoms stuffed with buffalo ricotta and salted anchovies.", price: "18" },
    { name: "Costolette d'Agnello", desc: "Pistachio-crusted lamb chops, cauliflower purée, vincotto reduction.", price: "38" },
    { name: "Tiramisu Moderno", desc: "Espresso-soaked savoiardi, light mascarpone cloud, tempered dark chocolate soil.", price: "14" }
  ];

  return (
    <section className="bg-stone-50 py-24" id="menu">
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-stone-900">
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-orange-600 tracking-widest uppercase mb-4 block">Selection</span>
          <h2 className="text-5xl font-serif font-bold mb-4">Our Menu</h2>
          <p className="text-stone-500 font-sans max-w-xl mx-auto italic">A curated evolution of classic recipes, interpreted through seasonal availability and modern technique.</p>
        </div>

        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16"
        >
          {menuItems.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeIn}
              className="group flex justify-between gap-8 pb-8 border-b border-stone-200"
            >
              <div className="flex-1">
                <h3 className="font-serif text-xl mb-2 group-hover:text-orange-600 transition-colors duration-300">{item.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-md">{item.desc}</p>
              </div>
              <div className="text-orange-600 font-serif text-xl pt-0.5">${item.price}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
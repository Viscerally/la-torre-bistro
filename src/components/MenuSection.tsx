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

  const menuSections = [
    {
      title: "Antipasti",
      items: [
        { name: "Tagliere Di Salumi E Formaggi For Two", desc: "Selection of cured meats and artisanal cheeses served with seasonal accompaniments.", price: "21" },
        { name: "Polpettine Con Focaccia", desc: "House-made meatballs served with warm focaccia bread.", price: "18" },
        { name: "Burrata Con Pomodorini", desc: "Creamy burrata cheese with cherry tomatoes and fresh herbs.", price: "16" },
        { name: "Mix House Salad", desc: "Fresh mixed greens with house vinaigrette.", price: "14" },
        { name: "PASTA SPECIAL DAY", desc: "Daily pasta special - ask your server for today's selection.", price: "22" }
      ]
    },
    {
      title: "BEVANDE",
      items: [
        { name: "Soda Pop", desc: "Assorted soft drinks.", price: "3.50" },
        { name: "Sanpellegrino (Assortment)", desc: "Selection of Italian sparkling fruit beverages.", price: "3.50" },
        { name: "Sanpellegrino Aqua Frizzante", desc: "Sparkling mineral water.", price: "8.00" },
        { name: "Espresso", desc: "Traditional Italian espresso.", price: "2.75" },
        { name: "Double Espresso", desc: "Double shot of espresso.", price: "3.75" },
        { name: "Cappuccino", desc: "Espresso with steamed milk and foam.", price: "3.75" },
        { name: "Americana", desc: "Espresso with hot water.", price: "2.75" }
      ]
    },
    {
      title: "Pizza Romana",
      items: [
        { name: "Diavola", desc: "Spicy salami, mozzarella, tomato sauce.", price: "22.00" },
        { name: "Capricciosa", desc: "Ham, mushrooms, artichokes, olives, mozzarella.", price: "21.00" }
      ]
    }
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
          className="space-y-16"
        >
          {menuSections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-12">
              <h3 className="text-3xl font-serif font-bold mb-8 text-center md:text-left">{section.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
                {section.items.map((item, idx) => (
                  <motion.div 
                    key={`${sectionIdx}-${idx}`}
                    variants={fadeIn}
                    className="group flex justify-between gap-8 pb-6 border-b border-stone-200"
                  >
                    <div className="flex-1">
                      <h4 className="font-serif text-xl mb-2 group-hover:text-orange-600 transition-colors duration-300">{item.name}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed max-w-md">{item.desc}</p>
                    </div>
                    <div className="text-orange-600 font-serif text-xl pt-0.5">${item.price}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
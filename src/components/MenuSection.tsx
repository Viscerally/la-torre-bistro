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
    { name: "Tagliere Di Salumi E Formaggi For Two", desc: "Selection of cured meats and artisanal cheeses served with seasonal accompaniments.", price: "21" },
    { name: "Polpettine Con Focaccia", desc: "House-made meatballs served with warm focaccia bread.", price: "18" },
    { name: "Burrata Con Pomodorini", desc: "Creamy burrata cheese with cherry tomatoes and fresh herbs.", price: "16" },
    { name: "Mix House Salad", desc: "Fresh mixed greens with house vinaigrette.", price: "14" },
    { name: "PASTA SPECIAL DAY", desc: "Daily pasta special - ask your server for today's selection.", price: "ask the server" }
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
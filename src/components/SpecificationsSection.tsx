import { motion } from 'motion/react';

type SpecificationsSectionProps = {
  title: string;
  entries: [string, string][];
  about?: string;
};

export function SpecificationsSection({ title, entries, about = 'specifications-section' }: SpecificationsSectionProps) {
  return (
    <>
      <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        {title}
      </h2>
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2" about={about}>
        {entries.map(([label, value], index) => (
          <div
            key={label}
            className={`flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 ${
              index % 2 === 0 ? 'sm:pr-2' : 'sm:pl-2'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.05 }}
              viewport={{ once: true }}
            >
              <p className="text-[#617c89] text-sm font-normal leading-normal">{label}</p>
              <p className="text-[#111618] text-sm font-normal leading-normal">{value}</p>
            </motion.div>
          </div>
        ))}
      </section>
    </>
  );
}
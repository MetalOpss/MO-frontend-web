interface FiltersProps {
  sections?: string[];
}

const Filters: React.FC<FiltersProps> = ({
  sections = ["Sección", "Sección", "Sección", "Sección"],
}) => {
  return (
    <div className="w-full p-2 sm:p-4">
      <h2 className="text-[#5D5F5F] font-medium text-lg sm:text-xl lg:text-2xl mb-3">Filtros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {sections.map((section, index) => (
          <select
            key={index}
            className="px-3 sm:px-4 py-2 rounded-lg bg-[#F9F9F9] text-[#1A1C1C] font-medium text-sm sm:text-base
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>{section}</option>
          </select>
        ))}
      </div>
    </div>
  );
};

export default Filters;

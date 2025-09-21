interface InfoCardProps {
  numero: number;
  texto: string;
  bgClass?: string;
  textClass?: string;
  borderClass?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  numero,
  texto,
  bgClass = "bg-white",
  textClass = "text-black",
  borderClass = "border-gray-300",
}) => {
  return (
    <div
      className={`rounded-2xl sm:rounded-4xl w-full px-3 py-6 sm:px-5 sm:py-8 lg:py-12 border ${bgClass} ${textClass} ${borderClass} `}
    >
      <p className="font-normal text-lg sm:text-xl lg:text-2xl">{texto}</p>
      <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl">{numero}</h1>
    </div>
  );
};
export default InfoCard;

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
      className={`rounded-4xl w-full max-w-[554px] px-5 py-12 border ${bgClass} ${textClass} ${borderClass}`}
    >
      <p className="font-normal text-2xl">{texto}</p>
      <h1 className="font-bold text-6xl">{numero}</h1>
    </div>
  );
};
export default InfoCard;

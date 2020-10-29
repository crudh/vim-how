export const CategoryBox: React.FC<{
  name: string;
  colorClass: string;
  description: string;
}> = ({ name, colorClass, description }) => (
  <div className={`${colorClass} flex flex-col items-center p-4 rounded-lg`}>
    <div className="uppercase">{name}</div>
    <div className="text-sm">{description}</div>
  </div>
);

export const CommandBox: React.FC<{
  title: string;
  command: string;
  description: string;
}> = ({ title, command, description }) => (
  <div className="grid grid-rows-3 grid-cols-3 gap-4 p-4 border-gray-900 border-2 rounded-lg">
    <div className="row-span-3 flex justify-center pt-1 items-baseline">
      <div className="text-4xl bg-white text-black pl-3 pr-3 rounded-lg">
        {command}
      </div>
    </div>
    <div className="row-span-1 col-span-2">{title}</div>
    <div className="row-span-2 col-span-2">{description}</div>
  </div>
);

import { FC } from "react";

export const SearchInput: FC<{
  value: string;
  onUpdate: (input: string) => void;
}> = ({ value, onUpdate }) => (
  <input
    className="transition duration-300 p-2 text-black border-gray-500 border-2 outline-none rounded-lg hover:border-white focus:border-white"
    placeholder="Search command"
    type="text"
    value={value}
    onChange={(event) => onUpdate(event.target.value)}
    aria-label="Search"
  />
);

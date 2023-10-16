interface Props {
  label: string;
  type: string;
  name: string;

  placeHolder: string;
  onChange: (event: HTMLInputElement) => void;
}
const input = ({ label, type, name, placeHolder, onChange }: Props) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-[#56ba2e] m-2"
      >
        {label}
      </label>
      <input
        id={label}
        name={name}
        placeholder={placeHolder}
        className=" border border-green-200 w-full rounded-lg p-2.5 focus:border-green-500 focus:outline-none "
        required
        type={type}
        onChange={(event) => onChange(event.target)}
      />
    </div>
  );
};
// bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 w-full p-2.5 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400

export default input;

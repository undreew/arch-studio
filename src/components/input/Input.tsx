import React from "react";

interface InputProps {
	name: string;
	placeholder?: string;
	type?: React.HTMLInputTypeAttribute | undefined;
}

const Input: React.FC<InputProps> = (props) => {
	const { name, type, placeholder } = props;
	return (
		<input
			name={name}
			type={type || "text"}
			placeholder={placeholder}
			className="w-full border-b-1 border-dark-blue p-5 outline-0 text-[20px] text-dark-blue font-bold focus:border-b-2"
		/>
	);
};

export default Input;

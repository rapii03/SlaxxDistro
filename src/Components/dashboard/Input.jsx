import React, { useState } from "react";
import EyeOpen from './EyeOpen';
import EyeClose from './EyeClose';

const Input = ({
    label,
    type = "text",
    placeholder = "input",
    value,
    onChange,
    name = "input",
    required = false,
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChange = (event) => {
        onChange(event);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(isPasswordVisible);
    };

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    return (
        <form onSubmit={handleSubmit}>
            {label && (
                <label className="block">
                    <span
                        className={`mb-[6px] block text-xs font-medium text-slate-700 ${required
                            ? "after:text-red-500 after:content-['*']"
                            : "after:text-red-500 after:content-['']"
                            }`}
                    >
                        {label}
                    </span>
                </label>
            )}
            <div className="relative flex items-center rounded bg-transparent">
                <input
                    type={
                        type === "password"
                            ? isPasswordVisible
                                ? "text"
                                : "password"
                            : type
                    }
                    placeholder={!placeholder ? "input" : placeholder}
                    className="h-[37px] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#937af9] focus:ring-[#8B6A56]ck w-full rounded-md sm:text-sm focus:ring-1"
                    onChange={handleChange}
                    value={value}
                    name={name}
                />
                {type === "password" && (
                    <button
                        type="button"
                        className="peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent absolute right-2 top-1/2 w-8 -translate-y-1/2 transform text-slate-400 hover:cursor-pointer "
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? <EyeClose /> : <EyeOpen />}
                    </button>
                )}
            </div>
        </form>
    );
};

export default Input;

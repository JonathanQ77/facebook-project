export default function Button({
    children,
    large = false,
    green = false,
    disabled,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className={`${
                green
                    ? "bg-green-500 hover:bg-opacity-80"
                    : "bg-blue-facebook hover:bg-blue-500"
            } px-5 py-3 text-white rounded-md disabled:cursor-not-allowed disabled:opacity-90 cursor-pointer duration-150 ${
                large && "text-[21px] w-full"
            }`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

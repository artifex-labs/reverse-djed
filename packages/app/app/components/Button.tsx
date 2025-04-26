

type ButtonProps = {
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    image?: string;
    text?: string;
  };


const Button = ({
  onClick,
  className = "",
  disabled = false,
  image,
  text,
}: ButtonProps) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {image && <img src={image} alt="Button Icon" className="mr-2" />}
      {text && <a>{text}</a>}
    </button>
  )
}

export default Button
// This is a simple button component that can be used throughout the app.
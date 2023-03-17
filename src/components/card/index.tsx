interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
    className?: string
}

const Card = ({ className, children, ...rest}: Props) => {
    return ( 
        <div {...rest} className={"card rounded-xl p-5 bg-white shadow-lg " + className}>
            {children}
        </div>
     );
}
 
export default Card;

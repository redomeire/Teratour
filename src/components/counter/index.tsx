import { animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TextProps } from "@/components/typography/Typography";

interface Props extends TextProps {
    from: number,
    to: number,
    animateCount: number
}

const Counter = ({ from, to, animateCount, ...rest }: Props) => {
    const ref = useRef<HTMLInputElement>(null)
    const [count, setCount] = useState(from)
    const [isInViewport, setIsInViewport] = useState(false);
    const [isInViewCount, setIsInViewCount] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInViewport(entry.isIntersecting)
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    useEffect(() => {     
        if (isInViewport && isInViewCount < animateCount) {
            animate(from, to, {
                duration: 3,
                onUpdate(value) {
                    setCount(parseInt(value.toFixed(1)));
                }
            })
            setIsInViewCount(prev => prev + 1)
        }
    }, [isInViewport])

    return <p ref={ref} {...rest} >{isInViewport ? count : to}</p>;
}

export default Counter;

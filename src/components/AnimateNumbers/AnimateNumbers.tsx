import clsx from 'clsx';
import { gsap } from 'gsap';
import { JSX, useEffect, useRef } from 'react';

interface AnimateNumberProps {
	children: number;
	duration?: number;
	className?: string;
}

const AnimateNumber = ({ children, duration = 5, className }: AnimateNumberProps): JSX.Element => {
	const elRef = useRef<HTMLSpanElement>(null);
	const objRef = useRef({ val: children });

	useEffect(() => {
		const tween = gsap.to(objRef.current, {
			val: children,
			duration,
			ease: 'power2.out',
			onUpdate: () => {
				if (elRef.current) {
					elRef.current.textContent = Math.round(objRef.current.val).toString();
				}
			},
		});

		return () => {
			tween.kill();
		};
	}, [children, duration]);

	return (
		<span
			ref={elRef}
			className={clsx(className)}
		>
			{children}
		</span>
	);
};

export default AnimateNumber;

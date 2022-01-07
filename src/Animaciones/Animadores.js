/*******************************************************
 * Nombre:      Animadores
 * Descripcion: Contendra los microcomponentes de animacion
 *
 * Props:
 * Librerias:   Framer Motion
 * Tiempo :      10 min
 ********************************************************/
import { React, useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";


export function AnimApareceArriba(props) {
    const {children, delay=0.4 } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.7, delay: delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 }
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimApareceAbajo(props) {
    const {children, delay=0.4 } = props;
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.7, delay: delay }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 80 }
            }}
            exit={{opacity: 0}}
        >
            {children}
        </motion.div>
    );
}

export function AnimApareceDerecha(props) {
    const {children, delay=0.4 } = props;
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.7, delay: delay }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 80 }
            }}
        >
            {children}
        </motion.div>
    );
}
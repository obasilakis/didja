import { motion } from 'framer-motion';

export const withFadeAnimation = (Component) => {
  return ({ keyProp, ...props }) => {
    // const fadeVariant = {
    //   initial: { opacity: 0 },
    //   animate: ,
    //   exit: { opacity: 0 },
    // };

    return (
      <motion.div
        key={keyProp}
        // variants={fadeVariant}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit="exit"
        transition={{ duration: 5 }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};

export default withFadeAnimation;

import * as React from 'react';
import styles from '../../Styles/Styles';
import { MotiView } from 'moti';
import { AnimatePresence } from 'framer-motion';

export interface props {
  children: React.ReactNode;
}

export default function Window(props: props) {
  return (
    <AnimatePresence exitBeforeEnter>
      <MotiView
        from={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        style={styles.window}
        transition={{
          type: 'timing',
          duration: 500,
        }}
        exit={{ opacity: 0, scale: 0 }}>
        {props.children}
      </MotiView>
    </AnimatePresence>
  );
}

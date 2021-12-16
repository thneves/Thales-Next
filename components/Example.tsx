import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Example() {
    const [isVisible, setVisible] = useState(true);

    return (
        <motion.div
            style={{
                width: 150,
                height: 150,
                borderRadius: 30,
                backgroundColor: "rgba(255,255,255,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer"
            }}
            onTap={() => setVisible(!isVisible)}
        >
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        style={{
                            width: 200,
                            height: 80,
                            borderRadius: 15,
                            backgroundColor: "#fff"
                        }}
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}

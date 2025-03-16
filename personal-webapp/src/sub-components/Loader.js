import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
    const styles = {
        loaderContainer: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#daf1ff", 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
        },

        text: {
            color: "#2E4057",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
        }
    };

    return (
        <div style={styles.loaderContainer}>
            <p style={styles.text}>Hey, Hi There!</p>
            <PropagateLoader color="#2E4057" />
            
        </div>
    );
};

export default Loader;

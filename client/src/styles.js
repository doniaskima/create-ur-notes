import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        color: "#8B008B",
        fontweight: "bold"
    },
    image: {
        marginLeft: "15px",
    },
}));
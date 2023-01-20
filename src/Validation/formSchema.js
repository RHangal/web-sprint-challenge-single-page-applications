//Here goes the schema for the form
import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("You must input a name for the order")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(["xtra-large", "large", "medium", "small"], "You must select a size"),
    pepperoni: yup.boolean(),
    ham: yup.boolean(),
    mushrooms: yup.boolean(),
    olives: yup.boolean(),
    special: yup
        .string()
        .trim()
})

export default formSchema
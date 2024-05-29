
export const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
    setAlignment: React.Dispatch<React.SetStateAction<any>>,
) => {
    // console.log(newAlignment)
    if (newAlignment !== null) {
        setAlignment(newAlignment);
    }
};
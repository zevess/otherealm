export const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
    setAlignment: React.Dispatch<React.SetStateAction<string>>
) => {
    console.log(newAlignment)
    if (newAlignment !== null) {
        setAlignment(newAlignment);
    }
};
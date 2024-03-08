


export const DotColor = ({ objColor }) => {
    const { colorBasic } = objColor;
    return (
        <div className={`${colorBasic} w-5 h-5 rounded-full border border-white`}>
        </div>
    )
}
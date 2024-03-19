export const DotColor = ({ objColor }) => {
    const { colorBasic } = objColor;
    return (
        <div className={`${colorBasic} w-8 h-8 rounded border-2 shadow-2xl shadow-black border-white`}>
        </div>
    )
} 
import React from 'react'

interface ICustomProps {
    message: string
}

const CustomComponent: React.FC<ICustomProps> = (props: ICustomProps) => {
    return <div>{props.message}</div>
}

CustomComponent.defaultProps = {
    message: "Custom"
}

CustomComponent.displayName = 'MyCustom'

export default CustomComponent
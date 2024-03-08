export const fadeIn = (direction, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        visible: {
            opacity: 1,
            x: 0, y: 0,
            transition: {
                duration: duration,
                delay: delay
            }
        }
    }
}

export const slideIn = (direction, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? '100%' : direction === "right" ? '-100%' : 0,
            y: direction === "up" ? '100%' : direction === "down" ? '-100%' : 0,
            opacity: 0,
        },
        visible: {
            opacity: 1,
            x: 0, y: 0,
            transition: {
                duration: duration,
                delay: delay
            }
        }
    }
}
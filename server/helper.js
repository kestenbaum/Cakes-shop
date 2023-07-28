export const getRoute = ({apiRoute = '/api', route}) => apiRoute + route

export function tryFunc(func) {
    try {
        return func()
    } catch (e) {
        return null
    }
}

export function getClasses(classArray) {
    return classArray.join(' ')
}

export function isEmpty(value) {
    if (!value) return true
    switch (typeof value) {
        case "object":
            return !Object.keys(value).length
        default:
            return value?.length || true
    }
}

export const backendUrl = import.meta.env.VITE_BACKEND_URL

export const bearer = (): string => {
    return 'Bearer ' + localStorage.getItem("authToken")
}

export const fetchData = async (url: string, method: string, contentType: string, requestBody: object | null = null) => {
    let options: any = {
        method: method,
        mode: 'cors',
        headers: {
            'Authorization': bearer(),
            'Content-Type': contentType,
        }
    }

    if (requestBody != null) {
        options.body = JSON.stringify(requestBody)
    }

    return fetch(url, options)
}

export const sendData = async (url: string, method: string, contentType: string = 'application/json', requestBody: object) => {
    let options: any = {
        method: method,
        mode: 'cors',
        headers: {
            'Authorization': bearer(),
            'Content-Type': contentType,
        },
        body: JSON.stringify(requestBody)
    }

    return fetch(url, options)
}

export const initials = (username: string): string => {
    const sarr = username.split(RegExp("\_|\-\\s"))
    let initials = sarr[0].charAt(0)
    if (sarr.length > 1) {
        initials += sarr[1].charAt(0)
    }
    return initials
}

export const lpad = (what: string, length: number, withWhat: string = " "): string => {
    let str = what
    while (str.length < length) {
        str = withWhat + str
    }
    return str
}

export const rpad = (what: string, length: number, withWhat: string = " "): string => {
    let str = what
    while (str.length < length) {
        str += withWhat
    }
    return str
}

export const formatDate = (dateString: Date) => {
    const date = new Date(dateString)
    return date.getDate() + ". " + date.getMonth() + ". " + lpad(date.getHours().toString(), 2, "0") + ":" + lpad(date.getMinutes().toString(), 2, "0")
}

export enum Direction {
    ASC = "ASC",
    DESC = "DESC"
}
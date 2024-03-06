export interface BaseResultObject {
    status?: boolean
    status_code?: number
    message?: string
    result?: any
}

export interface BaseResultCollection {
    status?: boolean
    status_code?: number
    message?: string
    results?: any
}

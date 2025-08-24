type Notice = {
    id: number
    title: string
    contents: string
    created_at: string
}

type NoticeDetail = Notice & {
    is_important: boolean
}


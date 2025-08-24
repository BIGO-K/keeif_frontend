type BomContext = BomAlert | BomConfirm | BomPrompt

type BaseBom = {
    type: 'alert' | 'confirm' | 'prompt'
    uuid: string
    options: RequiredBaseBomOptions
}

type BaseBomOptions = {
    title?: string
    okLabel?: string
    cancelLabel?: string
}

type RequiredBaseBomOptions = Required<BaseBomOptions>

type BomAlert = BaseBom & {
    message: string
    callback: (select: boolean) => void,
}

type BomConfirm = BaseBom & {
    message: string
    callback: (select: boolean) => void,
}

type BomPrompt = BaseBom & {
    callback: (select: boolean) => void
    formCallback: (select: boolean, values: Record<string, string>) => void
    forms: BomPromptFormUnit[]
    message?: string
    placeholder?: string
    maxLength?: number
    value?: string | number,
    options?: PromptOptions
}

type BomPromptFormUnit = {
    name: string
    type: 'text'| 'email' | 'number' | 'password' | 'textarea' | 'select'
    placeholder?: string
    maxLength?: number
    value?: string | number
}

type BomOption = AlertOptions|ConfirmOptions|PromptOptions

type PromptOptions = BaseBomOptions & {
    forms?: BomPromptFormUnit[]
}
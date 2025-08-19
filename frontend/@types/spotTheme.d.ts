type SpotThemeTemplate = {
    id: number
    type: 'A'|'B'|'C'
    banner_image_url: string
    banner_image_alt: string
    main_text1: string
    main_text2: string
    sub_text1: string
    sub_text2: string
    url: string
    goods_list: Goods[]
}
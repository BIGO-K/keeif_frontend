/** 신발 사이즈 */
type ShoesSize = TypeIdLabel & {
    value: string
}
/** 신발 카테고리 (공용, 남성, 여성) */
type ShoesCategory = TypeCodeLabel;

/** 핏: xs,s,xl,xxl...*/
type Fit = TypeIdLabel;

/** MY 사이즈 정보 */
type MySize = {
    gender: Nullable<'E'|'M'|'F'>
    fit_id: Nullable<number>
    shoes_category_code: Nullable<string>
    shoes_size_id: Nullable<number>
    height: Nullable<number>
    weight: Nullable<number>
    information_agree: boolean
}

type MySizeForm = Required<MySize>


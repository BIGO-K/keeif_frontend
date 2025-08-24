type HeadOf<T> = T extends any[] ? T[0] : never
type TailOf<T> = T extends [any, ...infer U] ? U : []

type IsEmpty<T extends any[]> = T extends [] ? true : false

type Split<S extends string> =
	S extends `${infer T}.${infer U}`
		? [T, ...Split<U>]
		: [S]

type ValueOf<Type, Paths extends any[]> =
	IsEmpty<TailOf<Paths>> extends true
		? Type[HeadOf<Paths>]
		: ValueOf<Type[HeadOf<Paths>], TailOf<Paths>>

type Nullable<T> = T | null;

type DiscountType = 'rate' | 'KRW'
type Discounter = {
    discount_amount: number
    discount_type: DiscountType
    maximum_discount_amount: number
}

type TypeCodeLabel = {
	code: number
	label: string
}

type TypeIdLabel = {
	id: number
	label: string
}

type TypeCodeName = {
	code: number
	name: string
}

type Paginator<T> = SimplePaginator<T> & {
	total: number
}

/**
 * 심플 페이지네이터 객체
*/
interface SimplePaginator<T> {
	per_page: number;
	current_page: number;
	data: T[];
}

type HasWriter = {
	writer_grade_image_url: string
	writer_grade_label: string
	writer_masking_id: string
}

type GenerateEnterContext = {
	enter_url: string
	token: string
}
/**
 * 애니메이션 옵션
 */
type AnimationOption = gsap.TweenVars
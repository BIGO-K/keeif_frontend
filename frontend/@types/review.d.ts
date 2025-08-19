type MyReview = {
    id: number
    contents: string
    rate: number
    is_photo_review: boolean
    image_urls: string[]
    order_item: {
        order_id: string
        option_id: number
        option_name: string
        ea: number
        goods: {
            id: number
            name: string,
            brand_name: string
            thumbnail_url: string
        }
    }
    created_at: string
    templates: SelectedReviewTemplate[]
    is_editable: boolean
}

type MyReviewDetail = {
    id: number
    contents: string
    rate: number
    image_urls: string[]
    templates: ReviewTemplate[]
    selected_templates: {
        template_id: number
        detail_id: number
    }[]
    height: number
    weight: number
    shoes_size: number
}

type BestReview = HasWriter & {
    id: number
    contents: string
    rate: number
    is_photo_review: boolean
    image_urls: string[]
    created_at: string
    option_name: string
    templates: SelectedReviewTemplate[]
    is_experience_group?: boolean;
}

type BestReviewDetail = BestReview & {
    templates: SelectedReviewTemplate[]
    is_experience_group?: boolean;
	prev_review_id: number
	next_review_id: number
}

type Review = HasWriter & {
    id: number;
    contents: string;
    rate: number;
    is_photo_review: boolean;
    image_urls: string[];
    option_name: string;
    created_at: string;
    height?: number;
    weight?: number;
    shoes_size?: number;
    is_experience_group?: boolean;
    templates?: SelectedReviewTemplate[];
}

type PhotoReview = {
    id: number
    image_url: string
    writer_masking_id: string
}
type PhotoReviewDetail = HasWriter & {
    id: number
    contents: string
    rate: number
    option_name: string
    image_urls: string
    created_at: string
	prev_review_id: number
	next_review_id: number
    templates: SelectedReviewTemplate[]
    is_experience_group?: boolean;
}

type ReviewableOrderItem = {
    order_id: string
    option_id: number
    option_name: string
    goods: {
        id: number
        name: string
        brand_name: string
        thumbnail_url: string
    }
	ea: number
    ordered_at: string
}

type ReviewTemplate = {
    id: number
    title: string
    details: {
        id: number
        label: string
    }[]
}

type SelectedReviewTemplate = {
    id: number
    title: string
    selected_label: string
}

type ReviewStoreForm = {
    order_id: string
    option_id: Nullable<number>
    rate: Nullable<number>
    contents: string
    height?: Nullable<number>
    weight?: Nullable<number>
    shoes_size?: Nullable<number>
    selected_review_templates: {
        template_id: number
        detail_id: number
    }[]
    images: File[]
    ea: number
}
type ReviewUpdateForm = Omit<ReviewStoreForm, 'order_id'|'option_id'>

type MyReviewAggregate = {
    writables: number
    written: number
}
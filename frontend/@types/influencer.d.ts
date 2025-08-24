type MyInfluencer = {
	id: number
	name: string
	description: string
	logo_image_url: string
	is_receive_notify: boolean
	is_followed: boolean
}

type InfluencerDetail = {
	id: number
	name: string
	description: string
	description_detail: string
	logo_image_url: string
	cover_image_url: string
	instagram_url: string
	kakaotalk_url: string
	minishop_url: string
	follower_count: number
}

type MiniShop = {
	influencer: InfluencerDetail,
	upcoming_coop_deals: CoopDeal[]
	ongoing_coop_deals: CoopDeal[]
	ended_coop_deals: CoopDeal[]
	showcases: InfluencerShowcase[]
}

/** 쇼케이스 */
type InfluencerShowcase = {
	id: number
	image_url: string
	alt: string
	text_1: string
	text_2: string
	influencer: {
		id: number
		name: string
		logo_image_url: string
		description: string
	}
	main_goods: Goods
}

type InfluencerFollowContext = {
	influencer_id: number
	is_following: boolean
	is_receive_notification: boolean
}
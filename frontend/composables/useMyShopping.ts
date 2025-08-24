import monsDate from '$/utils/date';
import { useBackend } from '$/composables/useBackend';

export function useMyShopping() {
    /** 주문 현황 조회 */
	async function getOrderStateContext() {

		const { orders } = await useBackend().command<{
			orders: OrderStates
		}>('v1/my/order-counts', {
			params: {
				from_date: monsDate().subtract(3, 'w').format('YYYY-MM-DD'),
				to_date: monsDate().format('YYYY-MM-DD'),
			},
		});

		const normalSteps = [
			{ key: 'pay_ready', label: '입금대기', count: orders.pay_ready.count, code: orders.pay_ready.status_code },
			{ key: 'paid', label: '결제완료', count: orders.paid.count, code: orders.paid.status_code },
			{ key: 'delivery_ready', label: '배송준비', count: orders.delivery_ready.count, code: orders.delivery_ready.status_code },
			{ key: 'delivery_ing', label: '배송중', count: orders.delivery_ing.count, code: orders.delivery_ing.status_code },
			{ key: 'delivery_complete', label: '배송완료', count: orders.delivery_complete.count, code: orders.delivery_complete.status_code },
			{ key: 'purchase_confirmed', label: '구매확정', count: orders.purchase_confirmed.count, code: orders.purchase_confirmed.status_code },
		];

		return {
			normalSteps,
			cancelCount: orders.cancel_count,
			returnCount: orders.return_count,
			exchangeCount: orders.exchange_count,
		};
	}

    /** 혜택(적립금, 쿠폰 수) 현황 조회 */
	async function getBenefitStates() {
		const { benefits } = await useBackend().command<{
            benefits: BenefitStates
        }>('v1/my/benefits');

		return benefits;
	}

	async function getWishCounts() {
		return await useBackend().command<{
			wished_item_count: number
			wished_brand_count: number
			following_count: number
		}>('v1/my/wish-counts');
	}

     /** 최근 본 기획전 목록 조회 */
	async function getRecentViewPlanningEvents(limit = 30) {
		const { recent_view_plannings } = await useBackend().command<{
            recent_view_plannings: RecentViewPlanningEvent[]
        }>('v1/shopping/recent-view-planning-events', {
        	params: {
        		limit: limit,
        		from_date: monsDate().subtract(2, 'weeks').format('YYYY-MM-DD'),
        		to_date: monsDate().format('YYYY-MM-DD'),
        	},
        });

		return recent_view_plannings;
	}

    /**
     * 등급혜택 리스트 조회
     * @returns
     */
	async function getGradeBenefitInfo() {
		const { grades } = await useBackend().command<{
            grades: MemberGrade[]
        }>('v1/informations/member-grades');

		return grades.sort((current, next) => next.order_seq - current.order_seq);
	}

    /**
     * 포인트내역 조회
     * @param from
     * @param to
     * @param page
     * @param pageSize
     * @returns
     */
	async function getPointHistories(
		from: string,
		to: string,
		page: number = 1,
		pageSize: number = 20,
	) {
		const { total_point_balance, paginator } = await useBackend().command<{
            total_point_balance: number
            paginator: Paginator<PointHistory>
        }>('v1/my/point-history', {
        	params: {
        		page,
        		page_size: pageSize,
        		start_date: monsDate(from).format('YYYY-MM-DD'),
        		end_date: monsDate(to).format('YYYY-MM-DD'),
        	},
        });

		return {
			total_point_balance,
			paginator,
		};
	}

	async function getGradeUpCondition() {
		const { grade_up_condition } = await useBackend().command<{
            grade_up_condition: MemberGradeUpCondition
        }>('v1/my/grade-up-condition');

		return grade_up_condition;
	}

	return {
		getOrderStateContext,
		getRecentViewPlanningEvents,
		getBenefitStates,
		getGradeBenefitInfo,
		getPointHistories,
		getWishCounts,
	};
}
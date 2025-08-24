type LayerOpenOptions<Props, LayerCloseContext> = {
	props?: Props | (() => Promise<Props>)
    onClose?: CloseHandler<LayerCloseContext>,
	onCancelClose?: CloseHandler<void>
}

type CloseHandler<LayerCloseContext> = (context: LayerCloseContext) => void | Promise<void>

type Layer = {
    uuid: string
    component: ShallowRef<Component>
    props: object
    uniqueCode?: string
    isActive: boolean;
    onClose?: CloseHandler,
	onCancelClose?: CloseHandler<void>
	type: 'modal'|'overlay'
}

type OverlayComponentExpose = {
	title?: string;
	/** @prop { boolean } `default: false` - 전체 확장 */
	isFull?: boolean;
	/** @prop { boolean } `default: false` - 헤더 숨김 */
	isHideHeader?: boolean;
	/** @prop { string } `default: ''` - 클래스명 */
	class?: string;
}
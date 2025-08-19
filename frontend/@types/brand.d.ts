type Brand = {
    id: number;
    name: string;
    kor_name: string;
    eng_name: string;
    brand_category_ids: number[];
}

type BrandContents = {
    id: number;
    title: string;
    image_url: string;
    image_alt: string;
    main_text_1: string;
    main_text_2: string;
}

type BrandShopInformation = {
    brand_name: string;
    main_text: string;
    sub_text: string;
    top_mobile_image_url: string;
    top_pc_image_url: string;
    curations: Goods[];
    brand_contents: BrandContents[];
}
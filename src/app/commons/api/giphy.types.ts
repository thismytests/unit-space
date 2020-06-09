interface ImgInfo {
  'height': number;
  'size': number;
  'url': string;
  'width': number;
}

export interface GiphyItem{
  'type': string;
  'id': string;
  'url': string;
  'slug': string;
  'bitly_gif_url': string;
  'bitly_url': string;
  'embed_url': string;
  'username': string;
  'source': string;
  'title': string;
  'rating': string;
  'images': {
    'downsized_large': ImgInfo;
    'fixed_height_small_still': ImgInfo;
    'original': ImgInfo;
    'fixed_height_downsampled': ImgInfo;
    'downsized_still': ImgInfo;
    'fixed_height_still': ImgInfo;
    'downsized_medium': ImgInfo;
    'downsized': ImgInfo;
    'preview_webp': ImgInfo;
    'original_mp4': ImgInfo;
    'fixed_height_small': ImgInfo;
    'fixed_height': ImgInfo;
    'downsized_small': ImgInfo;
    'preview': ImgInfo;
    'fixed_width_downsampled': ImgInfo;
    'fixed_width_small_still': ImgInfo;
    'fixed_width_small': ImgInfo;
  };
}

export interface ResponseData {
  data: Array<GiphyItem>;
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    staus: number;
    msg: string;
    response_id: string
  };
}

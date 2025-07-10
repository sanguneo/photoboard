export interface IHeaderMeta {
  type: 0|1|2|3;
  title?: string;
  boardBtn?: {
    isEdit?: boolean;
    label?: string;
    text?: string;
  };
  back?: boolean;
}

export interface IRoute {
  route: string;
  header: IHeaderMeta;
  container?: string;
}


// pages
const MAIN_PAGE:IRoute = { route: '/', header: { type: 0 }, container: 'bg-main' };

const BOARD_PAGE:IRoute = { route: '/board', header: { type: 1, title: '사진 등록', back: true }, container: 'bg-content regist-type' };

const BOARD_EDIT_PAGE:IRoute = { route: '/board/edit', header: { type: 1, boardBtn: { isEdit: true, label: '편집 완료 확인', text: '확인' }, back: true }, container: 'board-edit' };

const BOARD_SETTING_PAGE:IRoute = { route: '/board/setting', header: { type: 3, title: '설정', boardBtn: { label: '설정 저장', text: '저장' }, back: true } };
const BOARD_SETTING_FILE_PAGE:IRoute = { route: '/board/setting/file', header: { type: 3, title: '파일 이름', back: true } };
const BOARD_SETTING_POSITION_PAGE:IRoute = { route: '/board/setting/position', header: { type: 3, title: '보드판 노출 위치', back: true } };
const BOARD_SETTING_WIFI_PAGE:IRoute = { route: '/board/setting/wifi', header: { type: 3, title: 'Xp문서함 사진 전송', back: true } };

const FAQ_PAGE:IRoute = { route: '/faq', header: { type: 3, title: '자주 묻는 질문', back: true } };

const PREVIEW_PAGE:IRoute = { route: '/preview', header: { type: 3, title: '서비스 미리보기', back: true }, container: 'preview' };

const XPDOC_PAGE:IRoute = { route: '/xpdoc', header: { type: 2, title: 'Xp문서함', back: true } };
const XPDOC_EDITGALLERY_PAGE:IRoute = { route: '/xpdoc/editgallery', header: { type: 3, title: '파일선택', back: true } };
const XPDOC_FILELIST_PAGE:IRoute = { route: '/xpdoc/filelist', header: { type: 3, title: '2025.07', back: true } };
const XPDOC_NOFILE_PAGE:IRoute = { route: '/xpdoc/nofile', header: { type: 2, title: 'Xp문서함', back: true } };
const XPDOC_NOSEARCH_PAGE:IRoute = { route: '/xpdoc/nosearch', header: { type: 2, title: 'Xp문서함', back: true } };
const XPDOC_SEARCH_PAGE:IRoute = { route: '/xpdoc/search', header: { type: 2, title: 'Xp문서함', back: true } };

const routes: Record<string, IRoute> = {
  MAIN_PAGE,
  BOARD_PAGE,
  BOARD_EDIT_PAGE,
  BOARD_SETTING_PAGE,
  BOARD_SETTING_FILE_PAGE,
  BOARD_SETTING_POSITION_PAGE,
  BOARD_SETTING_WIFI_PAGE,
  FAQ_PAGE,
  PREVIEW_PAGE,
  XPDOC_PAGE,
  XPDOC_EDITGALLERY_PAGE,
  XPDOC_FILELIST_PAGE,
  XPDOC_NOFILE_PAGE,
  XPDOC_NOSEARCH_PAGE,
  XPDOC_SEARCH_PAGE,
};

export const getRouteInfo = (route: string) => {
  if (route.startsWith('/archive')) {
    return { route: '/xpdoc/search', header: { type: 3, title: '아카이브 - ' + route, back: true } };
  }
  const routeEntries = Object.entries(routes);
  const target = routeEntries.find(item => item[1].route === (route.length > 1 ? route.replace(/\/$/, '') : route));
  if (!target) return null;
  return target[1];
};

export default routes;

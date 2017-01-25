import { Gime5FrontendPage } from './app.po';

describe('gime5-frontend App', function() {
  let page: Gime5FrontendPage;

  beforeEach(() => {
    page = new Gime5FrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
